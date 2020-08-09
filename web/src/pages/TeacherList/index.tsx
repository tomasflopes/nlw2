import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { ITeacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    if (subject && dayOfWeek && time) {
      const response = await api.get('/classes', {
        params: {
          subject,
          week_day: dayOfWeek,
          time,
        },
      });

      console.log(response.data);
      setTeachers(response.data);
    }
  }

  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='These are the available Proffys'>
        <form id='search-teachers'>
          <Select
            name='subject'
            label='Subject'
            value={subject}
            onChange={e => {
              setSubject(e.target.value);
              searchTeachers(e);
            }}
            options={[
              { value: 'Programação', label: 'Programação' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'História', label: 'História' },
              { value: 'Física', label: 'Física' },
              { value: 'Química', label: 'Química' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Educação Física', label: 'Educação Física' },
            ]}
          />

          <Select
            name='week_day'
            label='Day of the week'
            value={dayOfWeek}
            onChange={e => {
              setDayOfWeek(e.target.value);
              searchTeachers(e);
            }}
            options={[
              { value: '0', label: 'Sunday' },
              { value: '1', label: 'Monday' },
              { value: '2', label: 'Tuesday' },
              { value: '3', label: 'Wednesday' },
              { value: '4', label: 'Thursday' },
              { value: '5', label: 'Friday' },
              { value: '6', label: 'Saturday' },
            ]}
          />
          <Input
            type='time'
            name='time'
            label='Time'
            value={time}
            onChange={e => {
              setTime(e.target.value);
              searchTeachers(e);
            }}
          />
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: ITeacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </main>
    </div>
  );
};

export default TeacherList;
