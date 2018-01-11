import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {ListItem} from './list-item';

@Injectable()
export class ItemService {
  private dbURL = 'https://raw.githubusercontent.com/miosame271/to-do-data/master/db.json';

  private addHeaders() {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
  }

  getList(): Observable<ListItem[]> {
    this.addHeaders();
    return this.http.get(this.dbURL)
      .map(data => {
        const result = data['data'];
        return result.map(function (item: any) {
          return {id: item.id, text: item.text, isDone: item.isDone};
        });
      });
  }

  getListLength(): Observable<number> {
    this.addHeaders();
    return this.http.get(this.dbURL)
      .map(data => {
        return Object.keys('data').length + 1;
      });
  }

  constructor(private http: HttpClient) {
  }
}
