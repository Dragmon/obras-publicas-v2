import React from 'react';
import { List } from 'antd';
import { DataCard, TitleCard, DataParagraph } from '../styles/ProjectList';

const index = (data) => {
  const infoList = data.info;
  return (
    <>
      <h4>Lsita de proyectos</h4>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 3,
        }}
        dataSource={infoList}
        renderItem={(item) => (
          <List.Item>
            <DataCard
              title={
                <TitleCard>{`${item.ct_coordinacion_regional.name} : ${item.ct_tramo_carretero.nombre}`}</TitleCard>
              }
            >
              <DataParagraph>{item.descripcion}</DataParagraph>
              <DataParagraph>
                <strong>Porcentaje de avance dela obra: </strong>
                {item.porcentaje_avance}%
              </DataParagraph>
            </DataCard>
          </List.Item>
        )}
      />
    </>
  );
};

export default index;
