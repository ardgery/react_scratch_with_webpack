import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';


const title = 'Burmaaaaaaa';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();
