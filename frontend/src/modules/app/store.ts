import createStore from 'unistore'
import devtools from 'unistore/devtools'

export const defaultState = {
  view: 'list'
}

export type defaultState = typeof defaultState & {
  view: 'list' | 'detail',
}

const store = process.env.NODE_ENV === 'production' ? createStore(defaultState) : devtools(createStore(defaultState));

export default store;
