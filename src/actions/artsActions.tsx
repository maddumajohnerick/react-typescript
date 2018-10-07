import axios from 'axios';
import * as _ from 'lodash';

export type ArtsActionTypes = {
  type: string
}

export function getArtsSuccess(arts: any) {
  return { type: 'FIND_ARTS_SUCCESS', arts };
}

export function editArtsSuccess(art: any) {
  return { type: 'EDIT_ART_SUCCESS', art };
}

export function getArts() {
  return function (dispatch: any) {
    axios({
      method: 'get',
      url: 'https://maddumajohnerick.herokuapp.com/deviant-works',
    })
    .then(function(response) {
      const byIds = _.mapKeys(response.data, '_id');
      const resObj = {
        allIds: Object.keys(byIds),
        byIds,
      };

      dispatch(getArtsSuccess(resObj));
    });
  };

}

export function getArt(id: any) {
  return function (dispatch: any) {
    axios({
      method: 'get',
      url: `https://maddumajohnerick.herokuapp.com/deviant-works/${id}`,
    })
    .then(function(response) {
      const byIds = _.mapKeys(response.data, '_id');
      const resObj = {
        byIds,
      };

      dispatch(getArtsSuccess(resObj));
    });
  };
}
