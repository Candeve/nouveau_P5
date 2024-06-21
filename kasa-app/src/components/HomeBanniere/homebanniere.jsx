import banniere from '../../assets/banniere-accueil.png';
import './homebanniere.scss';


function HomeBanniere() {
  return (
    <div className="BanniereHomePage">
      <img src={banniere} alt="Banniere" className="BanniereHP" />
      <p className='titreBanniere'>Chez vous, partout et ailleurs</p>
    </div>
  );
}

export default HomeBanniere;
