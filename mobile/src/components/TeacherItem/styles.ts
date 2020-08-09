import { StyleSheet } from 'react-native';

import { colors } from '../../styles/globalStyles';
import { apisAreAvailable } from 'expo';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.lightGray,
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontFamily: 'Archivo_700Bold',
    color: colors.mainDark,
    fontSize: 20,
  },

  subject: {
    fontFamily: 'Poppins_400Regular',
    color: colors.mainMid,
    fontSize: 12,
    marginTop: 4,
  },

  bio: {
    marginHorizontal: 24,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
    color: colors.mainMid,
  },

  footer: {
    backgroundColor: colors.lightGray,
    padding: 24,
    alignItems: 'center',
    marginTop: 24,
  },

  price: {
    fontFamily: 'Poppins_400Regular',
    color: colors.mainMid,
    fontSize: 14,
  },

  priceValue: {
    fontFamily: 'Archivo_700Bold',
    color: colors.main,
    fontSize: 16,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  favoriteButton: {
    backgroundColor: colors.main,
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  favorited: {
    backgroundColor: colors.red,
  },

  contactButton: {
    backgroundColor: colors.secondary,
    flex: 1,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  contactButtonText: {
    color: colors.white,
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    marginLeft: 16,
  },
});

export default styles;
