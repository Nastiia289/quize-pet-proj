import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Quiz from './components/Quize/Quize';

function App() {

  return (
    <div>
      <div>
      <Quiz/>
      </div>
     
      <a href='/quize' className='reload_page'>Try again</a>
      {/* <a  onClick={mounthClicker}>Mounth toggle</a> */}

    </div>


  );
}

export default App;
