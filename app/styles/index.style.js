import { StyleSheet } from 'react-native';

export const colors = {
  black: '#1B1C20',
  black10: '#1B1C20',
  black11: '#000000',
  white: '#FFFFFF',
  primary: '#334856',
  primaryLighter: '#6E8CA0',
  accent: '#D97D54',
  gray: '#7D8184',
  softGray: '#425965',
};

export default StyleSheet.create({
  textWhite: {
    color: colors.white,
  },
  textBlack: {
    color: colors.black,
  },
  textPrimaryLighter: {
    color: colors.primaryLighter,
  },
  textGray: {
    color: colors.gray,
  },
  headline1: {
    fontSize: 30,
    fontFamily: 'Work Sans SemiBold',
  },
  headline2: {
    fontSize: 18,
    fontFamily: 'Work Sans SemiBold',
  },
  headline3: {
    fontSize: 14,
    fontFamily: 'Work Sans SemiBold',
  },
  bodyCopy: {
    fontSize: 14,
    fontFamily: 'WorkSans-Light'
  },
  bodyCopySmall: {
    fontSize: 12,
    fontFamily: 'WorkSans-Light'
  },
  title: {
    fontSize: 16,
    fontFamily: 'Teko SemiBold',
    textTransform: 'uppercase'
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'Teko Medium',
    textTransform: 'uppercase'
  },
  textCenter: {
    textAlign: 'center'
  }
})