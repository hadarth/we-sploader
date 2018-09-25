import React from 'react';
import SploaderGraphics from './SploaderGraphics';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import enzymeSerializer from 'enzyme-to-json/serializer';
expect.addSnapshotSerializer(enzymeSerializer);

const mockRef = {current: {}}
const pecent = 10

describe("SploaderGraphics", () => {
  test('Should render and calculate percentage', () => {
    const wrapper = shallow(<SploaderGraphics percent={pecent} SploaderSvg={mockRef} />)
    expect(wrapper).toMatchSnapshot()
  })
});
