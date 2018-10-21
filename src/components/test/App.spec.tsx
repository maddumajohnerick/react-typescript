import * as React from 'react';
import { shallow } from 'enzyme';

import { App } from '../App';

describe('<App />', () => {
    describe('render()', () => {
        it('should render', () => {
            const component = shallow(<App />).contains(<h1>Vector x Vexel</h1>);
            expect(component).toBeTruthy();
        });
    });
});