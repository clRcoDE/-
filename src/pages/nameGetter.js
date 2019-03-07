import React, { Component } from 'react'
import { Text, StyleSheet, View , TextInput , AsyncStorage } from 'react-native'

export default class nameGetter extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text> textInComponent </Text>
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
