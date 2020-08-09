import { StyleSheet } from 'react-native';

import { colors } from '../../styles/globalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    justifyContent: 'center',
    padding: 40,
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: colors.white,
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },

  button: {
    height: 150,
    width: '48%',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },

  buttonPrimary: {
    backgroundColor: colors.mainLight,
  },

  buttonSecondary: {
    backgroundColor: colors.secondary,
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: colors.white,
    fontSize: 20,
  },

  totalConnectionsText: {
    fontFamily: 'Poppins_400Regular',
    color: colors.mainLighter,
    fontSize: 11,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  },
});

export default styles;
