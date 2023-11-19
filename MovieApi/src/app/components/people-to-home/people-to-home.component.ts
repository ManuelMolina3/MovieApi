import { Component, OnInit } from '@angular/core';
import { People } from '../../models/people-item.interface';
import { PeopleService } from '../../service/people.service';


@Component({
  selector: 'app-people-to-home',
  templateUrl: './people-to-home.component.html',
  styleUrls: ['./people-to-home.component.css']
})
export class PeopleToHomeComponent implements OnInit {

  peopleList: People[]= [];
  constructor(private peopleService: PeopleService){}
  ngOnInit(): void {
    this.peopleService.getPeopleToHome().subscribe(people =>{
      this.peopleList = people.results;
    })
  }

}
