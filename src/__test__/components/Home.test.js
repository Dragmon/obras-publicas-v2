import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import Home from '../../pages/Home';
import Theme from '../../Theme';
/* import { FirstData } from '../../graphql/getQueries'; */
/* import { GET_REPORTS_CONECTION } from '../../__mocks__/getQueriesMocks'; */

describe('<Home />', () => {
  test('Mount Home', () => {
    const wrapper = mount(
      <Theme>
        <MockedProvider mocks={[]} addTypename={false}>
          <Home />
        </MockedProvider>
      </Theme>
    );
    expect(wrapper.length).toEqual(1);
  });
  test('Render loading state initially', () => {
    const wrapper = mount(
      <Theme>
        <MockedProvider mocks={[]} addTypename={false}>
          <Home />
        </MockedProvider>
      </Theme>
    );
    expect(wrapper.find('Loading').length).toEqual(1);
  });
});
