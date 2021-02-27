import styled from 'styled-components'

export const ExerciseContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  margin: 20px 0;
  align-items: center;
`
export const ExerciseDescription = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
`
export const Separator = styled.div`
  width: 100%;
  border-bottom: 1px solid ${ ({ theme }) => theme.colors.secondary.color3 };
  opacity: 0.3;
`
export const ExerciseImage = styled.img`
  width: 90px;
  height: 60px;
  border-radius: 10px;
  background-size: cover;
`