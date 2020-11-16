import React from 'react'
import MainTemplate from '../templates/MainTemplate'
import { RoutePaths } from '../routes'
const Atlas = () => {
  return (
    <MainTemplate routePath={RoutePaths.TRAINING_BRAKES} buttons={{leftBtn: "Back", rightBtn: "Edit"}}>
      User wil be posibble to search any exercise from our base
    </MainTemplate>
  )
}

export default Atlas
