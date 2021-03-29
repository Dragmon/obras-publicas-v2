import styled from 'styled-components';
import { FlexMixin } from '../styles/Mixins';

export const Footer = styled.footer`
  ${FlexMixin}
  justify-content: center;
  height: 50px;
  width: 100%;
  background-color: #025456;
  & p {
    color: #fff;
  }
`;
