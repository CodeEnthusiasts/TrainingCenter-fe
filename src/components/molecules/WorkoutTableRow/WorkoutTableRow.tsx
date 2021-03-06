import React, { FC } from 'react';
import { Detail, Input, Tr } from './WorkoutTableRowStyle';

interface IWorkoutTableRow {
  sets: number,
  reps: number,
}

const WorkoutTableRow: FC<IWorkoutTableRow> = ({ sets, reps }) => {
  return (
    <Tr>
      <td>
        <Detail>
          { sets }
        </Detail>
      </td>
      <td>
        <Detail>
          { reps }
        </Detail>
      </td>
      <td>
        <Input/>
      </td>
      <td>
        <Input/>
      </td>
    </Tr>
  )
}

export default WorkoutTableRow;