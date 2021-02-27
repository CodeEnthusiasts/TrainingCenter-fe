import React, { FC } from 'react';
import Button from '../../atoms/Button/Button';
import H1 from '../../atoms/H1/H1';
import H2 from '../../atoms/H2/H2';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Icon from '../../atoms/Icon/Icon';
import Link from '../../atoms/Link/Link';
import { theme } from '../../../theme/MainTheme';
import { Card, CardDetails, CardOptions, LightBoxShadow, } from './TrainingCardStyle'

interface ITrainingCardProps {
  id: string,
  name: string,
  duration: number
}

const TrainingCard: FC<ITrainingCardProps> = ({ name, duration, id }) => {
  return (

    <Card>
      <Link to={ `/trainings/${ id }/exercises` }>
        <LightBoxShadow/>
        <CardDetails>
          <div>
            <H1>{ name.toUpperCase() }</H1>
            <Paragraph>Duration: { duration } min</Paragraph>
          </div>
          <Icon className="fas fa-dumbbell" color={ theme.colors.background.gradient.color1 } size={ 3.5 } rotation={ 45 }/>
        </CardDetails>
      </Link>
      <CardOptions>
        <H2>Start workout</H2>
        <Link to={ `/trainings/${ id }/workout/1` }>
          <Button play secondary radius={ 40 }>
            <Icon className="fas fa-play" color={ theme.colors.background.gradient.color1 } size={ 1.5 }/>
          </Button>
        </Link>


      </CardOptions>
    </Card>


  );
}

export default TrainingCard;