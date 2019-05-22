import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements';
import styles, { colors } from '../styles/index.style';
import buttonStyles from '../styles/Buttons.style';
import MoonIcon from '../../assets/icomoon';
import PropTypes from 'prop-types';

const cardStyles = StyleSheet.create({
  container: {
    borderRadius: 15,
    padding: 0,
    shadowColor: `rgba(${colors.black10}, 0.1)`,
    shadowOffset: { width: 2, height: 7 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    flexGrow: 2,
  },
  content: {
    padding: 16,
    justifyContent: 'center'
  },
  image: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
    width: '100%',
    height: 108
  },
  avatarStyle: {
    width: 45,
    height: 45,
    marginTop: -45,
    marginBottom: 10,
  }
})


const ActivityCard = ({ name, location, image, icon }) => (
  <Card
    wrapperStyle={{ padding: 0 }}
    containerStyle={cardStyles.container}
    imageStyle={cardStyles.image}
    image={{ uri: image }}
  >

    <View style={[cardStyles.content, { justifyContent: 'center' }]}>
      <View style={[cardStyles.avatarStyle, buttonStyles.roundButton]}>
        <MoonIcon
          name={icon}
          size={28}
          containerStyle={cardStyles.avatarStyle}
          color={colors.accent}
        />
      </View>

      <Text style={[styles.headline3, styles.textCenter, styles.textPrimary]}>{name}</Text>
      <Text style={[styles.subtitle, styles.textCenter, styles.textGray]}>{location}</Text>
    </View>

  </Card>
)

ActivityCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  icon: PropTypes.string
};


export default ActivityCard
