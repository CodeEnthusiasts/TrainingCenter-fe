export interface ISearchBox {
  placeholder: string,
  name: string,
  valueSetter: (value:string) => void;
}