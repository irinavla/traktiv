import React from 'react-native';
import MoonIcon from '../../assets/icomoon';
import { View, Image, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { colors } from '../styles/index.style';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.white,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    shadowColor: `rgba(${colors.black10}, 0.1)`,
    shadowOffset: { width: 2, height: 7 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
  }
});

const IconButton = ({ icon, containerSize, iconSize }) => (

  <TouchableHighlight
  >
    <MoonIcon
      name={icon}
      size={iconSize}
      containerStyle={{ width: containerSize, height: containerSize }}
      color={colors.accent}
    />
  </TouchableHighlight>
);

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  containerSize: PropTypes.number,
};


IconButton.defaultProps = {
  iconSize: 28,
  containerSize: 45
};


export default IconButton