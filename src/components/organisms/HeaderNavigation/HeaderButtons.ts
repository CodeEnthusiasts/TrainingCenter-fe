interface IHeaderButton {
  name: string,
  icon: string,
  secondary?: boolean;
}
export const HeaderButtons:IHeaderButton[] = [
  {
    name: 'Back',
    icon: "fas fa-angle-left",
  },
  {
    name: 'Menu',
    icon: "fas fa-bars",
  },
  {
    name: 'Confirm',
    icon: "fas fa-check",
    secondary: true
  },
  {
    name: 'Add',
    icon: "fas fa-plus",
  },
  {
    name: 'Edit',
    icon: "fas fa-pen",
  },
  {
    name: 'Filters',
    icon: "fas fa-sliders-h",
  }
]