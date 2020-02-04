import IMenuItem from 'src/app/bo/models/menu.item.model';


export const MENU_HEADER: IMenuItem[] = [
  { link: '/', label: '🏠', order: 0 },
  { link: 'recipes-list', label: 'Recipes', order: 1},
  { link: 'shopping-list', label: 'Shopping list', order: 2},
  { link: 'meal-planning', label: 'Meal Planner', order: 3, deactivated: true },
];


