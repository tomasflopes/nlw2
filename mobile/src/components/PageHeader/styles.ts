import { StyleSheet } from 'react-native';

import { colors } from '../../styles/globalStyles';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: colors.main,
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: colors.white,
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40,
  },
});

export default styles;
