import React from 'react'
import Paragraph from '../../components/atoms/Paragraph/Paragraph'
import H1 from '../../components/atoms/H1/H1'
import Exercise from '../../components/molecules/Exercise/Exercise'
import MainTemplate from '../../templates/MainTemplate/MainTemplate'
import TrainingDetailsTemplate from '../../templates/TrainingDetailsTemplate/TrainingDetailsTemplate'
import { Data } from '../../ExampleData';
import { RoutePaths } from '../../routes/routes'
import { useHistory, useParams } from 'react-router-dom';
import { ExercisesContainer, ExercisesHeader } from './TrainingExercisesStyle';

const TrainingExercises = () => {
  const { trainingId } = useParams<{ trainingId: string }>();
  const { UserTrainings } = Data;
  const history = useHistory();

  const getTrainingExercises = () => {
    const Data = UserTrainings.filter((element) => {
      return element.id === trainingId;
    })
    return Data[0].exercises;
  }

  return (
    <MainTemplate
      routePath={ RoutePaths.TRAINING_EXERCISES }
      buttons={ { leftBtn: "Back", rightBtn: "Edit" } }
      actions={ { leftBtnAction: history.goBack } }
    >
      <TrainingDetailsTemplate trainingId={ trainingId }>
        <ExercisesHeader>
          <H1>Exercises</H1>
          <Paragraph>You got { getTrainingExercises().length } exercises</Paragraph>
        </ExercisesHeader>
        <ExercisesContainer>
          { getTrainingExercises().map(e => {
            return (
              <Exercise
                id={ e.id }
                name={ e.name }
                equipmentType={ e.equipmentType }
                img={ e.img }
              />
            )
          }) }
        </ExercisesContainer>
      </TrainingDetailsTemplate>
    </MainTemplate>
  )
}

export default TrainingExercises;
