import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator, AsyncStorage, Alert } from 'react-native'

import SvgComponent from '../assets/Logo'
export default class Loading extends Component {

  goto = async () => {
    const { navigation } = this.props
    try {
      const firstRun = await AsyncStorage.getItem('RUN')
      if (firstRun !== null) {
        navigation.navigate('nameGetter')

      } else {
        navigation.navigate('nameGetter')
      }
    } catch (error) {
      Alert.alert('خطا',
        'مشکل در ارتباط با دستگاه',
        [
          {
            text: 'دوباره امتحان کنید', onPress: () => navigation.navigate('Loading')
          }
        ],
        { cancelable: false })
    }

  }
  componentDidMount() {
    setTimeout(() => this.goto() , 1500 )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper} >

          <View style={styles.svgWrapper}>
            <SvgComponent width="100" height="100" />
          </View>
          <View style={styles.introTextWrapper}>
            <Text style={styles.introText} >یادمه!</Text>
          </View>
          <View style={styles.loadingCircle}>
            <ActivityIndicator size={'large'} color={"#fff"} animating={true} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#3486F6'
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 75
  },
  introText: {
    color: '#fff',
    fontSize: 35,
    fontWeight: '600',
    letterSpacing: 1,
    writingDirection:'rtl'
  }
})
