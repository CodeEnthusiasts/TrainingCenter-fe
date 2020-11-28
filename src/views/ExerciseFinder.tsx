import React, { useState, useEffect } from 'react'
import SearchBox from '../components/atoms/SearchBox';
import MainTemplate from '../templates/MainTemplate'
import ExerciseCard from '../components/molecules/ExerciseCard';
import { Data } from '../ExampleData'
import { RoutePaths } from '../routes'
import { IExercise } from '../__types__/IExercise'
import { FinderContainer, ExercisesContainer } from './styles/ExerciseFinderStyle'

const ExerciseFinder = () => {
  const [SearchValue, setSearchValue ] = useState<string>('');
  const [ exercises, setExercises ] = useState<IExercise[]>([])

  useEffect(()=> {
    Data.Exercises.map(e => { 
      setExercises(exercises => [...exercises, e]);
    })
  }, [])
  
  const filtredExercises = exercises.filter(e => {
    return e.name.toLowerCase().includes(SearchValue.toLowerCase())
  })  

  return (
    <MainTemplate routePath={RoutePaths.EXERCISE_FINDER} buttons={{leftBtn: "Back", rightBtn: "Edit"}}>
      <FinderContainer> 
          <SearchBox  
            valueSetter={setSearchValue} 
            name="searchValue" 
            placeholder="Type name of exercise..." 
            />
        <ExercisesContainer>
          {filtredExercises.map(e => {
              return <ExerciseCard 
                key = {e.id}
                name={e.name} 
                img = {e.img}
                type={e.exerciseType}
                difficulty= {e.difficulty}
                muscles = {e.musclesEnvolved}
              />
            })}
        </ExercisesContainer>
      </FinderContainer>
    </MainTemplate>
  )
}

export default ExerciseFinder
