import { Injectable } from '@angular/core';
import { Images } from '../interface/gallery';
import { IMAGE } from '../components/gallery/mocklist';


@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }

  getAllImages(): Images[] {
    return IMAGE;
  }

  getImage(id: number): any {
    return IMAGE.find((item : any )=> item.id === id);
    }

}
