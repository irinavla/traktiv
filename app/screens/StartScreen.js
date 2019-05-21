import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Layout from '../UI/Layout'
import styles from '../styles/index.style';

export default class StartScreen extends Component {
  render() {
    return (
      <Layout>
        <View>
          <Text style={[styles.headline1, styles.textCenter]}>Headline 1</Text>
          <Text style={[styles.headline2, styles.textCenter]}>Headline 2</Text>
          <Text style={[styles.headline3, styles.textCenter]}>Headline 3</Text>
          <Text style={[styles.title, styles.textCenter]}>Title</Text>
          <Text style={[styles.subtitle, styles.textCenter]}>Subtitle</Text>
          <Text style={[styles.bodyCopy]}>Body copy</Text>
          <Text style={[styles.bodyCopySmall]}>Body copy small</Text>
        </View>
      </Layout>
    )
  }
}
