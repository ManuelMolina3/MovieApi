import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesDetailsComponent } from 'src/app/components/series-details/series-details.component';
import { SeriesDetailsResponse } from 'src/app/models/series-details.interface';
import { CastSerie } from 'src/app/models/series-people.interface';
import { SeriesService } from 'src/app/service/series.service';

@Component({
  selector: 'app-page-series-datails',
  templateUrl: './page-series-datails.component.html',
  styleUrls: ['./page-series-datails.component.css']
})
export class PageSeriesDatailsComponent implements OnInit {
  route: ActivatedRoute= inject(ActivatedRoute);
  serieId: number= 0;
  selectSerie!: SeriesDetailsResponse;
  people!: CastSerie[];
  constructor(private serieService: SeriesService){
    this.serieId= Number(this.route.snapshot.params['id'])
  }
  ngOnInit(): void {
    this.serieService.getSeriesDetalles(this.serieId).subscribe(serie=>{
      this.selectSerie= serie;
    })
    this.serieService.getPeopleToSeries(this.serieId).subscribe(peopleS=>{
      this.people= peopleS.cast;
    })
  }
  getUrlImg():string{
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${this.selectSerie.poster_path}`
  }

}
