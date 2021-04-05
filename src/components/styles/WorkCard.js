import styled from 'styled-components';
import { Card } from 'antd';

export const ContentCard = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 50px 0;
  @media (min-width: ${(props) => props.theme.sizeDevice.md}) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;
export const DataCard = styled(Card)`
  border: 1px solid #d2c7c7;
  margin: 0 0 5px 0;
`;
export const TitleCard = styled.h3`
  color: ${(props) => props.theme.colors.purple};
`;
export const DataParagraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.mSmall};
`;
