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
    borderColor: '#87BCBF'
  },
  buttonPrimaryDisabled: {
    backgroundColor: colors.primaryLighter
  },
  buttonAccentActive: {
    backgroundColor: colors.accent,
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
  roundButton: {
    borderRadius: 50,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    shadowColor: `rgba(${colors.black10}, 0.1)`,
    shadowOffset: { width: 2, height: 7 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  roundButtonActive: {
    backgroundColor: colors.primary,
  }
})