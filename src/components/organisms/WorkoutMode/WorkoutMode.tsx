import React, { FC, useState } from 'react';
import { Container, FirstContainer, H2, Button, Table, TableContainer, Test } from './WorkoutModeStyle';
import ImageSlider from '../../molecules/ImageSlider/ImageSlider';
import { theme } from '../../../theme/MainTheme';
import WorkoutTableRow from '../../molecules/WorkoutTableRow/WorkoutTableRow';
import Icon from '../../atoms/Icon/Icon';
import Timer from '../../molecules/Timer/Timer';
import { IExercise } from '../../molecules/Exercise/Exercise';

const exampleRepsSetup = [
  16, 14, 12, 10, 8, 6, 4, 2, 4, 6
]

const exampleBreakTime = 45;

const WorkoutMode: FC<IExercise> = ({ img, name }) => {

  const [timerVisibility, setTimerVisibility] = useState<boolean>(false);

  return (
    <Container>
      <ImageSlider images={ [img] } />
      <FirstContainer>
        <H2>{ name }</H2>
        <Button radius={45} onClick={ () => setTimerVisibility(state => !state) }>
          <Icon size={ 1 } className="fas fa-history" color={theme.colors.button.primmary.text}/>
        </Button>
        <Button radius={45}>
          <Icon size={ 1 } className="fas fa-file" color={theme.colors.button.primmary.text}/>
        </Button>
      </FirstContainer>
      <Test>
        <TableContainer>
          <Table>
            <tbody>
              <tr>
                <th>Sets</th>
                <th>Reps</th>
                <th>Reps?</th>
                <th>Weight</th>
              </tr>
              {
                exampleRepsSetup.map((reps, i) => 
                  <WorkoutTableRow sets={ i + 1 } reps={ reps } key={ i } />)
              }
            </tbody>
          </Table>
        </TableContainer>
        <Timer breakTime={ exampleBreakTime } visibility={ timerVisibility } />
      </Test>
    </Container>
  )
}

export default WorkoutMode;