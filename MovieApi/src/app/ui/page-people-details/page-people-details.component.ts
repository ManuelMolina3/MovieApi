import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleDetailsResponse } from 'src/app/models/people-details.interface';
import { PeopleService } from 'src/app/service/people.service';

@Component({
  selector: 'app-page-people-details',
  templateUrl: './page-people-details.component.html',
  styleUrls: ['./page-people-details.component.css']
})
export class PagePeopleDetailsComponent implements OnInit {
  route: ActivatedRoute= inject(ActivatedRoute);
  peopleId: number= 0;
  selectPeople!: PeopleDetailsResponse;

  constructor(private peopleService: PeopleService){
    this.peopleId= Number(this.route.snapshot.params['id']);
  }
  ngOnInit(): void {
    this.peopleService.getPeopleDetails(this.peopleId).subscribe(pdetails=>{
      this.selectPeople= pdetails;
    })
  }
  getUrlImg():string{
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${this.selectPeople.profile_path}`
  }

}
