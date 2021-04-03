import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import Home from '../../pages/Home';
import Theme from '../../Theme';
/* import { GET_REPORTS_CONECTION } from '../../__mocks__/getQueriesMocks'; */

describe('<Home />', () => {
  test('Query Home FirstData', () => {
    const wrapper = mount(
      <Theme>
        <MockedProvider mocks={[]} addTypename={false}>
          <Home />
        </MockedProvider>
      </Theme>
    );
    expect(wrapper.length).toEqual(1);
  });
});
