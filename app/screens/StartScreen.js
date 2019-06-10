import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import Layout from '../UI/Layout';
import styles, { colors } from '../styles/index.style';
import buttonStyles from '../styles/Buttons.style';
import TracktivHeader from '../UI/Header';
import ActivityCard from '../UI/ActivityCard';
import { activities } from '../static/data';
import firebase from 'react-native-firebase';
import Activity from '../UI/Activity';

import { connect } from 'react-redux';
import * as actions from '../store/actions/getActivities';

class StartScreen extends Component {

  constructor(props) {
    super(props);

    this.ref = firebase.firestore().collection('activities');
    this.unsubscribe = null;

    this.state = {
      activities,
      scheduledActivities: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCollectionUpdate = (querySnapshot) => {
    const activities = [];
    querySnapshot.forEach((doc) => {
      const { title, duration, slot } = doc.data();

      activities.push({
        key: doc.id,
        title,
        duration,
        slot
      });
    });

    this.setState({
      scheduledActivities: activities,
      loading: false,
    });
  }

  render() {
    const { activities, scheduledActivities, loading } = this.state;

    return (

      <Layout>
        <TracktivHeader />
        <ScrollView style={styles.container}>
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



            {scheduledActivities ? (
              <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                <FlatList
                  numColumns={4}
                  data={scheduledActivities}
                  renderItem={({ item }) => <Activity key={item.key} {...item} />}
                />
              </View>
            ) : <Text style={[styles.bodyCopy, styles.textPrimaryLighter]}>You don’t have any activities scheduled yet.</Text>}

            <View style={styles.container}>
              <TouchableHighlight
                activeOpacity={0}
                underlayColor={colors.accentDarker}
                onPress={() => this.props.navigation.navigate('Schedule')}
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

        </ScrollView>
      </Layout>
    )
  }
}


const mapStateToProps = state => {
  return {
    scheduledActivities: state.activities,
    loading: state.loading
  }
}


export default connect(mapStateToProps)(StartScreen)