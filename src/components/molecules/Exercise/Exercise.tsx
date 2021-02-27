import React, { FC } from 'react'
import Button from '../../atoms/Button/Button'
import Icon from '../../atoms/Icon/Icon'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import Link from '../../atoms/Link/Link'
import { theme } from '../../../theme/MainTheme';
import { ExerciseContainer, ExerciseDescription, ExerciseImage, Separator } from './ExerciseStyle'

export interface IMuscle {
  name: string
}

export interface IExercise {
  id: string,
  name: string;
  equipmentType: string;
  img: string,
  exerciseType?: string;
  difficulty?: string;
  musclesEnvolved?: IMuscle[];
}


const Exercise: FC<IExercise> = ({ name, equipmentType, id, img }) => {
  return (
    <>
      <ExerciseContainer>
        <ExerciseImage src={ img }/>
        <ExerciseDescription>
          <Paragraph color={ theme.colors.primmary.color1 }>{ name }</Paragraph>
          <Paragraph color={ theme.colors.secondary.color2 }>Equipment: { equipmentType }</Paragraph>
        </ExerciseDescription>
        <Link to={ `/${ id }/exercise-details` }>
          <Button radius={ 45 }>
            <Icon className="fas fa-angle-right" color={ theme.colors.button.primmary.text }/>
          </Button>
        </Link>

      </ExerciseContainer>
      <Separator/>
    </>
  )
}

export default Exercise
