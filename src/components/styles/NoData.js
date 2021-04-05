import styled from 'styled-components';
import { FlexMixin } from '../styles/Mixins';

export const ContNoData = styled.section`
  ${FlexMixin}
  flex-direction: column;
  justify-content: start;
  min-height: auto;
  @media (min-width: ${(props) => props.theme.sizeDevice.sm}) {
    min-height: 70vh;
  }
  & h2 {
    text-align: center;
  }
  & img {
    max-height: 400px;
    width: 100%;
    @media (min-width: ${(props) => props.theme.sizeDevice.sm}) {
      width: auto;
    }
  }
`;
