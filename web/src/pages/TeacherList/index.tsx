import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

const TeacherList: React.FC = () => {
  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='These are the available Proffys'>
        <form id='search-teachers'>
          <Select
            name='subject'
            label='Subject'
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
          <Input type='time' name='time' label='Time' />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;
