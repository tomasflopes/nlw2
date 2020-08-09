import { StyleSheet } from 'react-native';

import { colors } from '../../styles/globalStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },

  teacherList: {
    marginTop: -40,
  },

  searchForm: {
    marginBottom: 24,
  },

  label: {
    color: colors.mainLighter,
    fontFamily: 'Poppins_400Regular',
  },

  input: {
    height: 52,
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputBlock: {
    width: '48%',
  },

  submitButton: {
    backgroundColor: colors.secondary,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitButtonText: {
    color: colors.white,
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },
});

export default styles;
