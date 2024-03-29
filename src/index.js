import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ClickTheme } from './context/ClickTheme.tsx';
import { ClickForHomepage } from './context/ClickForHomepage.tsx';

ReactDOM.render(
    <BrowserRouter>
      <ClickTheme>
        <ClickForHomepage>
          <App />
        </ClickForHomepage>
      </ClickTheme>
    </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
