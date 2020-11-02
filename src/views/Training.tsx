import React, { useEffect } from 'react';
import H1 from '../components/atoms/H1';
import NotFound from './404';
import { Data } from '../ExampleData';
import { useParams } from 'react-router-dom';

export default function Training() {
  
  const { trainingId } = useParams<{ trainingId: string | undefined }>();
  const { UserTrainings } = Data;

  useEffect(() => {
    // fetch data here via trainingId as soon as backend will be provided
  }, [])
  
  return (
    trainingId && UserTrainings.some(({ id }) => id === trainingId) ?
    
      <H1>{ UserTrainings[parseInt(trainingId) - 1].name } training</H1>
      :
      <NotFound />
  ) 
}