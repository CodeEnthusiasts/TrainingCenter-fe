import React from 'react'
import TrainingDetailsTemplate from '../templates/TrainingDetailsTemplate'
import MainTemplate from '../templates/MainTemplate'
import { RoutePaths } from '../routes'
import { useParams } from 'react-router-dom';

const TrainingExercises = () => {
  const { trainingId } = useParams<{ trainingId: string}>();
  
  return (
    <MainTemplate routePath={RoutePaths.TRAINING_EXERCISES} buttons={{leftBtn: "Back", rightBtn: "Edit"}}>
      <TrainingDetailsTemplate trainingId={trainingId}>
        exercises !
      </TrainingDetailsTemplate>
    </MainTemplate>
  )
}

export default TrainingExercises;
