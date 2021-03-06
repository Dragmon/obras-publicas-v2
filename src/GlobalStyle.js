import { createGlobalStyle } from 'styled-components';
import RobotoRegular from './assets/fonts/Roboto-Regular.woff';
import RobotoBold from './assets/fonts/Roboto-Bold.woff';
import RubikRegular from './assets/fonts/Rubik-Regular.woff';
import RubikMediumd from './assets/fonts/Rubik-Medium.woff';
import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Regular';
    src: url(${RobotoRegular}) format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto Bold';
    src: url(${RobotoBold}) format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Rubik Regular';
    src: url(${RubikRegular}) format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'Rubik Mediumd';
    src: url(${RubikMediumd}) format('truetype');
    font-display: swap;
  }
  body{
    font-family:'Rubiki Regular';
    font-size: 62.5%;
    margin: 0px;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.backgroundColor}
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Roboto Bold';
    margin: ${(props) => props.theme.margin.marginElement};
  }
  h1{
    font-size:${(props) => props.theme.fontSizes.large};
  }
  h2{
    font-size: ${(props) => props.theme.fontSizes.xMedium}
  }
  h3{
    font-size: ${(props) => props.theme.fontSizes.medium}
  }
  h4{
    font-size: ${(props) => props.theme.fontSizes.small}
  }
  p{
    font-size:${(props) => props.theme.fontSizes.small};
    margin: ${(props) => props.theme.margin.marginElement};
  }
`;

export default GlobalStyle;
