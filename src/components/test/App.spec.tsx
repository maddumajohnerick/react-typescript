import * as React from "react";
import { shallow } from "enzyme";

import { App } from "../App";

describe('<App />', () => {
    describe('render()', () => {
        it("should render", () => {
            const result = shallow(<App />).contains(<h1>Vector x Vexel</h1>);
            expect(result).toBeTruthy();
        });
    });
});