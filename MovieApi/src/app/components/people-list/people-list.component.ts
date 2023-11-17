import { Component, OnInit } from '@angular/core';
import { People } from '../../models/people-item.interface';
import { PeopleService } from '../../service/people.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit{
listaPersonas: People[]=[];
paginaActual: number = 1;
NumeroDePaginas!: number;
constructor (private personaService: PeopleService,private router: Router){}
  ngOnInit(): void {
    this.pagination();
  }
  pagination(): void{
    this.personaService.getPeopleList(this.paginaActual).subscribe(response=>{
      this.listaPersonas= response.results;
     this.NumeroDePaginas= response.total_pages;
    })
  }
  esPaginaInicio(): boolean {
    return this.router.url === '/home';
  }
  esPaginaPeliculas(): boolean {
    return this.router.url === '/people';
  }

}
