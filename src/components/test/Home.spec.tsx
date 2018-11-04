import * as React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

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
        it('TEST ------------', () => {
            const arts: string[] = null;
            const artsActionStub = {
                getArtsSuccess: jest.fn(() => true),
                editArtsSuccess: jest.fn(() => true),
                getArts: jest.fn(() => {
                    ['2']
                }),
                getArt: jest.fn(() => true)
            }

            const component = shallow(<Home arts={arts} artsActions={artsActionStub}/>);
            component.update();
            console.log(arts)
            // @ts-ignore
            expect(component.instance().props.arts).toEqual(['2']);
            expect(artsActionStub.getArts.mock.calls.length).toBe(1);
        });
    });
});