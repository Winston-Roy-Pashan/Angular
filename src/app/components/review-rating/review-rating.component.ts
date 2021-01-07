import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewratingService } from 'src/app/service/reviewrating.service';
import { Reviewrating } from '../../interface/Reviewrating'

@Component({
  selector: 'app-review-rating',
  templateUrl: './review-rating.component.html',
  styleUrls: ['./review-rating.component.scss']
})
export class ReviewRatingComponent implements OnInit {
  review: Reviewrating = {
    name: '',
    review: 0,
    rating: 0,
    star: 0,
    comment: '',
    date: '',
    like: 0,
    imageurl: ''
  }

  reviewRating: Reviewrating[];

  constructor(private router: Router, private reviewratingservice: ReviewratingService) {
    this.reviewRating = [];
  }

  ngOnInit(): void {
    this.getAllReviewRating();
  }

  getAllReviewRating(): void {
    this.reviewRating = this.reviewratingservice.getAllReviewRating();
    console.log("all reviewrating ..", this.reviewRating)
  }

}
