import React from 'react';
import H1 from '../../components/atoms/H1/H1';
import { WorkoutWrapper } from './WorkoutStyle'
import WorkoutMode from '../../components/organisms/WorkoutMode/WorkoutMode';
import HeaderNavigation from '../../components/organisms/HeaderNavigation/HeaderNavigation';
import { Data } from '../../ExampleData';
import { useHistory, useParams } from 'react-router-dom';
import { RoutePaths } from '../../routes/routes';


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