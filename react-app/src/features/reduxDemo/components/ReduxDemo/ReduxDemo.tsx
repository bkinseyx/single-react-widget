import React from 'react';

import logo from './logo.svg';
import { Counter } from '../Counter/Counter';
import './ReduxDemo.css';
import { TopLevelComponent } from 'app/utils/typeUtils';

export const ReduxDemo: TopLevelComponent<{}> = () => {
  return (
    <div className="ReduxDemo">
      <header className="ReduxDemo-header">
        <img src={logo} className="ReduxDemo-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/ReduxDemo.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="ReduxDemo-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="ReduxDemo-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="ReduxDemo-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="ReduxDemo-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
};
export default ReduxDemo;
