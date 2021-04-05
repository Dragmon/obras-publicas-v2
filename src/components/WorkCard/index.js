import React from 'react';
import GraficPie from '../GraficPie';
import {
  ContentCard,
  DataCard,
  TitleCard,
  DataParagraph,
} from '../styles/WorkCard';

const index = (props) => {
  const dataCard = props.data;
  return (
    <ContentCard>
      {dataCard.map((data) => (
        <DataCard
          key={data.id}
          title={<TitleCard>{data.ct_tramo_carretero.nombre}</TitleCard>}
        >
          <GraficPie info={data} />
          <DataParagraph>
            <strong>Descripción de la obra:</strong> {data.descripcion}
          </DataParagraph>
          <DataParagraph>
            <strong>Fecha de inicio:</strong> {data.fecha_inicio}
          </DataParagraph>
          <DataParagraph>
            <strong>Fecha de fin:</strong> {data.fecha_fin}
          </DataParagraph>
          <DataParagraph>
            <strong>Porcentaje de avance:</strong> {data.porcentaje_avance}%
          </DataParagraph>
        </DataCard>
      ))}
    </ContentCard>
  );
};

export default index;
