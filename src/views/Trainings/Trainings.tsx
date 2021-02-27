import React from 'react';
import styled from 'styled-components'
import MainTemplate from '../../templates/MainTemplate'
import TrainingCard from '../../components/molecules/TrainingCard/TrainingCard'
import { Data } from '../../ExampleData'
import { RoutePaths } from '../../routes'
import { useHistory } from 'react-router-dom';

const TrainingsWrapper = styled.ul`
  list-style-type: none;
  padding: 10px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  max-height: 78vh;
  overflow-y: scroll;

`
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
