import styled from 'styled-components';
import { Card } from 'antd';

export const DataCard = styled(Card)`
  border: 1px solid #d2c7c7;
  margin: 0 0 5px 0;
  @media (min-width: ${(props) => props.theme.sizeDevice.sm}) {
    min-height: 350px;
  }
  @media (min-width: ${(props) => props.theme.sizeDevice.md}) {
    min-height: 300px;
  }
`;
export const TitleCard = styled.p`
  white-space: normal;
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.theme.colors.purple};
  @media (min-width: ${(props) => props.theme.sizeDevice.lg}) {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
  @media (min-width: ${(props) => props.theme.sizeDevice.md}) {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;
export const DataParagraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.mSmall};
`;
