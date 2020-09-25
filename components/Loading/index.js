import React from 'react';

import loading from './loading.module.css';

const Loading = () => {
  return (
    <div className={loading.container}>
      <div className={loading.loading}></div>&nbsp;
      <span className={loading.message}> Aguarde, carregando promoção...</span>
    </div>
  );
};

export default Loading;
