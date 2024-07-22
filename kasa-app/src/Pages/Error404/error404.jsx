import React, { useEffect } from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import './error404.scss';

function Error404() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="error404-container">
      <Header />
      <div className="error404-content">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <a href="/">Retourner sur la page d'accueil</a>
      </div>
      <Footer />
    </div>
  );
}

export default Error404;
