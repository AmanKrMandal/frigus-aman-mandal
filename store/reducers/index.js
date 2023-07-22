// store/reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add other reducers here
});

export default rootReducer;
