import React, {FC} from 'react'
import { TailsWrapper } from './style'
import TrainingDetailsTile from '../../components/molecules/TrainingDetailsTile'
import { ITrainingDetailsTemplate } from '../../__types__/ITrainingDetailsTemplate'

const TrainingDetailsTemplate:FC<ITrainingDetailsTemplate> = ({children, trainingId}) => {
 
  return (
    <>
      <TailsWrapper>
        <TrainingDetailsTile path={`/trainings/${trainingId}/exercises`} rotation={135} icon="fas fa-dumbbell"/>
        <TrainingDetailsTile path={`/trainings/${trainingId}/brakes`} icon="far fa-clock" />
        <TrainingDetailsTile path={`/trainings/${trainingId}/notes`} icon= "far fa-clipboard" />
        <TrainingDetailsTile path={`/trainings/${trainingId}/`} icon= "fas fa-bed" />
      </TailsWrapper>
      {children}
    </> 

  )
}

export default TrainingDetailsTemplate;
