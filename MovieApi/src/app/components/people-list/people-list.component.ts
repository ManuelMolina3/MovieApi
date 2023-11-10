import { Component, OnInit } from '@angular/core';
import { KnownFor, People } from 'src/app/models/people-item.interface';
import { PeopleService } from 'src/app/service/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit{
listaPersonas: People[]=[];

constructor (private personaService: PeopleService){}
  ngOnInit(): void {
    this.personaService.getPeopleList().subscribe(response=>{
      this.listaPersonas= response.results;
     
    })
  }

}
