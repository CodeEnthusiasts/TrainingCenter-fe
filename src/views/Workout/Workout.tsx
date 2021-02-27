import React from 'react';
import H1 from '../../components/atoms/H1';
import styled from 'styled-components';
import WorkoutMode from '../../components/organisms/WorkoutMode';
import HeaderNavigation from '../../components/organisms/HeaderNavigation';
import { Data } from '../../ExampleData';
import { useHistory, useParams } from 'react-router-dom';
import { RoutePaths } from '../../routes';

const WorkoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 100px 20px 0px;
  text-align: center;
`;

export default function Workout() {
  const history = useHistory();
  const { trainingId, exerciseId } = useParams<{ trainingId: string, exerciseId: string }>();
  const currentTraining = Data.UserTrainings.find(({ id }) => id === trainingId);

  return (
    <WorkoutWrapper>
      <HeaderNavigation
        title={ RoutePaths.WORKOUT }
        buttons={ { leftBtn: 'Back', rightBtn: 'Confirm' } }
        actions={ { leftBtnAction: history.goBack } }
      />
      {
        currentTraining && currentTraining.exercises[parseInt(exerciseId) - 1] ?
          // <H1>{ currentTraining.exercises[parseInt(exerciseId) - 1].name }</H1>
          <WorkoutMode { ...currentTraining.exercises[parseInt(exerciseId) - 1] } />
          :
          <H1>Exercise does not exist</H1>
      }
    </WorkoutWrapper>
  )
}