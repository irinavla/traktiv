import React, { Component } from 'react'
import { Text, View, TouchableHighlight, Picker, PickerIOS, DatePickerIOS, Animated, Platform } from 'react-native'
import { Icon } from 'react-native-elements'
import styles, { colors } from '../styles/index.style';
import buttonStyles from '../styles/Buttons.style';
import modalStyles from '../styles/Modal.style';
import MoonIcon from '../../assets/icomoon';
import { activities, availableSlots } from '../static/data';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

import firebase from 'react-native-firebase';

class ScheduleScreen extends Component {
  constructor(props) {
    super(props);

    this.ref = firebase.firestore().collection('activities');

    this.state = {
      activities,
      availableSlots,
      availableDays: [],
      bounceValue: new Animated.Value(100),
      selectedActivity: {
        name: '',
        duration: '15 min',
        slot: ''
      },
      showDurationPicker: false,
      showSlotPicker: false
    }
  }

  getDates() {
    const start = Moment(), end = Moment().add(6, 'days');
    const range = moment.range(moment(start), moment(end));


    console.log(availableSlots);

    const datesRange = Array.from(range.by('day'));
    // const datesRange = Array.from(range.by('day')).map(d => d.format('dddd, MMMM Do'));


    this.setState({ availableDays: datesRange });

    console.log(datesRange);
    console.log(Object.keys(availableSlots));


    // let result = Object.entries(availableSlots).filter(item => {

    //   let arr = [];

    //   if (item[0] == 'Monday') {
    //     arr.push({ Monday: item[1] });
    //   } else {
    //     return
    //   }
    //   return arr;

    // });

    // console.log(result);
    let arr = [];

    datesRange.forEach(item => {
      let key = item.format('dddd, MMMM Do');
      let values = Object.entries(availableSlots).filter(el => el[0] == item.format('dddd'));

      const v = { ...values }
      console.log(v[0]);
      arr.push({ [key]: v[0] })
      // if (item.format('dddd') === O)
    })


    console.log(arr);
  }

  saveActivity() {
    this.props.navigation.goBack();
  }

  addTodo() {
    const { name, duration } = this.state.selectedActivity;

    firebase.firestore().collection('activities').add({
      title: name,
      duration: duration
    })
      .then(res => {
        console.log("Document written with ID: ", res.id);
        this.setState({
          selectedActivity: {
            name: '',
            duration: '15 min',
            slot: ''
          }
        });
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  }

  updateActivityName = (value) => {
    this.setState({
      selectedActivity: {
        ...this.state.selectedActivity,
        name: value
      }
    })
  }

  updateActivityDuration = (value) => {
    this.setState({
      selectedActivity: {
        ...this.state.selectedActivity,
        duration: value
      }
    })
  }

  updateActivitySlot = (value) => {
    this.setState({
      selectedActivity: {
        ...this.state.selectedActivity,
        slot: value
      }
    })
  }


  componentDidMount() {
    this.getDates();
  }

  render() {
    const { navigation } = this.props;
    const { activities, availableSlots, selectedActivity, showDurationPicker, showSlotPicker } = this.state;
    const durationOptions = ['15 min', '30 min', '45 min', '1 h', '1 h 30 min', '2 h'];
    const canSchedule = selectedActivity.name && selectedActivity.duration && selectedActivity.slot ? true : false;


    const iosDurationPicker = (
      showDurationPicker && (
        <View style={modalStyles.pickerWrapper}>
          <Icon
            size={20}
            name='close'
            type='evilicons'
            containerStyle={{
              position: 'absolute',
              end: 30,
              top: 20,
              zIndex: 100
            }}
            color={colors.black}
            onPress={() => this.setState({ showDurationPicker: false })}
          />
          <PickerIOS
            testID="selectDuration"
            mode="dialog"
            style={modalStyles.pickerStyle}
            selectedValue={selectedActivity.duration} onValueChange={this.updateActivityDuration}>
            {durationOptions.map((item, index) => <Picker.Item key={index} label={item} value={item} />)}
          </PickerIOS>
        </View>
      )
    );

    const iosSlotPicker = (
      showSlotPicker && (
        <View style={modalStyles.pickerWrapper}>
          <Icon
            size={20}
            name='close'
            type='evilicons'
            containerStyle={{
              position: 'absolute',
              end: 30,
              top: 20,
              zIndex: 100
            }}
            color={colors.black}
            onPress={() => this.setState({ showSlotPicker: false })}
          />
          <PickerIOS
            testID="selectTimeSlot"
            mode="dialog"
            style={modalStyles.pickerStyle}
            selectedValue={selectedActivity.slot} onValueChange={this.updateActivitySlot}>
            {Object.keys(availableSlots).map(day =>
              availableSlots[day].map(slot =>
                <Picker.Item key={slot + day} label={`${day}: ${slot.Start}`} value={`${day}: ${slot.Start}`} />
              )
            )}
          </PickerIOS>
        </View>
      )
    );

    const androidDurationPicker = (
      <Picker
        testID="selectDuration"
        mode="dialog"
        style={modalStyles.pickerStyle}
        selectedValue={selectedActivity.duration} onValueChange={this.updateActivityDuration}>
        {durationOptions.map((item, index) => <Picker.Item key={index} label={item} value={item} />)}
      </Picker>
    )

    return (
      <View style={{ flex: 1, backgroundColor: colors.primary }} >
        <View style={modalStyles.modalInner}>
          <Icon
            size={20}
            name='close'
            type='evilicons'
            containerStyle={{
              position: 'absolute',
              start: 30,
              top: 50
            }}
            color={colors.white}
            onPress={() => navigation.goBack()}
          />

          <Text style={[styles.headline1, styles.textCenter, styles.textWhite]}>Schedule your activity</Text>

          <View style={modalStyles.activitiesWrapper}>
            {activities.map((item, index) => (
              <View key={index}>
                <TouchableHighlight
                  style={[
                    buttonStyles.roundButton,
                    { width: 60, height: 60, marginBottom: 10 },
                    selectedActivity.name === item.name ? buttonStyles.roundButtonActive : buttonStyles.roundButton
                  ]}
                  activeOpacity={0}
                  onPress={() => this.updateActivityName(item.name)}
                >
                  <MoonIcon
                    name={item.icon}
                    size={35}
                    containerStyle={buttonStyles.roundButton}
                    color={selectedActivity.name === item.name ? colors.white : colors.accent}
                  />
                </TouchableHighlight>
                <Text style={[styles.title, styles.textCenter, styles.textWhite]}>{item.name}</Text>
              </View>
            ))}
          </View>

          <View style={{ flex: 1 }}>
            <Text style={[styles.bodyCopy, styles.textWhite]}>How long do you want to do this activity?</Text>

            <View style={buttonStyles.dropdownContainer}>
              <TouchableHighlight style={[buttonStyles.dropdownTextWrapper]} onPress={() => this.setState({ showDurationPicker: true })}>
                <Text style={buttonStyles.dropdownText}>{selectedActivity.duration}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={buttonStyles.dropdownButton}
                onPress={() => this.setState({ showDurationPicker: true })}
              >
                <MoonIcon
                  name='icn_dropdown'
                  size={15}
                  containerStyle={{ backgroundColor: colors.accent }}
                  style={{ marginTop: -5 }}
                  color={colors.white}
                />
              </TouchableHighlight>
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={[styles.bodyCopy, styles.textWhite]}>When do you want to do this activity?</Text>

            <View style={buttonStyles.dropdownContainer}>
              <TouchableHighlight style={[buttonStyles.dropdownTextWrapper]} onPress={() => this.setState({ showSlotPicker: true })}>
                <Text style={buttonStyles.dropdownText}>{selectedActivity.slot ? selectedActivity.slot : 'Pick a date & time or find a free slot'}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={buttonStyles.dropdownButton}
                onPress={() => this.setState({ showSlotPicker: true })}
              >
                <MoonIcon
                  name='icn_search_light'
                  size={15}
                  containerStyle={{ backgroundColor: colors.accent }}
                  style={{ marginTop: -5 }}
                  color={colors.white}
                />
              </TouchableHighlight>
            </View>
          </View>




          <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 60, width: '100%' }}>
            <TouchableHighlight
              disabled={!canSchedule}
              activeOpacity={1}
              underlayColor={colors.accentDarker}
              style={[canSchedule ? buttonStyles.buttonPrimaryActive : buttonStyles.buttonPrimaryDisabled, buttonStyles.button]}
              onPress={() => this.addTodo()}
            >
              <Text style={buttonStyles.buttonText}>Schedule</Text>
            </TouchableHighlight>
          </View>
        </View>

        {Platform.OS === 'ios' ? iosDurationPicker : androidDurationPicker}

        {iosSlotPicker}

        {/* {Platform.OS === 'ios' ? iosSlotPicker : androidSlotPicker} */}

      </View>
    )
  }
}

export default ScheduleScreen
