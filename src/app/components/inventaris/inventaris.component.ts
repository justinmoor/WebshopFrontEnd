import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../../services/producten/productservice.service';
import { Product } from '../../models/product'

@Component({
  selector: 'app-inventaris',
  templateUrl: './inventaris.component.html',
  styleUrls: ['./inventaris.component.css']
})
export class InventarisComponent implements OnInit {

  public searchString:string;
  producten: any;
  constructor(private productService : ProductserviceService) {
    this.productService.getAlleProducten().subscribe(product => {
      this.producten = product
    })
   }

  ngOnInit() {
  }

  verwijderProduct(product:Product){
    if(confirm("Weet u zeker dat u dit product wilt verwijderen uit het assortiment?")){
      this.productService.verwijder(product);
      location.reload();
    } 
  }

}
