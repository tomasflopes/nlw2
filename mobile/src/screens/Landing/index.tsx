import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import teachIcon from '../../assets/images/icons/teach.png';
import heartIcon from '../../assets/images/icons/heart.png';

import styles from './styles';

export default function Landing() {
  const navigation = useNavigation();

  function handleNavigateToTeachPage() {
    navigation.navigate('Teach');
  }

  function handleNavigateToStudyPage() {
    navigation.navigate('Study');
  }

  return (
    <View style={styles.container}>
      <Image source={landingImage} style={styles.banner} />

      <Text style={styles.title}>
        Welcome, {'\n'}
        <Text style={styles.titleBold}>What you want to do?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNavigateToStudyPage}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Study</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleNavigateToTeachPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={teachIcon} />
          <Text style={styles.buttonText}>Teach</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.totalConnectionsText}>
        Total of 300 connections already made <Image source={heartIcon} />
      </Text>
    </View>
  );
}
