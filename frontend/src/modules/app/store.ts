import createStore from 'unistore'
import devtools from 'unistore/devtools'
import { AppState } from './state';

const store = process.env.NODE_ENV === 'production' ? createStore(AppState) : devtools(createStore(AppState));

export default store;
