import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  test('Render del componente Footer', () => {
    const layout = shallow(<Layout />);
    expect(layout.length).toEqual(1);
    expect(layout.find(Header).length).toEqual(1);
    expect(layout.find(Footer).length).toEqual(1);
  });
});
