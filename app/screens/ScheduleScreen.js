import React, { Component } from 'react'
import { Text, View, TouchableHighlight, Picker } from 'react-native'
import { Icon } from 'react-native-elements'
import styles, { colors } from '../styles/index.style';
import buttonStyles from '../styles/Buttons.style';
import modalStyles from '../styles/Modal.style';
import MoonIcon from '../../assets/icomoon';
import { activities } from '../static/data';

class ScheduleScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities,
      selectedActivity: {
        name: '',
        duration: '15 min',
        slot: ''
      },
      canSchedule: true,
    }
  }

  saveActivity() {
    this.props.navigation.goBack();
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

  render() {
    const { navigation } = this.props;
    const { activities, canSchedule, selectedActivity } = this.state;
    const durationOptions = ['15 min', '30 min', '45 min', '1 h', '1 h 30 min', '2 h'];

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
              <View style={[buttonStyles.dropdownTextWrapper]}>
                <Text style={buttonStyles.dropdownText}>{selectedActivity.duration}</Text>
              </View>

              <TouchableHighlight style={buttonStyles.dropdownButton}>
                <MoonIcon
                  name='icn_dropdown'
                  size={15}
                  containerStyle={{ backgroundColor: colors.accent }}
                  style={{ marginTop: -5 }}
                  color={colors.white}
                />
              </TouchableHighlight>
            </View>

            <Picker
              testID="selectDuration"
              mode="dropdown"
              selectedValue={selectedActivity.duration} onValueChange={this.updateActivityDuration}>
              {durationOptions.map((item, index) => <Picker.Item key={index} label={item} value={item} />)}
            </Picker>
          </View>


          <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 60, width: '100%' }}>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor={colors.accentDarker}
              style={[canSchedule ? buttonStyles.buttonPrimaryActive : buttonStyles.buttonPrimaryDisabled, buttonStyles.button]}
            >
              <Text style={buttonStyles.buttonText}>Schedule</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}

export default ScheduleScreen
