import {Component} from '@angular/core';

import {ListItem} from '../list-item';
import {LIST} from '../data-model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  toDoList = LIST;

  mark(item: ListItem) {
    item.isDone = !item.isDone;
  }
}
