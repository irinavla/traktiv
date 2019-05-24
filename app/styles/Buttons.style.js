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
    backgroundColor: colors.accent,
  },
  dropdownContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    borderColor: colors.accent,
    marginTop: 10
  },
  dropdownText: {
    fontSize: 15,
    fontFamily: 'WorkSans-Light',
    color: colors.primary,
    flex: 1,
    width: '80%'
  },
  dropdownTextWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    paddingLeft: 20
  },
  dropdownButton: {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    width: 56,
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center'
  }
})