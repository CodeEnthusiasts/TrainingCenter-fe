import React from 'react'
import TrainingDetailsTemplate from '../templates/TrainingDetailsTemplate'
import MainTemplate from '../templates/MainTemplate'
import { RoutePaths } from '../routes'
import { useParams } from 'react-router-dom';

const TrainingNotes = () => {
  const { trainingId } = useParams<{ trainingId: string}>();
  
  return (
    <MainTemplate routePath={RoutePaths.TRAINING_NOTES} buttons={{leftBtn: "Back", rightBtn: "Edit"}}>
      <TrainingDetailsTemplate trainingId={trainingId}>
        User notes
      </TrainingDetailsTemplate>
    </MainTemplate>
  )
}

export default TrainingNotes
