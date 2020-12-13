export interface IFilterBookmark {
  label: string,
  items: string[],
  register: () => void;
  watch: (name:string) => void;
}