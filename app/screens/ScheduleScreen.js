import React, { Component } from 'react'
import { Text, View, TouchableHighlight, Picker, PickerIOS, DatePickerIOS, Animated, Platform } from 'react-native'
import { Icon } from 'react-native-elements'
import styles, { colors } from '../styles/index.style';
import buttonStyles from '../styles/Buttons.style';
import modalStyles from '../styles/Modal.style';
import MoonIcon from '../../assets/icomoon';
import { activities, slots } from '../static/data';
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
      slots,
      availableDays: [],
      availableSlots: [],
      formattedSlots: [],
      bounceValue: new Animated.Value(100),
      selectedActivity: {
        name: '',
        duration: '15 min',
        placeholderSlot: 'Pick a date & time or find a free slot',
        slot: {}
      },
      showDurationPicker: false,
      showSlotPicker: false
    }
  }

  getDates() {
    const start = Moment(), end = Moment().add(6, 'days');
    const range = Array.from(moment.range(moment(start), moment(end)).by('day'));

    const datesRange = [];
    const arr = {};
    const formatted = [];

    // get weekdays from the date range
    range.forEach(day => {
      if (day.format('dddd') == 'Saturday' || day.format('dddd') == 'Sunday') {
        return;
      } else {
        datesRange.push(day);
      }
    })

    // map dates over available slots
    datesRange.forEach(item => {
      let key = item.format('dddd, MMMM Do');
      let res = Object.entries(slots).filter(it => it[0] == item.format('dddd'));

      if (!res) {
        return;
      } else {
        arr[key] = {
          data: slots[item.format('dddd')],
          time: {
            dayofWeek: item.format('dddd'),
            dayofMonth: item.format('D'),
            month: item.format('MMMM')
          }
        }
      }
    })

    // spread slots into separate entries so we can match them on picker change
    Object.entries(arr).forEach(([day, sessions]) =>
      Object.entries(sessions.data).forEach(slot => {
        formatted.push({
          date: day,
          time: sessions.time,
          formattedSlot: `${day}, ${slot[1].Start}`,
          start: slot[1].Start,
          end: slot[1].End
        })
      }
      )
    )

    this.setState({
      availableSlots: arr,
      formattedSlots: formatted
    })
  }

  componentDidMount() {
    this.getDates();
  }

  addActivity() {
    const { name, duration, slot } = this.state.selectedActivity;

    firebase.firestore().collection('activities').add({
      title: name,
      duration: duration,
      slot: slot
    })
      .then(res => {
        console.log("Document written with ID: ", res.id);
        this.setState({
          selectedActivity: {
            name: '',
            duration: '15 min',
            placeholderSlot: 'Pick a date & time or find a free slot',
            slot: {}
          }
        }, () => this.props.navigation.goBack());
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

  updateActivitySlot = (value, index) => {
    console.log(value, index);
    const { formattedSlots } = this.state;

    formattedSlots.map((el, i) => {
      if (index === i) {
        console.log(el);
        this.setState({
          selectedActivity: {
            ...this.state.selectedActivity,
            placeholderSlot: value,
            slot: el
          }
        })
      }
    })
  }

  openDurationPicker() {
    this.setState({ showDurationPicker: true, showSlotPicker: false })
  }

  openSlotPicker() {
    this.setState({ showDurationPicker: false, showSlotPicker: true })
  }
  render() {
    const { navigation } = this.props;
    const { activities, availableSlots, formattedSlots, selectedActivity, showDurationPicker, showSlotPicker } = this.state;
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
            selectedValue={selectedActivity.placeholderSlot} onValueChange={(value, index) => this.updateActivitySlot(value, index)}>
            {Object.keys(availableSlots).map(day =>
              availableSlots[day]['data'].map((slot, i) => {
                return <Picker.Item key={`${day} ${i}`} label={`${day}: ${slot.Start}`} value={`${day.toString()}: ${slot.Start.toString()} - ${slot.End.toString()}`} />
              }
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
              <TouchableHighlight style={[buttonStyles.dropdownTextWrapper]} onPress={() => this.openDurationPicker()}>
                <Text style={buttonStyles.dropdownText}>{selectedActivity.duration}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={buttonStyles.dropdownButton}
                onPress={() => this.openDurationPicker()}
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
              <TouchableHighlight style={[buttonStyles.dropdownTextWrapper]} onPress={() => this.openSlotPicker()}>
                <Text style={buttonStyles.dropdownText}>{selectedActivity.placeholderSlot ? selectedActivity.placeholderSlot : 'Pick a date & time or find a free slot'}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={buttonStyles.dropdownButton}
                onPress={() => this.openSlotPicker()}
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
              onPress={() => this.addActivity()}
            >
              <Text style={buttonStyles.buttonText}>Schedule</Text>
            </TouchableHighlight>
          </View>
        </View>

        {Platform.OS === 'ios' ? iosDurationPicker : androidDurationPicker}

        {iosSlotPicker}

      </View>
    )
  }
}

export default ScheduleScreen
