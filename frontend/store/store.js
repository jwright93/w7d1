import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';

export const configureStore = () => {
  const store = createStore(rootReducer);
  window.store = store;
};
