import React from 'react';
import { render } from 'react-dom';

import App from '../components/App';
import DataApi from '../DataApi';

const store = new DataApi(window.initialData);

render(
  <App store={store} />,
  document.getElementById('root')
);
