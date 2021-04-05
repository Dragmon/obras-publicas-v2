import styled from 'styled-components';
import { FlexMixin } from '../../components/styles/Mixins';

export const ContFilter = styled.section`
  ${FlexMixin}
  flex-direction: column;
  margin: 30px 0;
  @media (min-width: ${(props) => props.theme.sizeDevice.sm}) {
    flex-direction: row;
  }
  & h4 {
    margin: 0 10px 0;
  }
`;

export const Title = styled.div`
  text-align: center;
`;
