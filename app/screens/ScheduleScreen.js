import React, { Component } from 'react'
import { Text, View, Modal, TouchableHighlight } from 'react-native'
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
      activeButton: '',
      canSchedule: true,
      showOverlay: false
    }
  }

  closeModal(visible) {
    this.setState({ showOverlay: visible })
  }

  render() {
    const { isVisible } = this.props;
    const { activities, canSchedule, showOverlay } = this.state;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={isVisible}
        presentationStyle="overFullScreen"
        style={{ backgroundColor: colors.primary }}
      >
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
            onPress={() => this.closeModal(!isVisible)}
          />

          <Text style={[styles.headline1, styles.textCenter, styles.textWhite]}>Schedule your activity</Text>

          <View style={modalStyles.activitiesWrapper}>
            {activities.map((item, index) => (
              <View key={index}>
                <TouchableHighlight
                  style={[buttonStyles.roundButton, { width: 60, height: 60, marginBottom: 10 }]}
                >
                  <MoonIcon
                    name={item.icon}
                    size={35}
                    containerStyle={buttonStyles.roundButton}
                    color={colors.accent}
                  />
                </TouchableHighlight>
                <Text style={[styles.title, styles.textCenter, styles.textWhite]}>{item.name}</Text>
              </View>
            ))}
          </View>

          <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 60, width: '100%' }}>
            <TouchableHighlight
              activeOpacity={0}
              underlayColor={colors.accentDarker}
              style={[canSchedule ? buttonStyles.buttonPrimaryActive : buttonStyles.buttonPrimaryDisabled, buttonStyles.button]}
            >
              <Text style={buttonStyles.buttonText}>Schedule</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    )
  }
}

export default ScheduleScreen
