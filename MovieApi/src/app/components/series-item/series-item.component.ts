import { Component, Input, OnInit} from '@angular/core';
import { SeriesDetailsResponse, Genre } from '../../models/series-details.interface';
import { Serie } from '../../models/series-item.interface';
import { SeriesService } from '../../service/series.service';




@Component({
  selector: 'app-series-item',
  templateUrl: './series-item.component.html',
  styleUrls: ['./series-item.component.css']
})
export class SeriesItemComponent implements OnInit{
  @Input() serie!: Serie;
  serieDetails!: SeriesDetailsResponse;
  currentRate!: number;
  constructor(private serieService: SeriesService){}

  getImgSerie(): string{
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${this.serie.poster_path}`
  }
  ngOnInit(): void {
    this.getValoracion(this.serie.id);
  }
  getValoracion(id:number): void{
    this.serieService.getSeriesDetalles(id).subscribe(details=>{
      this.serieDetails= details;
      this.currentRate = details.vote_average/ 2;  
    })
  }
  getGenres(): string {
    return this.serieDetails.genres.map((genre: Genre) => genre.name).join(', ');
  }

}
