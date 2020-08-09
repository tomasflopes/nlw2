import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

export default function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/tomas050302.png' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Tomás Lopes</Text>
          <Text style={styles.subject}>Programação</Text>
        </View>
      </View>

      <Text style={styles.bio}>Supz in the housez</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Price/hour {'   '}
          <Text style={styles.priceValue}>20,00 €</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.favoriteButton, styles.favorited]}>
            <Image source={heartOutlineIcon} />
            <Image source={unfavoriteIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Get in touch</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
