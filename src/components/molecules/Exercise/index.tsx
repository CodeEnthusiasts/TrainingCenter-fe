import React, {FC} from 'react'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'
import P from '../../atoms/P'
import Link from '../../atoms/Link'
import { IExercise } from '../../../__types__/IExercise'
import { theme } from '../../../theme/mainTheme';
import { 
  ExerciseDescription,
  ExerciseContainer, 
  ExerciseImage,
  Separator
} from './style'

const Exercise:FC<IExercise> = ({name, equipmentType, id, img}) => {
  return (
    <>
      <ExerciseContainer>
          <ExerciseImage src={img}/>
          <ExerciseDescription>
            <P color={theme.colors.primmary.color1}>{name}</P>
            <P color= {theme.colors.secondary.color2}>Equipment: {equipmentType}</P>
          </ExerciseDescription>
          <Link to={`/${id}/exercise-details`}>
          <Button radius={45}>
            <Icon className="fas fa-angle-right" color={theme.colors.button.primmary.text}/>
          </Button>
          </Link>
 
      </ExerciseContainer>
      <Separator />
    </>
 )
}

export default Exercise
