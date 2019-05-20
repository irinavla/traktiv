import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Layout from '../UI/Layout'

export default class StartScreen extends Component {
  render() {
    return (
      <Layout>
        <View>
          <Text> This is the home screen with activities </Text>
        </View>
      </Layout>
    )
  }
}
