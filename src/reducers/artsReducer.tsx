import { ArtsActionTypes } from '../actions/artsActions';
import { IArtState } from '../types/art.types';

export const initialState: IArtState = {
	byIds: {}
}

export default function artsReducer(
	state = initialState,
	action: ArtsActionTypes,
) {
	const artObj: any = {};
	switch (action.type) {
		case 'FIND_ARTS_SUCCESS':
			return Object.assign({}, state, { byIds: Object.assign({}, action.arts.byIds, state.byIds), allIds: action.arts.allIds });

		case 'EDIT_ART_SUCCESS': {
			artObj[action.art._id] = action.art;
			return Object.assign({}, state, {
				byIds: Object.assign({}, state.byIds, artObj),
			});
		}

		default:
			return state;
	}
}
