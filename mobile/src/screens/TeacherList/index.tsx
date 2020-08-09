import React, { useState } from 'react';
import { View, ScrollView, Text, Picker } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import { Feather } from '@expo/vector-icons';

import { colors } from '../../styles/globalStyles';

import styles from './styles';

export default function TeacherList() {
  const [subject, setSubject] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [time, setTime] = useState('');

  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  return (
    <View style={styles.container}>
      <PageHeader
        title='Available Proffys'
        headerRight={
          <BorderlessButton
            onPress={() => setIsFiltersVisible(!isFiltersVisible)}
          >
            <Feather name='filter' size={20} color={colors.white} />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Subject</Text>
            <Picker
              style={styles.input}
              selectedValue={subject}
              onValueChange={itemValue =>
                itemValue !== undefined && setSubject(itemValue)
              }
            >
              <Picker.Item label='-- Pick a subject --' value={undefined} />
              <Picker.Item value='Web Development' label='Web Development' />
              <Picker.Item value='Math' label='Math' />
              <Picker.Item value='English' label='English' />
              <Picker.Item value='History' label='History' />
              <Picker.Item value='Physics' label='Physics' />
              <Picker.Item value='Chemistry' label='Chemistry' />
              <Picker.Item value='Geography' label='Geography' />
              <Picker.Item value='Sports' label='Sports' />
            </Picker>

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Day Of The Week</Text>
                <Picker
                  style={styles.input}
                  selectedValue={dayOfWeek}
                  onValueChange={itemValue =>
                    itemValue !== undefined && setDayOfWeek(itemValue)
                  }
                >
                  <Picker.Item label='-- Pick a day --' value={undefined} />
                  <Picker.Item label='Sunday' value={0} />
                  <Picker.Item label='Monday' value={1} />
                  <Picker.Item label='Tuesday' value={2} />
                  <Picker.Item label='Wednesday' value={3} />
                  <Picker.Item label='Thursday' value={4} />
                  <Picker.Item label='Friday' value={5} />
                  <Picker.Item label='Saturday' value={6} />
                </Picker>
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Schedule</Text>
                <Picker
                  style={styles.input}
                  selectedValue={time}
                  onValueChange={itemValue =>
                    itemValue !== undefined && setTime(itemValue)
                  }
                >
                  <Picker.Item
                    label='-- Pick a schedule --'
                    value={undefined}
                  />
                  <Picker.Item label='00:00' value='00:00' />
                  <Picker.Item label='00:30' value='00:30' />
                  <Picker.Item label='01:00' value='01:00' />
                  <Picker.Item label='01:30' value='01:30' />
                  <Picker.Item label='02:00' value='02:00' />
                  <Picker.Item label='02:30' value='02:30' />
                  <Picker.Item label='03:00' value='03:00' />
                  <Picker.Item label='03:30' value='03:30' />
                  <Picker.Item label='04:00' value='04:00' />
                  <Picker.Item label='04:30' value='04:30' />
                  <Picker.Item label='05:00' value='05:00' />
                  <Picker.Item label='05:30' value='05:30' />
                  <Picker.Item label='06:00' value='06:00' />
                  <Picker.Item label='06:30' value='06:30' />
                  <Picker.Item label='07:00' value='07:00' />
                  <Picker.Item label='07:30' value='07:30' />
                  <Picker.Item label='08:00' value='08:00' />
                  <Picker.Item label='08:30' value='08:30' />
                  <Picker.Item label='09:00' value='09:00' />
                  <Picker.Item label='09:30' value='09:30' />
                  <Picker.Item label='10:00' value='10:00' />
                  <Picker.Item label='10:30' value='10:30' />
                  <Picker.Item label='11:00' value='11:00' />
                  <Picker.Item label='11:30' value='11:30' />
                  <Picker.Item label='12:00' value='12:00' />
                  <Picker.Item label='12:30' value='12:30' />
                  <Picker.Item label='13:00' value='13:00' />
                  <Picker.Item label='13:30' value='13:30' />
                  <Picker.Item label='14:00' value='14:00' />
                  <Picker.Item label='14:30' value='14:30' />
                  <Picker.Item label='15:00' value='15:00' />
                  <Picker.Item label='15:30' value='15:30' />
                  <Picker.Item label='16:00' value='16:00' />
                  <Picker.Item label='16:30' value='16:30' />
                  <Picker.Item label='18:00' value='18:00' />
                  <Picker.Item label='18:30' value='18:30' />
                  <Picker.Item label='19:00' value='19:00' />
                  <Picker.Item label='19:30' value='19:30' />
                  <Picker.Item label='20:00' value='20:00' />
                  <Picker.Item label='20:30' value='20:30' />
                  <Picker.Item label='21:00' value='21:00' />
                  <Picker.Item label='21:30' value='21:30' />
                  <Picker.Item label='22:00' value='22:00' />
                  <Picker.Item label='22:30' value='22:30' />
                  <Picker.Item label='23:00' value='23:00' />
                  <Picker.Item label='23:30' value='23:30' />
                </Picker>
              </View>
            </View>

            <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filter</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}
