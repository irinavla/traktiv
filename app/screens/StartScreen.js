import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import Layout from '../UI/Layout';
import styles, { colors } from '../styles/index.style';
import buttonStyles from '../styles/Buttons.style';
import TracktivHeader from '../UI/Header';
import ActivityCard from '../UI/ActivityCard';
import ScheduleScreen from './ScheduleScreen';
import { activities } from '../static/data';

export default class StartScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activities,
      scheduledActivities: [],
      scheduleModalIsVisible: false
    }
  }

  openScheduleActivityModal(visible) {
    this.setState({ scheduleModalIsVisible: visible })
  }

  render() {
    const { activities, scheduleModalIsVisible } = this.state;
    return (
      <Layout>
        <ScheduleScreen isVisible={scheduleModalIsVisible} dismissModal={() => this.openScheduleActivityModal(scheduleModalIsVisible)} />
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

            <View style={styles.container}>
              <TouchableHighlight
                activeOpacity={0}
                underlayColor={colors.accentDarker}
                onPress={() => this.openScheduleActivityModal(!scheduleModalIsVisible)}
                style={[buttonStyles.button, buttonStyles.buttonAccentActive]}
              >
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                  <Image
                    source={{ uri: 'https://s3.amazonaws.com/tracktiv/icn_plus.png' }}
                    style={{ width: 30, height: 30, marginRight: 10 }}
                  />
                  <Text style={buttonStyles.buttonText}>Schedule activity</Text>
                </View>
              </TouchableHighlight>
            </View>
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
