import { Component, OnInit } from '@angular/core';
import { Serie } from '../../models/series-item.interface';
import { SeriesService } from '../../service/series.service';


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
      this.serieList = series.results;
    })
  }
}
