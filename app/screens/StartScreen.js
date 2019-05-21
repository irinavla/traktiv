import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Layout from '../UI/Layout';
import styles from '../styles/index.style';
import TracktivHeader from '../UI/Header';
import ActivityCard from '../UI/ActivityCard';
import { activities } from '../static/data';


export default class StartScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activities
    }
  }

  render() {
    const { activities } = this.state;
    return (
      <Layout>
        <TracktivHeader />
        <View style={styles.container}>
          <View>
            <Text style={[styles.headline2, styles.textCenter, styles.textBlack, { marginBottom: 20 }]}>Track Your Activity</Text>

            {activities && (
              <View style={styles.activitiesContainer}>
                {activities.map((item, index) => (
                  <ActivityCard key={index} name={item.name} location={item.location} image={item.image} icon={item.icon} />
                ))}
              </View>
            )}
          </View>

          <View>
            <Text style={[styles.headline2, styles.textBlack, { marginBottom: 20 }]}>Scheduled Activities</Text>
            <Text style={[styles.bodyCopy, styles.textPrimaryLighter]}>You don’t have any activities scheduled yet.</Text>
          </View>
          {/* 
          <Text style={[styles.headline3, styles.textCenter]}>Headline 3</Text>
          <Text style={[styles.title, styles.textCenter]}>Title</Text>
          <Text style={[styles.subtitle, styles.textCenter]}>Subtitle</Text>
          <Text style={[styles.bodyCopy]}>Body copy</Text>
          <Text style={[styles.bodyCopySmall]}>Body copy small</Text> */}
        </View>
      </Layout>
    )
  }
}
