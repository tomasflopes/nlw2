import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

const TeacherList: React.FC = () => {
  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='These are the available Proffys'>
        <form id='search-teachers'>
          <div className='input-block'>
            <label htmlFor='subject'>Subject</label>
            <input type='text' id='subject'></input>
          </div>

          <div className='input-block'>
            <label htmlFor='week_day'>Day of the Week</label>
            <input type='text' id='week_day'></input>
          </div>

          <div className='input-block'>
            <label htmlFor='time'>Time</label>
            <input type='text' id='time'></input>
          </div>
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
