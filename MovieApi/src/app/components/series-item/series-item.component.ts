import { Component, Input} from '@angular/core';
import { Serie } from 'src/app/models/series-item.interface';

@Component({
  selector: 'app-series-item',
  templateUrl: './series-item.component.html',
  styleUrls: ['./series-item.component.css']
})
export class SeriesItemComponent{
  @Input() serie!: Serie;

  getImgSerie(): string{
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${this.serie.poster_path}`
  }

}
