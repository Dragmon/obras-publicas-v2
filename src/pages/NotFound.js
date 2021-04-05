import React from 'react';
import { ContNotFound, DivMessage, DivImages } from './styles/NotFound';
import works from '../assets/images/works.png';

const NotFound = () => (
  <ContNotFound>
    <DivMessage>
      <h1>404</h1>
      <h2>Lo sentimos el contenido que buscas no está en construcción.</h2>
    </DivMessage>
    <DivImages>
      <img src={`${works}`} alt='Imagen de trabajos de construcción' />
    </DivImages>
  </ContNotFound>
);

export default NotFound;
