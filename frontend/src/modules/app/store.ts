import createStore from 'unistore'
import devtools from 'unistore/devtools'

const store = process.env.NODE_ENV === 'production' ? createStore({}) : devtools(createStore({}));

export default store;
