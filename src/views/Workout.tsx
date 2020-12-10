import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderNavigation from '../components/organisms/HeaderNavigation';
import { RoutePaths } from '../routes';
import { Data } from '../ExampleData';
import styled from 'styled-components';
import H1 from '../components/atoms/H1';

const WorkoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 100px 10px 10px;
  text-align: center;
`;

export default function Workout() {
  
  const { trainingId, exerciseId } = useParams<{ trainingId: string, exerciseId: string }>();
  const currentTraining = Data.UserTrainings.find(({ id }) => id === trainingId);

  return (
    <WorkoutWrapper>
      <HeaderNavigation 
        title={ RoutePaths.WORKOUT }
        buttons={{ leftBtn: 'Back', rightBtn: 'Confirm', }}
      />
      {
        currentTraining && currentTraining.exercises[parseInt(exerciseId) - 1] ?
        <H1>{ currentTraining.exercises[parseInt(exerciseId) - 1].name }</H1>
        :
        <H1>Exercise does not exist</H1>
      }
    </WorkoutWrapper>
  )
}