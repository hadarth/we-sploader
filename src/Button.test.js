import React from 'react';
import Button from './Button';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import enzymeSerializer from 'enzyme-to-json/serializer';
expect.addSnapshotSerializer(enzymeSerializer)


Enzyme.configure({ adapter: new Adapter() });

const myclick = jest.fn()

describe("button click", () => {
  test('button should be rendered', () => {
    const res = shallow(<Button onClick={myclick} text={'text'}/>)
    expect(res).toMatchSnapshot()
  });

  test('should click', () => {
    const res = shallow(<Button onClick={myclick} text={'text'}/>)
    res.simulate('click');
    expect(myclick.mock.calls).toMatchSnapshot()
  })
});
