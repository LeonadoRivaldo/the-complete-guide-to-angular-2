import { Icon } from 'src/app/bo/models/icon.model';


export interface IListITem {
  title: string;
  subtitle: string;
  icon: Icon;
  uuid?: string;
  selected?: boolean;
}

/**
 *
 * @param title main value
 * @param subtitle description text or other infos
 * @param icon image or icon
 * @export
 */
export default class ListItem implements IListITem {
  constructor(
      public title: string,
      public subtitle: string,
      public icon: Icon,
      public uuid?: string,
      public selected?: boolean
    ) {}

}
