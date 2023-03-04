import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next';

function App() {
    const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-dark-blue">
          {t('createAnAccount')} {process.env.REACT_APP_URL}
      </h1>
        <FontAwesomeIcon icon={["fas", "coffee"]} />
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
