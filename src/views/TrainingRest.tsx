import React from 'react'
import TrainingDetailsTemplate from '../templates/TrainingDetailsTemplate'
import MainTemplate from '../templates/MainTemplate'
import { RoutePaths } from '../routes'
import { useParams } from 'react-router-dom';
const TrainingRest = () => {
  const { trainingId } = useParams<{ trainingId: string}>();
  
  return (
    <MainTemplate routePath={RoutePaths.TRAINING_REST} buttons={{leftBtn: "Back", rightBtn: "Edit"}}>
      <TrainingDetailsTemplate trainingId={trainingId}>
        Rest!
      </TrainingDetailsTemplate>
    </MainTemplate>
  )
}

export default TrainingRest
