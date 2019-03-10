import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {connect} from 'react-redux'
 class Lists extends Component {

  static navigationOptions=({navigation})=>{

    return{

      headerTitle:navigation.getParam('username','empty')
    }
  }
  render() {
    return (
      <View style={styles.container} >
        <Text> Lists </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({


    container:{
        flex:1,
        backgroundColor:'grey',
        justifyContent: 'center',
    }
})
const mapStateToProps =(state)=>{
  
  return{
    todoLists : state.dataReducer
  }
}
export default connect(mapStateToProps)(Lists)
