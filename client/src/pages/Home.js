import React, { useState } from 'react';

import SwipeSize from '../components/Swipe_Size';
import HistoryList from '../components/HistoryList';
import HistoryGraph from '../components/HistoryGraph';
import Navbar from '../components/Nav/Navbar';
import Logout from '../components/Logout';

const Home = () => {
  const [historyContent, setHistoryContent] = useState('List');
  const [historyText, setHistoryText] = useState('Graph');
  const toggle = (e) => {
    let currentText = e.target.innerText;
    if (currentText === 'Graph') {
      setHistoryText('List');
      setHistoryContent('Graph');
    } else {
      setHistoryText('Graph');
      setHistoryContent('List');
    }
  };
  return (
    <div className='background-light'>
      <section className='section'>
        <div className='page-title'>
          <div className='logout-container'>
            <div>Roman's Diapers</div>
            <Logout />
          </div>
          <h1>Home</h1>
        </div>
      </section>
      <section>
        <SwipeSize />
      </section>
      <section className='section'>
        <div className='history-title'>
          <h2>Diaper History</h2>
          <button className='btn-link' onClick={toggle}>
            {historyText}
          </button>
        </div>
        {historyContent === 'List' && <HistoryList />}
        {historyContent === 'Graph' && <HistoryGraph />}
      </section>
      <div style={{ height: '90px' }}></div>
      <Navbar />
    </div>
  );
};

export default Home;
