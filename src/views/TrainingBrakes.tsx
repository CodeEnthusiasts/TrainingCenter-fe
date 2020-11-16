import React from 'react'
import TrainingDetailsTemplate from '../templates/TrainingDetailsTemplate'
import MainTemplate from '../templates/MainTemplate'
import { RoutePaths } from '../routes'
import { useParams } from 'react-router-dom';

const TrainingBrakes = () => {
  const { trainingId } = useParams<{ trainingId: string}>();
  return (
    <MainTemplate routePath={RoutePaths.TRAINING_BRAKES} buttons={{leftBtn: "Back", rightBtn: "Edit"}}>
      <TrainingDetailsTemplate trainingId={trainingId}>
        Training brakes 
      </TrainingDetailsTemplate>
    </MainTemplate>
  )
}

export default TrainingBrakes
