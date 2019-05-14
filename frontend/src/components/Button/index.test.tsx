import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
  it('should render correct DOM', () => {
    const wrapper = shallow(<Button onClick={() => {}}>Value</Button>)
    expect(wrapper).toMatchSnapshot();
  })
})