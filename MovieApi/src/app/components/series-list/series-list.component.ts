import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from 'src/app/models/series-item.interface';
import { SeriesService } from 'src/app/service/series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  serieList: Serie[] = [];
  paginaActual: number = 1;
  NumeroDePaginas!: number;
  constructor(private serieService: SeriesService,private router: Router){}
  
  ngOnInit(): void {
    this.pagination();
  }
  pagination(): void{
    this.serieService.getSeries(this.paginaActual).subscribe(series=>{
      this.serieList = series.results;
      this.NumeroDePaginas= series.total_pages;
    })
  }
  esPaginaInicio(): boolean {
    return this.router.url === '/home';
  }
  esPaginaPeliculas(): boolean {
    return this.router.url === '/serie';
  }


}
