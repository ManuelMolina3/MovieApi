import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { SeriesItemComponent } from './components/series-item/series-item.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { PageSeriesComponent } from './ui/page-series/page-series.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    SeriesItemComponent,
    SeriesListComponent,
    PageSeriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
