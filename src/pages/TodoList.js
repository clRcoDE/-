import React, { Component } from 'react'
import {
  Text, StyleSheet, View, Animated,
  Platform,
  StatusBar,
  RefreshControl,
  FlatList,
  Dimensions,
  TouchableHighlight,
  Alert,
  TextInput
} from 'react-native'


import AntIcon from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import { connect } from 'react-redux'


import { setUser , addTodo } from '../services/actions/index'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;



class Lists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
        // iOS has negative initial scroll value because content inset...
        Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,


        textInput='',
        isShowButtons=false,
        lastItem=null
      ),
    };
  }
  static navigationOptions = ({ navigation }) => {

    return {
      headerTransparent: true,
      // headerTitle:(<View style={{width:deviceWidth,alignItems:"center"}}><View style={{backgroundColor:'blue',height:200,width:deviceWidth*(50/100)}} ><Text>hello hazarat</Text></View></View>),
      // headerLeft:(<View style={{backgroundColor:'green',height:200}} ><Text>hello hazarat</Text></View>),
      // headerRight:(<View style={{backgroundColor:'gold',height:200}} ><Text>hello hazarat</Text></View>)
    }
  }
  headerComponent = () => {
    return (
      <View style={styles.flatlistHeader} ></View>)
  }



  startSearching = () => {
    Alert.alert('Searching feature comes after v2.0', [
      { text: 'باشه', onPress: () => { }, style: 'cancel' }
    ], { cancelable: true })
  }
  openMenu = () => {
    const { navigation } = this.props
    navigation.openDrawer()
  }


  navTo=()=>{
    const { navigation } = this.props
    navigation.navigate('TodoList')
  }

  renderFooter = (index) => {

if(index<=4)
return null

    return (
      <View style={styles.listFooterStyle}><Text>{index}</Text></View>
    );
  };

setName=(text)=>{
  this.setState({
    textInput:text
  })
}

hideButtons=()=>{
  this.setState({isShowButtons:false})
}
showButtons=()=>{
  this.setState({isShowButtons:true})
}
clearInput=()=>{
  this.setState({textInput:''})
}

addNewTodo=(ListName)=>{
this.props.addTodo(ListName,this.state.textInput)
this.setState({textInput:''})
}

  // componentDidMount() {
  //   const usernameInput = this.props.navigation.getParam('username', 'empty')

  //   this.props.setUser(usernameInput)
  // }
  render() {

    // Because of content inset the scroll value will be negative on iOS so bring
    // it back to 0.
    const scrollY = Animated.add(
      this.state.scrollY,
      75,
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 1.5, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });
    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 0.9, 0.65],
      extrapolate: 'clamp',
    });
    const toTop = deviceHeight * (47 / 100)
    const iconToTop = deviceHeight * (31 / 100)
    const midTop = deviceHeight * (15 / 100)
    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -midTop, -toTop],
      extrapolate: 'clamp',
    });

    const iconTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -iconToTop],
      extrapolate: 'clamp',
    });
    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableHighlight);

    const todoId = this.props.navigation.getParam('id','none')
    const selectedTodo = this.props.todoLists.filter((item)=>{if(item.id === todoId){return item}})
    return (
      <View style={styles.container} >
        <Animated.View style={styles.flatlistWrapper} >


          <FlatList

            data={selectedTodo[0].todos}
            keyExtractor={(item, index) => `${index} `}
            ListHeaderComponent={this.headerComponent}
            ListFooterComponent={this.renderFooter(selectedTodo[0].todos.length)}
            ref={ref => this.flatList = ref}
          onContentSizeChange={() => this.flatList.scrollToEnd({ animated: true })}
            scrollEventThrottle={-2}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
              // { useNativeDriver: true },
            )}
            style={styles.flatlistStyle}
            renderItem={({ item, index }) => (
            <TouchableHighlight onPress={()=>this.navTo(item.title)} style={styles.listElement} >
            <View style={styles.todoWrapper}>
            
            <View style={styles.listTextWrapper}><Text style={styles.listText} >{item.title}</Text></View>
            <EntypoIcon name={"circle"} size={25} color={"#1fe062"} />
            </View>
            </TouchableHighlight>)}


          />
        </Animated.View>




        <Animated.View
          pointerEvents="none"
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslate }] },
          ]}
        >
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }],
              },
            ]}
            source={require('../assets/images/city.png')}
          />
        </Animated.View>


        <Animated.View
          style={[
            styles.bar,
            {
              transform: [
                { scale: titleScale },
                { translateY: titleTranslate },
              ],
            },
          ]}
        >
          <Text style={[styles.title]}>{selectedTodo[0].title}</Text>
        </Animated.View>


        <TouchableHighlight onPress={this.openMenu.bind(this)} style={styles.menuButton} >
          <AntIcon name={'menufold'} size={25} color="#fff" /></TouchableHighlight>

        <AnimatedTouchable onPress={this.startSearching.bind(this)} style={[styles.searchButton, { transform: [{ translateY: iconTranslate }] }]} >
          <AntIcon name={'delete'} size={25} color="#fff" />
        </AnimatedTouchable>

        <View style={styles.inputNewList}>
        <View style={styles.addButtonWrapper}>
        {this.state.isShowButtons && 
           <TouchableHighlight 
           underlayColor={'rgba(33, 86, 158,0.7)'} 
           style={styles.addButton} 
           onPress={()=>this.addNewTodo(selectedTodo[0].title)} >
           <Text>اضافه کن</Text>
           </TouchableHighlight>}
        </View>
        {this.state.isShowButtons && 
        <TouchableHighlight
         underlayColor={'rgba(255,255,255,0.9)'}
         onPress={this.clearInput.bind(this)}
         style={styles.clearButton}>
        <EvilIcon name={'close'} size={18} color='#222'  />
        </TouchableHighlight>}
       
          <TextInput 
          underlayColor={'rgba(255,255,255,0.65)'}  
          value={this.state.textInput} 
          onChangeText={(text)=>this.setName(text)}  
          multiline={true} 
          maxLength={36} 
          style={styles.inputStyles}
           onBlur={this.hideButtons.bind(this)}
           onFocus={this.showButtons.bind(this)}
          placeholder={'کاراتو اینجا اضافه کن'} >
          </TextInput>
          {this.state.isShowButtons && <TouchableHighlight underlayColor={'rgba(150,150,150,0.65)'} onPress={()=>{}} style={styles.colorSelector} >
          <EntypoIcon name={"circle"} size={25} color={"#1fe062"}   />
          </TouchableHighlight>}
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }, fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#3486F6',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bar: {
    // backgroundColor: 'gold',
    marginTop: deviceHeight * (4 / 100),
    height: 32,
    // alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: deviceHeight * (30 / 100),
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 35,
    // backgroundColor:'red',
    fontWeight: '600',
    // textAlign:'left',
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listElement: {
    height: 65,
    backgroundColor: 'transparent',
    // borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#666',
    borderBottomColor: '#666',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // flexWrap:'wrap-reverse'

  },
  todoWrapper:{
    // borderWidth:2,
    flex:1,
    // flexWrap:'wrap-reverse',
    margin:12,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'flex-end',

  },
  listTextWrapper:{
// borderWidth:2,
marginHorizontal:15,
justifyContent: 'center',
alignItems: 'center',
  },
  flatlistWrapper: {
    flex: 1
    // borderColor:'green',
    // borderWidth:5,
    // marginTop:300

  },
  flatlistHeader: {
    backgroundColor: '#2172e0',
    height: deviceHeight * (30/ 100),
    // borderWidth:4
  },
  // flatlistStyle:{
  //   // borderColor:'red',
  //   // borderWidth:5,
  //   // marginTop:200
  //   flex:1,
  //   paddingBottom: 300,

  // },
  menuButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginTop: deviceHeight * (4 / 100),
    marginRight: 20,
    // backgroundColor:'gold',
    width: 30,
    height: 30
  },
  searchButton: {
    // backgroundColor: 'gold',
    marginTop: deviceHeight * (4 / 100),
    height: 32,
    // alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: deviceHeight * (31 / 100),
    left: 0,
    marginLeft: 20
  },
  inputStyles: {
    // textAlign: 'center',
    flex:1,
    fontSize:20,
    // borderWidth:2,
    // borderColor:'gold',
    padding:16,
    marginBottom:2
  },
  inputNewList: {
    backgroundColor: '#fff',
    minHeight: 65,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // paddingRight:25,
    position: "relative",
    zIndex: 2,
    borderWidth:1,
    borderRadius:3,
    borderColor:'#666',
    // flexWrap:"wrap-reverse",
    flexDirection: 'row',
  },
  addButtonWrapper:{
marginBottom:12,
margin:6
  },
  addButton:{
backgroundColor:'#2172e0',
borderRadius: 3,
padding:8
  },
  listFooterStyle: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'transparent'

  },listText:{
    color:'#222',
    fontSize:14,
    fontWeight:'600',
    // textAlign:'right'
  },
  clearButton:{
   marginBottom:22,
   marginRight:6
  },
  colorSelector:{
    marginBottom:15,
    marginHorizontal:6,
    borderRadius:100
  }
})
const mapStateToProps = (state) => {

  return {
    todoLists: state.dataReducer
  }
}
export default connect(mapStateToProps, { setUser  , addTodo })(Lists)
