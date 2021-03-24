import styled from 'styled-components';

export const Page = styled.section`
  margin: 0 10%;
  @media (min-width: ${(props) => props.theme.sizeDevice.sm}) {
    margin: 0 5%;
    padding: 0;
  }
`;
