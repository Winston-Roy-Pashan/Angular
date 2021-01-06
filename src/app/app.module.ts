import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResturantBackgroundComponent } from './components/resturant-background/resturant-background.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ReviewRatingComponent } from './components/review-rating/review-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ResturantBackgroundComponent,
    GalleryComponent,
    ReviewRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
