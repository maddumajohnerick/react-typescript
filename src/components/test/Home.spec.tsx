import * as React from 'react';
import { shallow } from 'enzyme';

import * as artsActions from '../../actions/artsActions'

import { Home } from '../Home';

const arts: string[] = ['1'];

describe('<Home />', () => {
    describe('render()', () => {
        it('should render', () => {
            const component = shallow(<Home arts={arts} artsActions={artsActions}/>);
            expect(component).toBeTruthy();
        });
        it('should call componentDidMount', () => {
            const spy = jest.spyOn(Home.prototype, 'componentDidMount');
            const component = shallow(<Home arts={arts} artsActions={artsActions}/>);
            expect(spy).toHaveBeenCalled();
        });
    });
});