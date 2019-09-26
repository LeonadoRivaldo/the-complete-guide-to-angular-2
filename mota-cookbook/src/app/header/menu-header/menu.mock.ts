import IMenuItem from 'src/app/bo/models/menu.item.model';


export const MENU_HEADER: IMenuItem[] = [
  { link: 'shopping-list', label: 'Shopping list', order: 0},
  { link: 'recipes-list', label: 'Recipes List', order: 1},
  { link: 'meal-planning', label: 'Meal Planner', order: 1, deactivated: true },
];


