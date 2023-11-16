import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/models/series-item.interface';
import { SeriesService } from 'src/app/service/series.service';

@Component({
  selector: 'app-series-to-home',
  templateUrl: './series-to-home.component.html',
  styleUrls: ['./series-to-home.component.css']
})
export class SeriesToHomeComponent implements OnInit {
  serieList: Serie[]=[];
  constructor(private serieService: SeriesService){
  }
  ngOnInit(): void {
    this.serieService.getSeriesToHome().subscribe(series =>{
      debugger;
      this.serieList = series.results;
    })
  }
}
