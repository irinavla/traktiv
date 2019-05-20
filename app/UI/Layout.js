import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { colors } from '../styles/index.style';

const Layout = ({ children }) => (
  <View style={{ flex: 1, alignItems: 'center' }}>
    <SafeAreaView style={styles.attribution}>
      {children}
    </SafeAreaView>
  </View>
)

const styles = StyleSheet.create({
  attribution: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});


export default Layout;