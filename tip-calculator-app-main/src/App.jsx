import {useState} from 'react';

import Bill from './components/Bill';
import Buttons from './components/Buttons';
import People from './components/People';

function App() {

  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [custom, setCustom] = useState('');
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  const update = per => {
    let Vtip = ((bill * per) / people).toFixed(2);
    if (people >= 1) {
      setTip(Vtip);
      setTotal(((+bill + +Vtip) / people).toFixed(2));
    }
  }

  const reset = () => {
    setBill(0);
    setPeople(0);
    setTip(0);
    setTotal(0);
    setCustom('');
  }

  return (
    <>
      <div className="c-container">

        <main className="c-card">

          <form className="c-input">
            
            <div className="c-input__bill">
              <label htmlFor="bill" className="c-input__label">
                Bill
              </label>

              <Bill bill={bill} setBill={setBill}/>

            </div>

            <div className="c-input__tip">

              <label htmlFor="tip" className="c-input__label">
                Select tip %
              </label>

              <Buttons custom={custom} setCustom={setCustom} update={update}/>

            </div>

            <div className="c-input__people">

              <div className="c-input__text">

                <label htmlFor="people" className="c-input__label">
                  Number of people
                </label>

                <span className="c-alert">Can't be zero</span>

              </div>

              <People people={people} setPeople={setPeople} />

            </div>

          </form>

          <section className="c-amount">

            <div>

              <div className="c-amount__box">

                <span>
                  Tip Amount
                  <p>/ person</p>
                </span>

                <h1 id="tip">${tip}</h1>

              </div>

              <div className="c-amount__box">

                <span>
                  Total
                  <p>/ person</p>
                </span>

                <h1 id="total">${total}</h1>

              </div>

            </div>

            <button className="c-reset" onClick={() => reset()}>RESET</button>

          </section>
        </main>
      </div>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Gabriel (bits) Moura do Val</a>.
      </div>
    </>
  )
}
export default App