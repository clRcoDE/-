import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, AsyncStorage ,TouchableHighlight } from 'react-native'
import SvgComponent from '../assets/Logo'
export default class nameGetter extends Component {
constructor(props){
  super(props)
  this.state={
    textInput:null
  }
}

setText=(text)=>{
  this.setState({
    textInput:text
  })
}
  goto= async ()=>{
    const {navigation} = this.props
    try{
        // await AsyncStorage.setItem('RUN',`${this.state.textInput}`)
        navigation.navigate('ListsScreen',{username:`${this.state.textInput}`})
    }catch (error){
     alert(error)
    }
  }
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.header} >
          <SvgComponent width="40" height="40" />
          <Text style={styles.appNameText} >یادمه!</Text>

        </View>
        <View style={styles.body} >
        <View style={styles.enterNameTextWrapper}>
        <Text style={styles.enterNameText} >اسمتو این پایین وارد کن</Text>
        
        </View>
        <View style={styles.enterNameInputWrapper}>
        <TextInput style={styles.inputStyles} onChangeText={(text)=>this.setText(text)} />
        
        </View>
        </View>
        <View style={styles.footer} >
        <TouchableHighlight onPress={()=>this.goto()} underlayColor={'rgba(235,235,255,0.5)'} style={styles.navigateTouchable}>
        <Text style={styles.navigateTouchableText} >اسممو زدم بریم :)</Text>
        </TouchableHighlight>
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
  },
  header: {
    flex: 2,
    // backgroundColor: 'red',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  body: {
    flex: 3,
    // backgroundColor: 'blue',
    alignItems: 'center',

  },
  footer: {
    flex: 3,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appNameText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
    writingDirection:'rtl'
  },
  enterNameTextWrapper:{
    flex:1,
    // backgroundColor:'purple',
    // width:300,
    justifyContent: 'center',
    alignItems: 'center',

  },
  enterNameInputWrapper:{
flex:1,
// backgroundColor:'red',
// width:300,
justifyContent: 'center',
alignItems: 'center',

  },
  enterNameText:{
    color:'navy',
    fontSize:30,
    fontWeight:'600'

  },
  inputStyles:{
    borderBottomWidth:1,
    borderBottomColor: 'rgba(200,200,255,0.5)',
    width:200
  },
  navigateTouchable:{
    height:50,
    width:150,
    borderRadius:10,
    borderWidth:1,
    borderColor:'rgba(100,100,100,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
