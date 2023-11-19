import { Component, OnInit } from '@angular/core';
import { KnownFor, People } from 'src/app/models/people-item.interface';
import { PeopleService } from 'src/app/service/people.service';

@Component({
  selector: 'app-page-people',
  templateUrl: './page-people.component.html',
  styleUrls: ['./page-people.component.css']
})
export class PagePeopleComponent {
  listaPersonas: People[]=[];
  paginaActual: number = 1;
  NumeroDePaginas!: number;
  constructor (private personaService: PeopleService){}
    ngOnInit(): void {
      this.pagination();
    }
    pagination(): void{
      this.personaService.getPeopleList(this.paginaActual).subscribe(response=>{
        this.listaPersonas= response.results;
       this.NumeroDePaginas= response.total_pages;
      })
    }
}
