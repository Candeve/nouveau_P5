import HomeBanniere from '../../components/HomeBanniere/homebanniere';
import React from 'react';
import Gallerie from '../../components/Gallerie/gallerie'
import Footer from '../../components/Footer/footer'


function Home() {
  return (
    <div>
      <HomeBanniere />
      <Gallerie />
      <Footer />
    </div>
  );
}

export default Home;
