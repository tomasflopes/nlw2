import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className='teacher-item'>
      <header>
        <img
          src='https://avatars1.githubusercontent.com/u/50304854?s=460&u=9d63675e4b3fc664fe9ae6bf2855f4be7d32e1bc&v=4'
          alt='Tomás Lopes'
        />
        <div>
          <strong>Tomás Lopes</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, cumque!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eaque,
        nisi, ex facere, et nesciunt at autem neque minus tenetur eveniet
        quibusdam corporis. Hic ab, consectetur fugiat autem molestias
        laudantium!
      </p>

      <footer>
        <p>
          Price/Hour
          <strong>20,00 €</strong>
        </p>

        <button type='button'>
          <img src={whatsAppIcon} alt='Contact' />
          Get in touch
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
