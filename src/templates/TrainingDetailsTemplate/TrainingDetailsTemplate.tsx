import React, { FC } from 'react'
import { TailsWrapper } from './TrainingDetailsTemplateStyle'
import TrainingDetailsTile from '../../components/molecules/TrainingDetailsTile/TrainingDetailsTile'

interface ITrainingDetailsTemplate {
  children: React.ReactNode;
  trainingId: string;
}

const TrainingDetailsTemplate: FC<ITrainingDetailsTemplate> = ({ children, trainingId }) => {

  return (
    <>
      <TailsWrapper>
        <TrainingDetailsTile path={ `/trainings/${ trainingId }/exercises` } rotation={ 135 } icon="fas fa-dumbbell"/>
        <TrainingDetailsTile path={ `/trainings/${ trainingId }/brakes` } icon="far fa-clock"/>
        <TrainingDetailsTile path={ `/trainings/${ trainingId }/notes` } icon="far fa-clipboard"/>
        <TrainingDetailsTile path={ `/trainings/${ trainingId }/` } icon="fas fa-bed"/>
      </TailsWrapper>
      { children }
    </>

  )
}

export default TrainingDetailsTemplate;
