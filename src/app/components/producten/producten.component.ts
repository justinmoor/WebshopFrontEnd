import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../../services/producten/productservice.service';
import { AuthorizationService } from '../../services/user/authorization.service';
import { Product } from '../../models/product';
import { WinkelwagenserviceService } from '../../services/winkelwagen/winkelwagenservice.service';
import { WinkelwagenComponent } from '../winkelwagen/winkelwagen.component';

@Component({
  selector: 'app-producten',
  templateUrl: './producten.component.html',
  styleUrls: ['./producten.component.css']
})
export class ProductenComponent implements OnInit {

  producten: any
  aantal:number = 1;
  besteldeProducten : Product[]
  

  constructor(private productService: ProductserviceService, private auth : AuthorizationService, private wagen : WinkelwagenserviceService) {
    this.productService.getAlleProducten().subscribe(producten => {
      this.producten = producten
    });

    this.besteldeProducten = JSON.parse(sessionStorage.getItem("activeWinkelwagen"));
   }

  ngOnInit() {
  }

  addWinkelmand(product : Product, event){
   //   product.besteld = true;

   if(event.srcElement.innerHTML ===' Voeg toe aan winkelmand' ){
      console.log("werkt")
      event.srcElement.innerHTML="Product in winkelmand!";
      event.srcElement.innerHTML.d
    }
      
      if(this.besteldeProducten != null){
        for(let i = 0; i < this.besteldeProducten.length; i++){
          this.wagen.productenInWinkelwagen.push(this.besteldeProducten[i])
        }
      }
    
      this.wagen.productenInWinkelwagen.push(product)     
      sessionStorage.setItem('activeWinkelwagen', JSON.stringify(this.wagen.productenInWinkelwagen));
  }
}
