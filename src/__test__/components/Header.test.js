import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('<Header />', () => {
  test('Render of the Header component', () => {
    const header = shallow(<Header />);
    expect(header.length).toEqual(1);
    expect(header.find('Header > h1').length).toEqual(1);
    expect(header.find('Header > h2').length).toEqual(1);
    expect(header.find('Header > h3').length).toEqual(2);
  });
});
