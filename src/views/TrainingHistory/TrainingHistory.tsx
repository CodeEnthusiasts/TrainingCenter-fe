import React from 'react'
import MainTemplate from '../../templates/MainTemplate'
import { RoutePaths } from '../../routes'
import { useHistory } from 'react-router-dom';

const TrainingHistory = () => {
  const history = useHistory();

  return (
    <MainTemplate
      routePath={ RoutePaths.TRAINING_BRAKES }
      buttons={ { leftBtn: "Back", rightBtn: "Edit" } }
      actions={ { leftBtnAction: history.goBack } }
    >
      Training
    </MainTemplate>
  )
}

export default TrainingHistory
