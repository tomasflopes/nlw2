import React, { useState, FormEvent } from 'react';

import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';

import './styles.css';

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: '00:00',
      to: '00:00',
    },
  ]);

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [price, setPrice] = useState('');

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '00:00',
        to: '00:00',
      },
    ]);
  }

  async function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    const response = await api.post('/classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      price: Number(price),
      schedule: scheduleItems,
    });

    if (response) {
      alert('User was registered with success!');
      history.push('/');
    } else {
      alert('Error');
    }
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) =>
      index === position ? { ...scheduleItem, [field]: value } : scheduleItem
    );

    setScheduleItems(updatedScheduleItems);
  }

  return (
    <div id='page-teacher-form' className='container'>
      <PageHeader
        title='Nice, you want to give classes!'
        description='The first step is to fill in this form'
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Your data</legend>

            <Input
              name='name'
              label='Complete Name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input
              name='avatar'
              label='Avatar'
              value={avatar}
              onChange={e => setAvatar(e.target.value)}
            />
            <Input
              name='whatsapp'
              label='Whatsapp'
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />
            <Textarea
              name='bio'
              label='Bio'
              value={bio}
              onChange={e => setBio(e.target.value)}
            ></Textarea>
          </fieldset>

          <fieldset>
            <legend>About the class</legend>

            <Select
              name='subject'
              label='Subject'
              value={subject}
              onChange={e => setSubject(e.target.value)}
              options={[
                { value: 'Web Development', label: 'Web Development' },
                { value: 'Math', label: 'Math' },
                { value: 'English', label: 'English' },
                { value: 'History', label: 'History' },
                { value: 'Physics', label: 'Physics' },
                { value: 'Chemistry', label: 'Chemistry' },
                { value: 'Geography', label: 'Geography' },
                { value: 'Sports', label: 'Sports' },
              ]}
            />
            <Input
              name='price'
              label='The price of your class'
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Available Schedules
              <button type='button' onClick={addNewScheduleItem}>
                + New schedule
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <div key={index} className='schedule-item'>
                <Select
                  name='week_day'
                  label='Day of the week'
                  value={scheduleItem.week_day}
                  onChange={e =>
                    setScheduleItemValue(index, 'week_day', e.target.value)
                  }
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
                  name='from'
                  label='From'
                  type='time'
                  value={scheduleItem.from}
                  onChange={e =>
                    setScheduleItemValue(index, 'from', e.target.value)
                  }
                />
                <Input
                  name='to'
                  label='To'
                  type='time'
                  value={scheduleItem.to}
                  onChange={e =>
                    setScheduleItemValue(index, 'to', e.target.value)
                  }
                />
              </div>
            ))}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt='Warning' />
              Warning <br />
              Fill all the asked data!
            </p>

            <button type='submit'>Register</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
