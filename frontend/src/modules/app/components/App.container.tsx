import React from 'react';
import './App.css';
import { Provider, connect } from 'unistore/react'
import store, { defaultState } from '../store';
import { App } from './App';

const AppConnected = connect((state: defaultState) => ({
  view: state.view
}))(App)


const AppContainer: React.FC = () =>
  <Provider {...{store}} >
    <AppConnected />
  </Provider>

export default AppContainer;
