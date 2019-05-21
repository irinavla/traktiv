import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements'
import { colors } from '../styles/index.style'


const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: `rgba(${colors.black10}, 0.1)`,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: colors.white,
    width: '100%',
    height: 80,
    position: 'relative'
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  logo: {
    height: 31,
    width: 114,
  },
})

const TracktivHeader = () => (
  <Header
    containerStyle={styles.wrapper}
    centerContainerStyle={styles.centerContainer}
    backgroundColor={colors.white}
    centerComponent={<Image source={require('../../assets/images/logo_header_wide.png')} style={styles.logo} />}
  />
)

export default TracktivHeader;