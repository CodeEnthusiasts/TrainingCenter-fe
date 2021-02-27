import React, { useEffect, useState } from 'react'
import SearchBox from '../../components/atoms/SearchBox';
import MainTemplate from '../../templates/MainTemplate'
import ExerciseCard from '../../components/molecules/ExerciseCard';
import { Data } from '../../ExampleData'
import { RoutePaths } from '../../routes'
import { useHistory } from 'react-router-dom';
import { ExercisesContainer, FinderContainer } from '../styles/ExerciseFinderStyle'
import FiltersModal from '../../components/organisms/FiltersModal';
import { IExercise } from '../../components/molecules/Exercise';


const ExerciseFinder = () => {
  const [SearchValue, setSearchValue] = useState<string>('');
  const [exercises, setExercises] = useState<IExercise[]>([])
  const [isFiltersModalOpen, setFiltersModal] = useState<boolean>(false);
  const history = useHistory();

  useEffect(() => {
    Data.Exercises.map(e => {
      setExercises(exercises => [...exercises, e]);
    })
  }, [])

  const ToggleFiltersModal = (): void => {
    setFiltersModal(!isFiltersModalOpen);
  }
  const filtredExercises = exercises.filter(e => {
    return e.name.toLowerCase().includes(SearchValue.toLowerCase())
  })

  return (
    <MainTemplate
      routePath={ RoutePaths.EXERCISE_FINDER }
      buttons={ { leftBtn: "Back", rightBtn: "Filters" } }
      actions={ { rightBtnAction: ToggleFiltersModal, leftBtnAction: history.goBack } }
    >
      { isFiltersModalOpen && <FiltersModal ToggleFiltersModal={ ToggleFiltersModal }/> }

      <FinderContainer>
        <SearchBox
          valueSetter={ setSearchValue }
          name="searchValue"
          placeholder="Type name of exercise..."
        />
        <ExercisesContainer>
          { filtredExercises.map(e => {
            return <ExerciseCard
              key={ e.id }
              name={ e.name }
              img={ e.img }
              type={ e.exerciseType }
              difficulty={ e.difficulty }
              muscles={ e.musclesEnvolved }
            />
          }) }
        </ExercisesContainer>
      </FinderContainer>
    </MainTemplate>
  )
}

export default ExerciseFinder
