import React from 'react';
import ReactDOM from 'react-dom';

const title = 'React Webpack Babel Boilerplate';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();