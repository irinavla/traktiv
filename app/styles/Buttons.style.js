import { StyleSheet } from 'react-native';
import { colors } from './index.style'

export default buttonStyles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 50,
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
  buttonText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: 'Teko Medium',
    textTransform: 'uppercase'
  },
})