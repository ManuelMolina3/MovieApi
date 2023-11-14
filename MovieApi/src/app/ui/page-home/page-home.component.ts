import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie-item.interface';
import { People } from 'src/app/models/people-item.interface';
import { Serie } from 'src/app/models/series-item.interface';


@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit{
  serieList: Serie[] = [];
  peliculasList: Movie[]=[];
  peopleList: People[]=[];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
