import { ESizeUnits } from './ESizeUnits';

export default interface IUserDetails {
  age: number,
  weight: number,
  bodyweightUnit: ESizeUnits.KILOGRAMS,
  height: number,
  heightUnit: ESizeUnits.METRES,
  sex: 'MALE' | 'FEMALE',
}