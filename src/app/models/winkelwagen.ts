import { Product } from "./product";
import { CartItem } from "./cart-item";

export class Winkelwagen
{
    constructor(
        public producten: Product[] = new Array<Product>()
   
    ){
        
    }
}