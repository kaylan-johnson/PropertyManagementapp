import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import newsletterReducer from './newsletterReducer';
import supportRequestReducer from './supportRequestReducer';

const rootReducer = combineReducers({
  form,
  newsletter: newsletterReducer,
  supporRequest: supportRequestReducer
});

export default rootReducer;