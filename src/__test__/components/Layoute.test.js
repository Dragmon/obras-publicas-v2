import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

describe('<Layout />', () => {
  test('Render of the Layout component', () => {
    const layout = shallow(<Layout />);
    expect(layout.length).toEqual(1);
    expect(layout.find(Header).exists()).toBe(true);
    expect(layout.find(Footer).exists()).toBe(true);
  });
});
