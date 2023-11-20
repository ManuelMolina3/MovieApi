import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from 'src/app/models/movie-character';
import { BelongsToCollection } from 'src/app/models/movie-details.interface';
import { Genre, SeriesDetailsResponse } from 'src/app/models/series-details.interface';
import { Serie } from 'src/app/models/series-item.interface';
import { SeriesService } from 'src/app/service/series.service';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})
export class SeriesDetailsComponent implements OnInit{
  id!: string|null;
  pelicula!:SeriesDetailsResponse;
  actores: Cast [] = [];
  currentRate!: number;  
  imagenFondo!: BelongsToCollection;
  peliculaDe: Serie[]=[];
  pelicula1!: Serie;
  current!:number;
  constructor(private route: ActivatedRoute,private peliculaService:SeriesService,private router: Router){}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id != null){
      this.peliculaService.getDetallesSeries1(this.id).subscribe(response=>{
        this.pelicula = response;
        this.current = response.vote_average/ 2; 
        this.getVotos(this.pelicula.id);
        this.pelicula.genres.forEach(genre => {
          this.peliculaService.getPeliculasPorGenero(genre.id.toString()).subscribe(res => {
            this.peliculaDe = res.results;
            this.peliculaDe.forEach(pelicula => {
              this.peliculaService.getSeriesDetalles(pelicula.id).subscribe(details => {
                pelicula.vote_average = details.vote_average / 2;
              });
            });
          });
        });
        
      });
      this.peliculaService.getActoresSeries(this.id).subscribe(e=>{
        this.actores=e.cast;
      });
      
      
    }
  }
  getVotos(id:number):void{
    this.peliculaService.getSeriesDetalles(id).subscribe(re=>{
      this.currentRate = re.vote_average / 2; 
    })
  }
  getSerieDetails(id:number): void{
    this.peliculaService.getSeriesDetalles(id).subscribe(details=>{
      this.current=details.vote_average / 2;
    });
    
  }
  getGenres(): string{
    return this.pelicula.genres.map((genre: Genre)=> genre.name).join(', ');
  }

}
