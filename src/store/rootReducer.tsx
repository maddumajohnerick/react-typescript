import { combineReducers } from 'redux';
import arts from '../reducers/artsReducer';
import { IArtState } from '../types/art.types';

export interface IReduxState {
	arts: IArtState;
}

const rootReducer = combineReducers({
	arts,
});

export default rootReducer;
