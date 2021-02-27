import React from 'react'
import TrainingDetailsTemplate from '../../templates/TrainingDetailsTemplate/TrainingDetailsTemplate'
import MainTemplate from '../../templates/MainTemplate/MainTemplate'
import TrainingNote from '../../components/molecules/TrainingNote/TrainingNote';
import { Data } from '../../ExampleData';
import { RoutePaths } from '../../routes/routes'
import { useHistory, useParams } from 'react-router-dom';
import H2 from '../../components/atoms/H2/H2';
import { TrainingNotesWrapper } from './getTrainingNotesStyle';

const getTrainingNotes = (trainingId: string) => {

  const chosenTraining = Data.UserTrainings.find(({ id }) => id === trainingId);
  const result = chosenTraining ?
    chosenTraining.notes.map((note, i) => <TrainingNote { ...note } key={ i }/>)
    : <H2>No notes</H2>

  return result;
}

const TrainingNotes = () => {
  const history = useHistory();
  const { trainingId } = useParams<{ trainingId: string }>();

  return (
    <MainTemplate
      routePath={ RoutePaths.TRAINING_NOTES }
      buttons={ { leftBtn: "Back", rightBtn: "Edit" } }
      actions={ { leftBtnAction: history.goBack } }
    >
      <TrainingDetailsTemplate trainingId={ trainingId }>
        <TrainingNotesWrapper>
          {
            getTrainingNotes(trainingId)
          }
        </TrainingNotesWrapper>
      </TrainingDetailsTemplate>
    </MainTemplate>
  )
}

export default TrainingNotes
