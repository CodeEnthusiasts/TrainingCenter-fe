import React from 'react'
import MainTemplate from '../templates/MainTemplate'
import { RoutePaths } from '../routes'

const TrainingHistory = () => {
  return (
    <MainTemplate routePath={RoutePaths.TRAINING_BRAKES} buttons={{leftBtn: "Back", rightBtn: "Edit"}}>
      Training
    </MainTemplate>
  )
}

export default TrainingHistory
