import { StyleSheet } from 'react-native';
import { colors } from './index.style'

export const buttonStyles = StyleSheet.create({
  button: {
    height: 50,
    alignSelf: 'stretch',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonPrimaryActive: {
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.primary
  },
  buttonPrimaryDisabled: {
    backgroundColor: colors.primaryLighter
  },
  buttonAccentActive: {
    backgroundColor: colors.accent
  },
  buttonAccentDisabled: {
    backgroundColor: colors.accent
  },
})