import { IMuscle } from './IMuscle'

export interface IExercise {
  id: string,
  name: string;
  equipmentType: string;
  img: string,
  exerciseType?: string;
  difficulty?: string;
  musclesEnvolved?: IMuscle[];
}
