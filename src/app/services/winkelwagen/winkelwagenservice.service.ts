import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

@Injectable()
export class WinkelwagenserviceService {

  productenInWinkelwagen : Product[] = [];

  constructor() {
    this.productenInWinkelwagen.sort();
   }


}
