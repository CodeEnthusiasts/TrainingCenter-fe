import React,{FC} from 'react';
import Button from '../../atoms/Button';
import H1 from '../../atoms/H1/';
import H2 from '../../atoms/H2/';
import P from '../../atoms/P';
import Icon from '../../atoms/Icon';
import Link from '../../atoms/Link';
import { ITrainingCardProps} from '../../../__types__/ITrainingCard'
import { theme } from '../../../theme/mainTheme';
import { 
  Card, 
  LightBoxShadow, 
  CardOptions, 
  CardDetails, 
} from './styles'
const TrainingCard:FC<ITrainingCardProps> = ({name, duration, id}) => {
  return (
    
      <Card onClick={() => console.log("clicked")}>
        <Link to={`/trainings/${id}/exercises`}> 
          <LightBoxShadow />
          <CardDetails>
            <div>
              <H1>{name.toUpperCase()}</H1>
              <P>Duration: {duration} min</P>
            </div>
            <Icon className="fas fa-dumbbell" color={theme.colors.background.gradient.color1} size={3.5} rotation={45}/>
          </CardDetails>
        </Link>
        <CardOptions>
          <H2>Start workout</H2>
          <Link to={`/trainings/${id}/workout`}>
            <Button radius={40} >
              <Icon className="fas fa-play" color={theme.colors.background.gradient.color1} size={1.5} />
            </Button>
          </Link>
 
          
        </CardOptions>
      </Card>
      
      
  );
}

export default TrainingCard;