import { useState } from 'react'

import Header from './components/Header';
import Main from './components/Main';
import './scss/main.css';

function App() {
  return (
    <>
      <div className="c-container">

        <Header />

        <Main />

      </div>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Gabriel (bits) Moura do Val</a>.
      </div>
    </>
  )
}

export default App
