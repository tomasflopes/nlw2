import { StyleSheet } from 'react-native';

import { colors } from '../../styles/globalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    justifyContent: 'center',
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: colors.white,
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 200,
  },

  description: {
    marginTop: 24,
    color: colors.mainLighter,
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 260,
  },

  confirmButton: {
    marginVertical: 40,
    backgroundColor: colors.secondary,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  confirmButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
  },
});

export default styles;
