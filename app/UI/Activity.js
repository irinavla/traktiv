import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';
import MoonIcon from '../../assets/icomoon';
import styles, { colors } from '../styles/index.style';
import buttonStyles from '../styles/Buttons.style';
import moment from 'moment';

const activityStyle = StyleSheet.create({
  activityWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '25%',
    marginBottom: 20
  }
})

class Activity extends React.PureComponent {
  render() {
    const { title, slot } = this.props;
    const icon = title.toLowerCase() === 'spinning' ? 'spin' : title.toLowerCase();

    return (
      <View style={activityStyle.activityWrapper}>
        <View
          style={[
            buttonStyles.roundButton,
            { width: 60, height: 60, marginBottom: 10 },
          ]}
        >
          <MoonIcon
            name={`icn_${icon}_light`}
            size={35}
            containerStyle={buttonStyles.roundButton}
            color={colors.accent}
          />
        </View>
        <Text style={[styles.headline3, styles.textCenter, styles.textGray]}>{slot.time.month} {slot.time.dayofMonth}</Text>
        <Text style={[styles.headline3, styles.textCenter, styles.textGray]}>{slot.start} - {slot.end}</Text>


      </View>
    );
  }
}

export default Activity