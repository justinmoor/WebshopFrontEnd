import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../api/api.service'

@Injectable()
export class ProductserviceService {

  constructor(private api: ApiService) { }

  public getAlleProducten(){
    return this.api.getProducten();
  }

  public uploadImage(image){
    return this.api.uploadImage(image)
  }

  public uploadProduct(data:Object){
    return this.api.uploadProduct(data).subscribe(data =>{
  },
  error => {
      alert("Er is iets mis gegegaan!");
  });
}

  public verwijder(product){
    this.api.verwijder(product);
  }

  public checkOut(items){
    this.api.checkOut(items);
  }

}

