import * as React from "react";
import { shallow } from "enzyme";

import * as artsActions from "../../actions/artsActions"

import { Art } from "../Art";
import { IArt } from "../../types/art.types";

const art: IArt = {
    _id: "1",
    title: "Test",
    src: "test.jpg",
    createdAt: "Oct 10, 2010",
    liked: false,
}

describe('<Art />', () => {
    describe('render()', () => {
        it("should render", () => {
            const result = shallow(<Art art={art} artsActions={artsActions} _id={1}/>);
            expect(result).toBeTruthy();
        });
    });
});