import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonServiceService } from '../person-service.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css'],
})
export class ListComponentComponent implements OnInit {
  st: string;
  smth = [];
  objs = [];
  keys = [];

  constructor(private ps: PersonServiceService) {}

  ngOnInit() {
    this.smth = this.ps.allStorage();
    this.objs = this.smth[0];
    this.keys = this.smth[1];
  }

  public delete(index) {
    this.ps.removeData(index);
    window.location.reload();
  }
}
