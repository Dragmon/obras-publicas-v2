import styled from 'styled-components';
import { FlexMixin } from '../../components/styles/Mixins';

export const ContNotFound = styled.section`
  display: block;
  height: auto;
  padding: 0 5%;
  text-align: center;
  @media (min-width: ${(props) => props.theme.sizeDevice.lg}) {
    ${FlexMixin}
    justify-content: center;
    height: 75vh;
  }
`;
export const DivMessage = styled.div`
  & h1 {
    font-size: 7em;
  }
`;
export const DivImages = styled.div`
  & img {
    width: 100%;
  }
`;
