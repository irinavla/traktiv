import { StyleSheet } from 'react-native';
import { colors } from './index.style'

export default modalStyles = StyleSheet.create({
  modalInner: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingTop: 90,
    paddingLeft: 20,
    paddingRight: 20
  },
  activitiesWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginBottom: 40
  }
});