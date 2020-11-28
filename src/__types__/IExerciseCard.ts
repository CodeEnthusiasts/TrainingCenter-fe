import { IMuscle } from './IMuscle'

export interface IExerciseCard {
  key: string,
  name: string,
  img: string;
  difficulty: string | undefined,
  type: string | undefined,
  muscles: IMuscle[] | undefined;
}
