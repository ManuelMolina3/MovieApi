import { Component, Input, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MovieDetailsResponse } from 'src/app/models/movie-details.interface';
import { Movie } from 'src/app/models/movie-item.interface';
import { MovieService } from 'src/app/service/movie.service';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { AccountResponse } from 'src/app/models/account.interface';
=======

import {Subject} from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { MovieService } from '../../service/movie.service';





>>>>>>> 245a29aa391af168b56caeb80de9d1826cef048b

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  searchTerm: string = '';
  results: any[] = [];
  user!: AccountResponse;
  searchSubject = new Subject<string>();

  constructor(
    private movieService: MovieService,
    private modalService: NgbModal,
    private router: Router,
    private authService: AuthService
  ) {
    this.searchSubject
      .pipe(
        debounceTime(300),
        switchMap((searchTerm) => this.movieService.multiSearch(searchTerm))
      )
      .subscribe(([movies, tvShows, persons]) => {
        this.results = [
          ...movies.results,
          ...tvShows.results,
          ...persons.results,
        ];
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

  openModal(opmodal: any) {
    this.modalService.open(opmodal);
  }

  doLogin() {
    this.authService.getRequestToken().subscribe((resp) => {
      localStorage.setItem('REQUEST_TOKEN', resp.request_token);

      window.location.href = `https://www.themoviedb.org/authenticate/${localStorage.getItem(
        'REQUEST_TOKEN'
      )}?redirect_to=http://localhost:4200/approved`;
    });
  }

  isUserLoggedIn(): boolean {
    let id = localStorage.getItem('SESSION_ID');
    return id == null ? true : false;
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 245a29aa391af168b56caeb80de9d1826cef048b
