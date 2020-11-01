import React from 'react';
import TrainingCard from '../components/molecules/TrainingCard/TrainingCard'
import styled from 'styled-components'
import { Data } from '../ExampleData'
//Example Data until the backend is delivered

const TrainingsWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: relative;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`
export default function Trainings() {
  return <TrainingsWrapper>
       {Data.UserTrainings.map(item => {
        return (
          <TrainingCard
            key={item.id}
            name={item.name}
            duration={item.duration}
          />
        )
      })}    
    </TrainingsWrapper>
    
}
