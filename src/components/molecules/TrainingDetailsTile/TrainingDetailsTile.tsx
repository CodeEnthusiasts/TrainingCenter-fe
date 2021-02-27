import React, {FC} from 'react'
import { TailWrapper, LightShadow, Link} from './style'
import Icon from '../../atoms/Icon/Icon'
import { theme } from '../../../theme/mainTheme'
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom'

interface ITrainingDetailsTile  {
  active?: boolean;
  icon: string;
  rotation?: number;
  path: string;
}

const TrainingDetailsTile:FC<ITrainingDetailsTile> = ({rotation, icon, path }) => {
  let history = useHistory();
  const { pathname } = useLocation();

  return (
    <Link to={path}>
      <TailWrapper active={path === pathname} onClick={() => history.push('/trainings')}>
      <Icon 
        className={icon} 
        color={theme.colors.button.secondary.text} 
        size={3} 
        rotation={rotation}
      />
      <LightShadow/>
    </TailWrapper>
    </Link>

  )
}

export default TrainingDetailsTile;