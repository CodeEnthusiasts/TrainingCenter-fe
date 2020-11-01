import React,{FC} from 'react';
import { Card, LightBoxShadow, CardOptions, CardDetails } from './styles'
import { ITrainingCardProps} from '../../../__types__/ITrainingCard'
import { theme } from '../../../theme/mainTheme';
import Button from '../../atoms/Button';
import H1 from '../../atoms/H1/';
import H2 from '../../atoms/H2/';
import P from '../../atoms/P';
import Icon from '../../atoms/Icon';

const TrainingCard:FC<ITrainingCardProps> = ({name, duration}) => {
  return (
      <Card>
        <LightBoxShadow />
        <CardDetails>
          <div>
            <H1>{name.toUpperCase()}</H1>
            <P>Duration: {duration} min</P>
          </div>
          <Icon className="fas fa-dumbbell" color={theme.background100} size={3.5} rotation={45}/>
        </CardDetails>
        <CardOptions>
            <H2>Start workout</H2>
            <Button radius={40}>
              <Icon className="fas fa-play" color={theme.card200} size={1.5} />
            </Button>
        </CardOptions>
      </Card>
      
  );
}

export default TrainingCard;