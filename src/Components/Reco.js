import '../Style/Reco.css';
import ethereum from '../Images/ethereum.png'
import bitcoin from '../Images/bitcoin.png'

function Reco() {
  return (
    <div className="reco-container">
      <h3>Prediction for 20.06.2022</h3>
      <div className='cur-pred'>
        <img src={ethereum} />
        <h5>Ethereum ↑ 0.13 usd</h5>
      </div>
      <div className='cur-pred'>
        <img src={bitcoin} />
        <h5>Bitcoin ↓ 0.56 usd</h5>
      </div>
    </div>
  );
}

export default Reco;