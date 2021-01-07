import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from 'src/app/service/gallery.service';
import { Images } from '../../interface/gallery';
import { IMAGE } from '../gallery/mocklist';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  
  display = false;
  overlay = true;

  openOverlay = (id:number) => {
   console.log("id of img is..",id);
   this.loadImage(id);
    this.overlay = !this.overlay;
    this.display = true;
  }
  closeOverlay = () => {
    this.overlay = !this.overlay;
    this.display = false;
  }

  image: Images = {
    id: 0,
    name: '',
    imageUrl: ''
  }

  imagelist: Images[];

  constructor(private galleryservice: GalleryService, private activateRoute: ActivatedRoute) {
    this.imagelist = [];
  }



  ngOnInit(): void {
    this.getAllImages();
  }

  loadImage(id: number): void {
   this.image =  this.galleryservice.getImage(id);
    console.log("load img .....",this.image);
  }

  getAllImages(): void {
    this.imagelist = this.galleryservice.getAllImages();

  }

}
