import { Injectable } from '@angular/core';
import { REVIEWRATING } from '../components/review-rating/mocklist';
import { Reviewrating } from '../interface/Reviewrating';

@Injectable({
  providedIn: 'root'
})
export class ReviewratingService {

  constructor() { }

  getAllReviewRating(): Reviewrating[] {
    return REVIEWRATING;
  }
}
