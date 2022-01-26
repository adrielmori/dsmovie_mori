/* Arquivo Principal do React */

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

ReactDOM.render( /* Acessa o id="root" */
  <React.StrictMode>
    <App /> {/* Renderiza o App.tsx */}
  </React.StrictMode>,
  document.getElementById('root')
);

