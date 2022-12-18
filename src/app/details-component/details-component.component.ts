import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonServiceService } from '../person-service.service';
import { Person } from '../person';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css'],
})
export class DetailsComponentComponent implements OnInit {
  private id;
  per: Person;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ps: PersonServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(params['id']);
      console.log(params);
    });
    this.per = this.ps.getData(this.id);
  }
}
