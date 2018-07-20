import { combineReducers } from 'redux';

import { FormReducer } from "./formReducer";

export default combineReducers({
  form: FormReducer,
});
