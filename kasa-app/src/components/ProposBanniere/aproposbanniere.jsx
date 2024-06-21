import banniereApropos from '../../assets/banniere-a-propos.png';
import './aproposbanniere.scss';


function aBannierepropos() {
  return (
    <div className="BanniereProposPage">
      <img src={banniereApropos} alt="Banniere AP" className="BanniereAP" />
    </div>
  );
}

export default aBannierepropos;
