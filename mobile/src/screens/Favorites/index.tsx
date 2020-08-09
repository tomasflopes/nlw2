import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { ITeacher } from '../../components/TeacherItem';

import styles from './styles';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  async function getFavorites() {
    const response = await AsyncStorage.getItem('favorites');

    if (response) {
      const favoritedTeachers = JSON.parse(response);

      setFavorites(favoritedTeachers);
    }
  }

  useFocusEffect(() => {
    getFavorites();
  });

  return (
    <View style={styles.container}>
      <PageHeader title='My favorite Proffys' />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: ITeacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </ScrollView>
    </View>
  );
}
