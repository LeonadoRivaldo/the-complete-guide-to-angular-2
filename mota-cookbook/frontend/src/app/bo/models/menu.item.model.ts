
export default interface IMenuItem {
  link: string;
  label: string;
  order: number;
  active?: boolean;
  deactivated?: boolean;
}
