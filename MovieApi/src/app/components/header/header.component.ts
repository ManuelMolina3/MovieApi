import { Component, Input, OnInit } from '@angular/core';
import { MovieDetailsResponse } from 'src/app/models/movie-details.interface';
import { Movie } from 'src/app/models/movie-item.interface';
import { MovieService } from 'src/app/service/movie.service';
import {Subject} from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';






@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchTerm: string = '';
  results: any[] = [];
 
  searchSubject = new Subject<string>();

  constructor(private movieService: MovieService,private modalService: NgbModal, private router: Router) {
    this.searchSubject.pipe(
      debounceTime(300),
      switchMap(searchTerm => this.movieService.multiSearch(searchTerm))
    ).subscribe(([movies, tvShows, persons]) => {
      this.results = [...movies.results, ...tvShows.results, ...persons.results];
    });
  }

  onKeyUp(event: any) {
    this.searchTerm = event?.target?.value;
    if (this.searchTerm) {
      this.searchSubject.next(this.searchTerm);
    }
  }
  onResultClick(result: any) {
    this.router.navigate(['/movie-details', result.id]);
  }

  isSearchEmpty(): boolean {
    return this.searchTerm === '';
  }
  openModal(opmodal: any){
  this.modalService.open(opmodal);
  }
}


