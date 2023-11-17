import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleDetailsResponse } from 'src/app/models/people-details.interface';
import { CastPelicula } from 'src/app/models/people-movie.interface';
import { CastTv } from 'src/app/models/people-tv-show.interface';
import { PeopleService } from 'src/app/service/people.service';
import { MovieService } from '../../service/movie.service';
import { Genre, MovieDetailsResponse } from '../../models/movie-details.interface';

@Component({
  selector: 'app-page-people-details',
  templateUrl: './page-people-details.component.html',
  styleUrls: ['./page-people-details.component.css']
})
export class PagePeopleDetailsComponent implements OnInit {
  route: ActivatedRoute= inject(ActivatedRoute);
  peopleId: number= 0;
  selectPeople!: PeopleDetailsResponse;
  peliculas!: CastPelicula[];
  tv_show! : CastTv[];

  constructor(private peopleService: PeopleService,private router: Router){
    this.peopleId= Number(this.route.snapshot.params['id']);
  }
  ngOnInit(): void {
    this.peopleService.getPeopleDetails(this.peopleId).subscribe(pdetails=>{
      this.selectPeople= pdetails;
    });
    this.peopleService.getMoviesPeople(this.peopleId).subscribe(moviesPeople=>{
      this.peliculas= moviesPeople.cast;
    });
    this.peopleService.getTvShowsPeople(this.peopleId).subscribe(tv=>{
      this.tv_show= tv.cast;
    })
  }
  getUrlImg():string{
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${this.selectPeople.profile_path}`
  }
  onResultClick(result: any) {
    this.router.navigate(['/movie-details', result.id]);
  }
  

}
