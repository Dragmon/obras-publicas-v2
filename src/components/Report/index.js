import React from 'react';
import Loading from '../Loading';
import WorkCard from '../WorkCard';
import { useQuery } from '@apollo/client';
import { ReportCoordination } from '../../graphql/getQueries';
import NoData from '../NoData';

const index = (props) => {
  const name = props.parm;
  const { loading, error, data } = useQuery(ReportCoordination, {
    variables: { name },
  });

  if (loading) return <Loading />;
  if (error) return <p>`Error :(`</p>;
  if (data) {
    const arrayData = data.ctCoordinacionRegionals[0].reportes;
    if (arrayData.length > 0) {
      return <WorkCard data={arrayData} />;
    } else {
      return <NoData />;
    }
  }
};

export default index;
