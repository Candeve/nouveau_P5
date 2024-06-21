import React from "react";
import ProposBanniere from '../../components/ProposBanniere/aproposbanniere';
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import Collapse from '../../components/Collapse/collapse';


function Apropos() {
    return (
      <div>
        <Header />
        <ProposBanniere />
        <div className="collapseAll">
      <Collapse title="Fiabilité">
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale...</p>
      </Collapse>
      <Collapse title="Respect">
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa...</p>
      </Collapse>
      <Collapse title="Service">
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa...</p>
      </Collapse>
      <Collapse title="Sécurité">
        <p>La sécurité est la priorité de Kasa...</p>
      </Collapse>
    </div>
        <Footer />
      </div>
    );
  }
  
  export default Apropos;