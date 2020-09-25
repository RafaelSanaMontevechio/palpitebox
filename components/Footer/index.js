import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-600 p-4">
      <div className="container mx-auto text-center font-bold text-white">
        Projeto desenvolvido por: Rafael Sana Montevechio -{' '}
        <a
          className="hover:underline"
          href="https://linkedin.com/in/rafaelsanamontevechio"
        >
          Linkedin
        </a>{' '}
        /{' '}
        <a
          className="hover:underline"
          href="https://github.com/rafaelsanamontevechio"
        >
          Github
        </a>
        <div className="mt-2">
          <img
            className="inline p-4"
            src="/logo_semana_fsm.png"
            alt="Semana Full Stack Master"
          />
          <img
            className="inline p-4"
            src="/logo_devpleno.png"
            alt="Dev Pleno"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
