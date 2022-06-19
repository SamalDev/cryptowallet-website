import { useState, useEffect } from 'react';
import '../Style/Trade.css';
import transfer from '../Images/loading.png'
import ethereum from '../Images/ethereum.png'
import bitcoin from '../Images/bitcoin.png'

function Trade() {
  const [query1, setQuery1] = useState([]); 
  const [query2, setQuery2] = useState([]); 
  const [coefficient , setCoefficient] = useState(0.1); 
  const [feedback, setFeedback] = useState(false);

  const convert = () => {
    setQuery2(parseFloat(0.1 * parseInt(query1)))
    setFeedback(false);
  }

  const submit = () => {
    setQuery1([])
    setQuery2([])
    setFeedback(true);
  }

  return (
    <div className="trade-container">
        <div className='trade-convertion'>
            <div className='trade-input'>
                <input
                    type="text"
                    className="cur"
                    placeholder="Enter amount..."
                    onChange={e => setQuery1(e.target.value)}
                    value={query1}
                />
                <img className='cur-img' src={bitcoin} />
            </div>
            <div className='trade-input'>
                <input
                    type="text"
                    className="cur"
                    readOnly
                    value={query2}
                />
                <img className='cur-img' src={ethereum} />
            </div>
        </div>
        <div className='trade-bottom'>
            <h5>Trading coefficient: {coefficient}</h5>
            <img className='transfer' src={transfer} onClick={convert} />
            <button className='btn' onClick={submit}>Submit</button>
        </div>
        <div className={ feedback ? 'feedback' : 'none' }>
          <h4>Your transfer was completed successfully</h4>
        </div>
    </div>
  );
}

export default Trade;