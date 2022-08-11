import React from "react";
import assert from "power-assert";
import Adapter from 'enzyme-adapter-react-16';
import {render, shallow, configure} from 'enzyme'

import toJson from "enzyme-to-json";

import Button from '../index'

configure({adapter: new Adapter()});
describe("<Button />", () => {
    it("should render ", () => {
        const wrapper = render(<Button>Hello</Button>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})