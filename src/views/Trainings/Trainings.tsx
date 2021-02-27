import React from 'react';
import { TrainingsWrapper } from './TrainingsStyle'
import MainTemplate from '../../templates/MainTemplate/MainTemplate'
import TrainingCard from '../../components/molecules/TrainingCard/TrainingCard'
import { Data } from '../../ExampleData'
import { RoutePaths } from '../../routes/routes'
import { useHistory } from 'react-router-dom';


export default function Trainings() {
  const history = useHistory();
  return (
    <MainTemplate
      routePath={ RoutePaths.TRAINING_EXERCISES }
      buttons={ { leftBtn: 'Back', rightBtn: 'Add' } }
      actions={ { leftBtnAction: history.goBack } }
    >
      <TrainingsWrapper>
        { Data.UserTrainings.map(item => {
          return (
            <TrainingCard
              id={ item.id }
              key={ item.id }
              name={ item.name }
              duration={ item.duration }
            />
          )
        }) }
      </TrainingsWrapper>
    </MainTemplate>
  )
}
