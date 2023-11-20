import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit{
  page= 1;

  constructor(private accountService:AccountService){}
  ngOnInit(): void {
    this.pagiWatchListMovie;
  }
  pagiWatchListMovie(){
    this.accountService.getMovieWatchlistByPage(this.page);
  }


}
