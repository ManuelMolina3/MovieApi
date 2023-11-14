import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent {
  constructor(private router: Router) {}
  peliculaClickLista(idPelicula: number){
    
    this.router.navigate(['/pelicula', idPelicula]);
  }
}
