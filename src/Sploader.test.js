import React from 'react';
import Sploader from './Sploader';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import enzymeSerializer from 'enzyme-to-json/serializer';
expect.addSnapshotSerializer(enzymeSerializer);

describe("sploader", () => {
  test('should rotate with 13%', () => {
    const wrapper = shallow(<Sploader percent={13}/>)
    expect(wrapper).toMatchSnapshot()
  })

  test('shouuld pass the props', () => {
    const wrapper = shallow(<Sploader percent={20}/>)
    expect(wrapper.instance().props).toMatchSnapshot()
  })

  test('shouuld render with default prop', () => {
    const wrapper = shallow(<Sploader />)
    expect(wrapper.instance().props).toMatchSnapshot()
  })
});
