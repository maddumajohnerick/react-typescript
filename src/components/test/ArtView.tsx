import * as React from 'react';
import { shallow } from 'enzyme';

import * as artsActions from '../../actions/artsActions'

import { ArtView } from '../ArtView';
import { IArt } from '../../types/art.types';
import { IMatch } from '../../types/common.types';

const art: IArt = {
    _id: '1',
    title: 'Test',
    src: 'test.jpg',
    createdAt: 'Oct 10, 2010',
    liked: false,
}

const match: IMatch = {
    params: {
        artId: '1'
    }
} 

describe('<ArtView />', () => {
    describe('render()', () => {
        it('should render', () => {
            const component = shallow(<ArtView art={art} artsActions={artsActions} artId={'1'} match={match}/>);
            expect(component).toBeTruthy();
        });
    });
});