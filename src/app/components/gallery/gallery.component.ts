import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from 'src/app/service/gallery.service';
import { Images } from '../../interface/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  display = false;
  overlay = true;

  openOverlay = () => {
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

 

  constructor(private galleryservice: GalleryService,private activateRoute: ActivatedRoute) { }

  imagelist : Images[];

  ngOnInit(): void {
    this.getAllImages();
    const id =Number(this.activateRoute.snapshot.paramMap.get('phoneid'));
    this.loadImage(id);

  }

loadImage(id: number): void {
  this.image = this.galleryservice.getImage(id)
}

  getAllImages(): void {
    this.imagelist = this.galleryservice.getAllImages();
  }

}
