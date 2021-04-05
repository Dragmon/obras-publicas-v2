import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { FirstData } from '../graphql/getQueries.js';
import { ContFilter, Title } from './styles/Home';
import Page from '../container/Page';
import Loading from '../components/Loading';
import GraficBarNivo from '../components/GraficBarNivo';
import Dropdown from '../components/DropDown';
import Report from '../components/Report';
import ProjectList from '../components/ProjectList';

const Home = () => {
  const widthDevice = window.innerWidth;
  const { loading, error, data } = useQuery(FirstData);
  const [selectCoordinacion, setCoordination] = useState('');

  function handleChangeCoordination(newValue) {
    setCoordination(newValue);
  }

  if (loading) return <Loading />;
  if (error) return <p>`Error :(`</p>;

  return (
    <Page>
      <ContFilter>
        <h4>Coordinación regional</h4>
        <Dropdown
          dataFilter={data.ctCoordinacionRegionals}
          onChange={handleChangeCoordination}
        />
      </ContFilter>
      {selectCoordinacion !== '' ? (
        <Report parm={selectCoordinacion} />
      ) : (
        <>
          {widthDevice >= 768 ? (
            <>
              <Title>
                <h3> Grafica de avance de obras en la república mexicana </h3>
              </Title>
              <GraficBarNivo graficData={data.reportesConnection.values} />
            </>
          ) : (
            ''
          )}
          <ProjectList info={data.reportesConnection.values} />
        </>
      )}
    </Page>
  );
};

export default Home;
