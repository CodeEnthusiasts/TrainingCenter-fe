import React, {FC} from 'react'
import P from '../../atoms/P'
import H1 from '../../atoms/H1'
import Icon from '../../atoms/Icon'
import Button from '../../atoms/Button';
import InfoButton from '../../atoms/InfoButton'
import DifficultyScale from '../../molecules/DifficultyScale';
import { theme } from '../../../theme/mainTheme'
import { Separator } from '../../atoms/Separator'
import { ExerciseImage } from '../../atoms/ExerciseImage'
import { IExerciseCard } from '../../../__types__/IExerciseCard'
import { CardSide, ExerciseCardWrapper, CardSection, ExercisePreview, ExerciseDetailsContainer, ExerciseContnet } from './style'

const ExerciseCard:FC<IExerciseCard> = ({name, difficulty, type, muscles, img}) => {
  return (
    <ExerciseCardWrapper>
      <ExerciseContnet>
        <CardSide>
          <H1 color={theme.colors.primmary.color1}>{name}</H1>
          <ExerciseDetailsContainer>
            
            {difficulty && <CardSection>
              <P>Difficulty</P>
               <DifficultyScale level={difficulty}/>
            </CardSection>}

            <CardSection>
              <P>Exercise type:</P>
              <P color={theme.colors.secondary.color3}>
                <b>{type && type}</b>
              </P>
            </CardSection>

            {muscles &&  <CardSection>
              <P>Muscles envolved:</P>
              <P color={theme.colors.secondary.color3}>
                {muscles.map((muscle,idx) => { return <b key={idx}>{muscle.name}</b> })}
              </P>
            </CardSection>}
           
          </ExerciseDetailsContainer>
            <CardSection>
              <Button radius={30}>
                <Icon 
                  color={theme.colors.primmary.color1} 
                  className="fas fa-plus" 
                  size={1}
                />
              </Button>
              <P color={theme.colors.primmary.color1}>Add to training</P>
            </CardSection>
        </CardSide>

        <CardSide> 
          <ExercisePreview>
            <ExerciseImage src={img} />
            <InfoButton> More Info </InfoButton>
          </ExercisePreview>
        </CardSide>
      </ExerciseContnet>
      <Separator /> 
     </ExerciseCardWrapper>
  )
}

export default ExerciseCard
