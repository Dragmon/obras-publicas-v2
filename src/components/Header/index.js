import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  text-align: center;
  margin: 30px 0;
`;

const index = () => (
  <Header>
    <h1>Dirección de infraestructura carretera</h1>
    <h2>Subdirección de información y evaluación de obra</h2>
    <h3>Reporte de obras en proceso</h3>
    <h3>Fecha de corte 30 de Septiembre del 2020</h3>
  </Header>
);

export default index;
