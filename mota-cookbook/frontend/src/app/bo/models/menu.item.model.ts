export default interface IMenuItem {
  link: string;
  label: string;
  order: number;
  active?: boolean;
  deactivated?: boolean;
}



export type PageState = 'home' | 'recipes-list' | 'shopping-list' | 'ingredients' | 'meal-planning';
