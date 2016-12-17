import React from 'react';
import ReactDOM from 'react-dom';
import AppOne from './component/AppOne/AppOne';
import AppTwo from './component/AppTwo/AppTwo';
import AppThree from './component/AppThree/AppThree';
import AppFour from './component/AppFour/AppFour';
import './index.css';

ReactDOM.render(
  <div>
  <AppOne />,
  <AppTwo />,
  <AppThree />,
  <AppFour />
  </div>,
  document.getElementById('root')
);
