import React from 'react';
import TrainingCard from '../components/molecules/TrainingCard/TrainingCard'
import styled from 'styled-components'
import { Data } from '../ExampleData'
import MainTemplate from '../templates/MainTemplate'
import { RoutePaths } from '../routes/index'

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
  return (
    <MainTemplate routePath={ RoutePaths.TRAINING_EXERCISES } buttons={{leftBtn: 'Back', rightBtn: 'Add',}}>
      <TrainingsWrapper>
          {Data.UserTrainings.map(item => {
            return (
              <TrainingCard
                id={item.id}
                key={item.id}
                name={item.name}
                duration={item.duration}
              />
            )})}    
      </TrainingsWrapper>
    </MainTemplate>
  ) 
}
