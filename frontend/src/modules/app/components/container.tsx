import React from 'react';
import { Provider, connect } from 'unistore/react'
import store from '../store';
import { App } from './';
import { AppState } from '../state';

const AppConnected = connect((state: AppState) => ({
  view: state.view
}))(App)


const AppContainer: React.FC = () =>
  <Provider {...{store}} >
    <AppConnected />
  </Provider>

export default AppContainer;
