import React from 'react'
import TrainingDetailsTemplate from '../templates/TrainingDetailsTemplate'
import MainTemplate from '../templates/MainTemplate'
import { RoutePaths } from '../routes'
import { useParams } from 'react-router-dom';
import { TrainingBrakesContainer } from './styles/TrainingBrakesStyle';
import { theme } from '../theme/mainTheme';
import H1 from '../components/atoms/H1'
import P from '../components/atoms/P'
const TrainingBrakes = () => {
  const { trainingId } = useParams<{ trainingId: string}>();
  return (
    <MainTemplate routePath={RoutePaths.TRAINING_BRAKES} buttons={{leftBtn: "Back", rightBtn: "Edit"}}>
      <TrainingDetailsTemplate trainingId={trainingId}>
        <TrainingBrakesContainer>
          <H1>Brakes between exercises</H1>
          <br />
          <P color={theme.colors.secondary.color2}>Before creating a training plan we firstly need to have some idea of <b>what we want to achieve</b> and how long it takes. The more precisely we define our goals, the better we process some training aspects into a single training period. We need some <b>weights</b> to perform short, but the most intensive muscular contractions <b>to get the maximum effort</b> of the nervous and muscular systems. Power growth may be only <b>achieved by the enormous effort</b> made in short intensive beginnings that activatehigh-threshold motor units. Motor unit is a basic functional and biomechanical unit that includes a group of muscle fibres innervated by only one motoneuron.</P>
        </TrainingBrakesContainer>
      </TrainingDetailsTemplate>
    </MainTemplate>
  )
}

export default TrainingBrakes
