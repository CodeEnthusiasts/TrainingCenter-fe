import React, { FC } from 'react'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import H1 from '../../atoms/H1/H1'
import Icon from '../../atoms/Icon/Icon'
import Button from '../../atoms/Button/Button';
import InfoButton from '../../atoms/InfoButton/InfoButton'
import DifficultyScale from '../DifficultyScale/DifficultyScale';
import { theme } from '../../../theme/MainTheme'
import { Separator } from '../../atoms/Separator/Separator'
import { ExerciseImage } from '../../atoms/ExerciseImage/ExerciseImage'
import { CardSection, CardSide, ExerciseCardWrapper, ExerciseContnet, ExerciseDetailsContainer, ExercisePreview } from './ExerciseCardStyle'
import { IMuscle } from '../Exercise/Exercise';

interface IExerciseCard {
  key: string,
  name: string,
  img: string;
  difficulty: string | undefined,
  type: string | undefined,
  muscles: IMuscle[] | undefined;
}


const ExerciseCard: FC<IExerciseCard> = ({ name, difficulty, type, muscles, img }) => {
  return (
    <ExerciseCardWrapper>
      <ExerciseContnet>
        <CardSide>
          <H1 color={ theme.colors.primmary.color1 }>{ name }</H1>
          <ExerciseDetailsContainer>

            { difficulty && <CardSection>
              <Paragraph>Difficulty</Paragraph>
              <DifficultyScale level={ difficulty }/>
            </CardSection> }

            <CardSection>
              <Paragraph>Exercise type:</Paragraph>
              <Paragraph color={ theme.colors.secondary.color3 }>
                <b>{ type && type }</b>
              </Paragraph>
            </CardSection>

            { muscles && <CardSection>
              <Paragraph>Muscles envolved:</Paragraph>
              <Paragraph color={ theme.colors.secondary.color3 }>
                { muscles.map((muscle, idx) => {
                  return <b key={ idx }>{ muscle.name }</b>
                }) }
              </Paragraph>
            </CardSection> }

          </ExerciseDetailsContainer>
          <CardSection>
            <Button radius={ 30 }>
              <Icon
                color={ theme.colors.primmary.color1 }
                className="fas fa-plus"
                size={ 1 }
              />
            </Button>
            <Paragraph color={ theme.colors.primmary.color1 }>Add to training</Paragraph>
          </CardSection>
        </CardSide>

        <CardSide>
          <ExercisePreview>
            <ExerciseImage src={ img }/>
            <InfoButton> More Info </InfoButton>
          </ExercisePreview>
        </CardSide>
      </ExerciseContnet>
      <Separator/>
    </ExerciseCardWrapper>
  )
}

export default ExerciseCard
