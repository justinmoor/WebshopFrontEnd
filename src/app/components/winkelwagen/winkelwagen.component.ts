import { Component, OnInit } from '@angular/core';
import { WinkelwagenserviceService } from '../../services/winkelwagen/winkelwagenservice.service';
import {Winkelwagen} from '../../models/winkelwagen'
import { CartItem } from '../../models/cart-item';
import { Product } from '../../models/product';
import { ProductserviceService } from '../../services/producten/productservice.service';


@Component({
  selector: 'app-winkelwagen',
  templateUrl: './winkelwagen.component.html',
  styleUrls: ['./winkelwagen.component.css']
})
export class WinkelwagenComponent implements OnInit {

  items: CartItem[] =  []
  producten: Product[] = [];
  count = 1
  totaal = 0
  done : boolean = false;

  winkelWagen : Winkelwagen = new Winkelwagen
 
  constructor(private wagen : WinkelwagenserviceService, private service : ProductserviceService) { 
    
  }

  ngOnInit() {
  this.producten = JSON.parse(sessionStorage.getItem("activeWinkelwagen"));
  if(this.producten != null){
    this.producten.sort();
   // console.log(this.producten)
    for (let i = 0; i < this.producten.length; i++){
        if(!this.producten[i] == this.producten[i+1]){      
          this.count += 1
        } else {
          this.items.push(new CartItem(this.producten[i], this.count))
          this.count = 1
        }
    }

    for(let i = 0; i < this.items.length; i++){
      this.totaal += this.items[i].product.prijs * this.items[i].aantal;
    }
  }

  }

  checkOut(){
    this.winkelWagen.producten = this.producten
    console.log(this.winkelWagen.producten[0])
    this.service.checkOut(this.winkelWagen)
    sessionStorage.removeItem("activeWinkelwagen")
    this.wagen.productenInWinkelwagen = []
    this.items = null
    this.done = true;
  }
}


