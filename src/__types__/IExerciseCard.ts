export interface IExerciseCard {
  name: string,
  difficulty: string,
  type: string,
  img: string;
  muscles: IMuscle[];
}
interface IMuscle {
  name: string
}