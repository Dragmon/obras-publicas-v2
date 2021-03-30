import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer/index';

describe('<Footer />', () => {
  test('Render of the Footer component', () => {
    const footer = shallow(<Footer />);
    expect(footer.length).toEqual(1);
    expect(footer.find('Footer > div > p').length).toEqual(1);
  });
});
