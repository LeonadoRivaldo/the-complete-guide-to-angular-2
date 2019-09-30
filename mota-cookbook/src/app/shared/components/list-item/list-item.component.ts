import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/bo/models/recipe.model';

@Component({
  selector: 'mcb-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item: Recipe;

  constructor() { }

  ngOnInit() {
  }


  get alt() {
    return  'Image for ' + this.item.name;
  }

}
