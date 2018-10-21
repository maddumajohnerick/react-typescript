import axios from 'axios';
import * as _ from 'lodash';
import { IArt, IArtState } from '../types/art.types';

export type ArtsActionTypes = 
  |  { type: 'FIND_ARTS_SUCCESS', arts: IArtState }
  |  { type: 'EDIT_ART_SUCCESS', art: IArt };

export function getArtsSuccess(arts: IArtState) {
	return { type: 'FIND_ARTS_SUCCESS', arts };
}

export function editArtsSuccess(art: IArt) {
	return { type: 'EDIT_ART_SUCCESS', art };
}

export function getArts() {
	return function (dispatch: any) {
		axios({
			method: 'get',
			url: 'https://maddumajohnerick.herokuapp.com/deviant-works',
		})
			.then(function (response) {
				const byIds = _.mapKeys(response.data, '_id');
				const resObj = {
					allIds: Object.keys(byIds),
					byIds,
				};
				dispatch(getArtsSuccess(resObj));
			});
	};

}

export function getArt(id: string) {
	return function (dispatch: any) {
		axios({
			method: 'get',
			url: `https://maddumajohnerick.herokuapp.com/deviant-works/${id}`,
		})
			.then(function (response) {
				const byIds = _.mapKeys(response.data, '_id');
				const resObj = {
					byIds,
				};

				dispatch(getArtsSuccess(resObj));
			});
	};
}
