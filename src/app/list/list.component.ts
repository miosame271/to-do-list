import {Component, OnInit} from '@angular/core';

import {ListItem} from '../list-item';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  toDoList: ListItem[];
  latestID: number;

  getList(): void {
    this.itemService.getList().subscribe(data => this.toDoList = data);
  }

  getListLength(): void {
    this.itemService.getListLength().subscribe(data => this.latestID = data);
  }

  markItem(item: ListItem) {
    item.isDone = !item.isDone;
  }

  addNewItem(text: string) {
    if (text) {
      this.latestID++;
      const newItem: ListItem = {id: this.latestID, text: text, isDone: false};
      this.toDoList.push(newItem);
    }
  }

  removeItem(item: ListItem) {
    if (!item.isDone) {
      const index = this.toDoList.indexOf(item);
      this.toDoList.splice(index, 1);
    }
  }

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.getList();
    this.getListLength();
  }
}
