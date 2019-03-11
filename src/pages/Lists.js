import React, { Component } from 'react'
import {
  Text, StyleSheet, View, Animated,
  Platform,
  StatusBar,
  RefreshControl,
   FlatList,
   Dimensions,
   TouchableHighlight,
   Alert
} from 'react-native'


import AntIcon from 'react-native-vector-icons/AntDesign'

import { connect } from 'react-redux'


import { setUser } from '../services/actions/index'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;



class Lists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
        // iOS has negative initial scroll value because content inset...
        Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
      ),
      refreshing: false,
    };
  }
  static navigationOptions = ({ navigation }) => {

    return {
headerTransparent:true,
      headerTitle:(<View style={{width:deviceWidth,alignItems:"center"}}><View style={{backgroundColor:'blue',height:200,width:deviceWidth*(50/100)}} ><Text>hello hazarat</Text></View></View>),
      // headerLeft:(<View style={{backgroundColor:'green',height:200}} ><Text>hello hazarat</Text></View>),
      // headerRight:(<View style={{backgroundColor:'gold',height:200}} ><Text>hello hazarat</Text></View>)
    }
  }


  startSearching=()=>{
    Alert.alert('Searching feature comes after v2.0',[
      {text:'باشه', onPress:()=>{} ,style:'cancel'}
    ],{cancelable:true})
  }
  openMenu=()=>{
    const { navigation } = this.props
    navigation.openDrawer()
  }
  _renderScrollViewContent() {
    const data = Array.from({ length: 30 });
    return (
      <View style={styles.scrollViewContent}>
        {data.map((_, i) => (
          <View key={i} style={styles.row}>
            <Text>{i}</Text>
          </View>
        ))}
      </View>
    );
  }

  componentDidMount() {
    const usernameInput = this.props.navigation.getParam('username', 'empty')

    this.props.setUser(usernameInput)
  }
  render() {
    let data = this.props.todoLists

    // Because of content inset the scroll value will be negative on iOS so bring
    // it back to 0.
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });
    // const titleTranslate = scrollY.interpolate({
    //   inputRange:[0,HEADER_SCROLL_DISTANCE],
    //   outputRange:[1,-100],
    //   extrapolate:'clamp'
    // })

    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2,  HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.65],
      extrapolate: 'clamp',
    });
    const toTop = deviceHeight*(47/100)
    const iconToTop = deviceHeight*(30.5/100)
    const midTop = deviceHeight*(15/100)
    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE/2, HEADER_SCROLL_DISTANCE],
      outputRange: [0,  -midTop, -toTop],
      extrapolate: 'clamp',
    });
    
    const iconTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0,   -iconToTop],
      extrapolate: 'clamp',
    });
    const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)
    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableHighlight);
    return (
      <View style={styles.container} >
        {/* <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.251)"
        /> */}

<Animated.View >
          <AnimatedFlatList

            data={[1,2,3,4,5,456,34,45,456,67,4,33,45,4345,334,53]}
            scrollEventThrottle={-2}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true },
          )}
            renderItem={({ item, index }) => (
              <Animated.View style={styles.listElement} >
                <Text>{item}</Text>
              </Animated.View>
            )}


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
          <Text style={[styles.title]}>فهرست لیست ها</Text>
        </Animated.View>
          <TouchableHighlight  onPress={this.openMenu.bind(this)} style={styles.menuButton} ><AntIcon name={'menufold'} size={25} color="#fff" /></TouchableHighlight>
          <AnimatedTouchable  
          onPress={this.startSearching.bind(this)}
           style={[styles.searchButton,{transform: [{ translateY: iconTranslate }]}]} >
           <AntIcon name={'search1'} size={25} color="#fff" />
           </AnimatedTouchable>
        <Text> Lists </Text>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: 'grey',
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
    backgroundColor: '#03A9F4',
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
    backgroundColor: 'gold',
    marginTop: deviceHeight*(4/100),
    height: 32,
    // alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: deviceHeight*(30/100),
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 35,
    backgroundColor:'red',
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
  listElement:{
    height:250
  },
  menuButton:{
    position:'absolute',
    top:0,
    right:0,
    marginTop: deviceHeight*(4/100),
    marginRight:20,
    // backgroundColor:'gold',
    width:30,
    height:30
  },
  searchButton:{
    backgroundColor: 'gold',
    marginTop: deviceHeight*(4/100),
    height: 32,
    // alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: deviceHeight*(30/100),
    left: 0,
    marginLeft:20
  }
})
const mapStateToProps = (state) => {

  return {
    todoLists: state.dataReducer
  }
}
export default connect(mapStateToProps, { setUser })(Lists)
