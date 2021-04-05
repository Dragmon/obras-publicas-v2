import React from 'react';
import { ContNoData } from '../styles/NoData';
import RoalSign from '../../assets/images/roal-sign.png';

const NoData = () => (
  <ContNoData>
    <h2>Por el momento no hay datos que mostrar</h2>
    <img src={`${RoalSign}`} alt='Imagen de señalamiento de camino cerrado' />
  </ContNoData>
);

export default NoData;
