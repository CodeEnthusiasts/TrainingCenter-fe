import React from 'react'
import TrainingDetailsTemplate from '../templates/TrainingDetailsTemplate'
import MainTemplate from '../templates/MainTemplate'
import { RoutePaths } from '../routes'
import { useHistory, useParams } from 'react-router-dom';

const TrainingNotes = () => {
  const history = useHistory();
  const { trainingId } = useParams<{ trainingId: string}>();
  
  return (
    <MainTemplate 
    routePath={RoutePaths.TRAINING_NOTES} 
    buttons={{leftBtn: "Back", rightBtn: "Edit"}}
    actions={{leftBtnAction: history.goBack }} 
    >
      <TrainingDetailsTemplate trainingId={trainingId}>
        User notes
      </TrainingDetailsTemplate>
    </MainTemplate>
  )
}

export default TrainingNotes
