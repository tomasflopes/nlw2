import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';

import teachBackgroundImage from '../../assets/images/teach-background.png';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Teach() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={teachBackgroundImage}
        style={styles.content}
        resizeMode='contain'
      >
        <Text style={styles.title}>You want to be a Proffy?</Text>
        <Text style={styles.description}>
          If you are new to our platform, you need to be registered as a teacher
          in our web platform.
        </Text>
      </ImageBackground>

      <TouchableOpacity
        onPress={navigation.goBack}
        style={styles.confirmButton}
      >
        <Text style={styles.confirmButtonText}>OK!</Text>
      </TouchableOpacity>
    </View>
  );
}
