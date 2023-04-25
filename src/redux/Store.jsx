// store.js

import { createStore } from 'redux';
import changeNumberReducer from './Reducer';

const store = createStore(changeNumberReducer);

export default store;

