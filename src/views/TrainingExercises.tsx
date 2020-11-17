import React from 'react'
import TrainingDetailsTemplate from '../templates/TrainingDetailsTemplate'
import MainTemplate from '../templates/MainTemplate'
import { RoutePaths } from '../routes'
import { useParams } from 'react-router-dom';
import H1 from '../components/atoms/H1'
import P from '../components/atoms/P'
import Exercise from '../components/molecules/Exercise'
import {Data} from '../ExampleData';
import { ExercisesHeader, ExercisesContainer } from './styles/TrainingExercisesStyle';

const TrainingExercises = () => {
  const { trainingId } = useParams<{ trainingId: string}>();
  const { UserTrainings } = Data;

  const getTrainingExercises = () => {
    const Data = UserTrainings.filter((element) => {
      return element.id === trainingId;
    })
    return Data[0].exercises;
  }

  console.log();
  return (
    <MainTemplate routePath={RoutePaths.TRAINING_EXERCISES} buttons={{leftBtn: "Back", rightBtn: "Edit"}}>
      <TrainingDetailsTemplate trainingId={trainingId}>
        <ExercisesHeader >
          <H1>Exercises</H1>
          <P>You got {getTrainingExercises().length} exercises</P>
        </ExercisesHeader>
        <ExercisesContainer>
          {getTrainingExercises().map(e => {
            return (
              <Exercise 
                id={e.id} 
                name={e.name} 
                equipmentType={e.equipmentType} 
                img={e.img}
              />
            )
          })}
        </ExercisesContainer>
      </TrainingDetailsTemplate>
    </MainTemplate>
  )
}

export default TrainingExercises;
