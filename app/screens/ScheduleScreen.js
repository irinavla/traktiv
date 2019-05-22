import React from 'react'
import { Text, View, Modal } from 'react-native'

const ScheduleScreen = ({ isVisible }) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={isVisible}
    presentationStyle="overFullScreen">
    <View>
      <Text>hello world</Text>
    </View>
  </Modal>
)

export default ScheduleScreen
