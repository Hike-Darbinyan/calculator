import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './Board/Board';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='app'>
    <Board />
  </div>
);


