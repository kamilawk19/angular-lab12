import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class PersonServiceService {
  constructor() {}

  public allStorage() {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length,
      per: Person = {
        address: {},
      },
      ak = [];

    while (i--) {
      if (!keys[i].startsWith('edit')) {
        //values.push(localStorage.getItem(keys[i]));
        per = JSON.parse(localStorage.getItem(keys[i]));
        values.push(per);
        ak.push(keys[i]);
      }
    }
    return [values, ak];
  }

  public getData(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
  public saveData(key: string, value: Person) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }
}
