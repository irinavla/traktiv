import { StyleSheet } from 'react-native';

export const colors = {
  black: '#1B1C20',
  black10: 'rgb(27,28,32)',
  black11: '#000000',
  white: '#FFFFFF',
  primary: '#334856',
  primaryLighter: '#6E8CA0',
  primaryDisabled: '#C8D1D3',
  accent: '#D97D54',
  accentDarker: '#C4714B',
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
  textPrimary: {
    color: colors.primary,
  },
  textPrimaryLighter: {
    color: colors.primaryLighter,
  },
  textGray: {
    color: colors.gray,
  },
  headline1: {
    fontSize: 28,
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
  },
  container: {
    padding: 20
  },
  activitiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 20,
  }
})