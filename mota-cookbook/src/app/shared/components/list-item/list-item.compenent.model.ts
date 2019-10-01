import { Icon } from 'src/app/bo/models/icon.model';


export interface IListITem {
  title: string;
  subtitle: string;
  icon: Icon;
  uuid?: string;
}

/**
 *
 * @param title main value
 * @param subtitle description text or other infos
 * @param icon image or icon
 * @export
 */
export default class ListItem implements IListITem {
  uuid: string;
  title: string;
  subtitle: string;
  icon: Icon;

  constructor( title: string, subtitle?: string, icon?: Icon, uuid?: string ) {
    this.title = title;
    this.subtitle = subtitle;
    this.icon = icon;
    this.uuid = uuid;
  }

}
