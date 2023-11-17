import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/series-item.interface';
import { SeriesService } from 'src/app/service/series.service';
@Component({
  selector: 'app-page-series',
  templateUrl: './page-series.component.html',
  styleUrls: ['./page-series.component.css']
})
export class PageSeriesComponent {
  serieList: Serie[] = [];
  paginaActual: number = 1;
  NumeroDePaginas!: number;
  constructor(private serieService: SeriesService){}
  
  ngOnInit(): void {
    this.pagination();
  }
  pagination(): void{
    this.serieService.getSeries(this.paginaActual).subscribe(series=>{
      this.serieList = series.results;
      this.NumeroDePaginas= series.total_pages;
    })
  }

}
