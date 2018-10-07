import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

export default function configureStore(initialState: any) {
  return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk),
    );
}
