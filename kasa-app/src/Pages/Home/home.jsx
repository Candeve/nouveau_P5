import HomeBanniere from '../../components/HomeBanniere/homebanniere';
import React from 'react';
import Gallerie from '../../components/Gallerie/gallerie'
import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'


function Home() {
  return (
    <div>
      <Header />
      <HomeBanniere />
      <Gallerie />
      <Footer />
    </div>
  );
}

export default Home;
