import React, { Component } from 'react'
import { Text, View, Modal, TouchableHighlight } from 'react-native'
import { Icon } from 'react-native-elements'
import styles, { colors } from '../styles/index.style';
import buttonStyles from '../styles/Buttons.style';
import MoonIcon from '../../assets/icomoon';
import { activities } from '../static/data';

class ScheduleScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities,
      activeButton: '',
      canSchedule: true,
    }
  }

  saveActivity() {
    this.props.navigation.goBack();
  }

  render() {
    const { navigation } = this.props;
    const { activities, canSchedule, activeButton } = this.state;
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
                    activeButton === item.name ? buttonStyles.roundButtonActive : buttonStyles.roundButton
                  ]}
                  activeOpacity={0}
                  onPress={() => this.setState({ activeButton: item.name })}
                >
                  <MoonIcon
                    name={item.icon}
                    size={35}
                    containerStyle={buttonStyles.roundButton}
                    color={activeButton === item.name ? colors.white : colors.accent}
                  />
                </TouchableHighlight>
                <Text style={[styles.title, styles.textCenter, styles.textWhite]}>{item.name}</Text>
              </View>
            ))}
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
