import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';

import './styles.css';

export interface ITeacher {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  price: number;
  subject: string;
  whatsapp: string;
}
export interface Props {
  teacher: ITeacher;
}

const TeacherItem: React.FC<Props> = ({ teacher }) => {
  function createNewConnection() {
    api.post('/connections', { user_id: teacher.id });
  }

  return (
    <article className='teacher-item'>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Price/Hour
          <strong>{teacher.price} €</strong>
        </p>

        <a
          target='_blank'
          href={`https://wa.me/${teacher.whatsapp}`}
          onClick={createNewConnection}
        >
          <img src={whatsAppIcon} alt='Contact' />
          Get in touch
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
