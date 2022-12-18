import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person';
import { PersonServiceService } from '../person-service.service';

@Component({
  selector: 'app-add-person-component',
  templateUrl: './add-person-component.component.html',
  styleUrls: ['./add-person-component.component.css'],
})
export class AddPersonComponentComponent implements OnInit {
  person: Person = {
    address: {},
  };
  key: string;

  constructor(private router: Router, private ps: PersonServiceService) {}

  ngOnInit() {}
  public save() {
    this.key = this.randomString(7);
    this.ps.saveData(this.key, this.person);
    this.router.navigate(['']);
  }
  randomString(length) {
    var randomChars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  }
}
