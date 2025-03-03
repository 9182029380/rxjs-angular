import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  // getProducts():Observable<string> {
  //   return new Observable(observer => {
  //     observer.next('Product 1');
  //     observer.next('Product 2');

  //     setTimeout(() => {
  //       observer.next('Product 3');
  //       observer.complete();
        
  //     }, 2000);
  //  });
  // }
  private products=[
    {name:'Laptop',price:1000},
    {name:'Mobile',price:500},
    {name:'Tablet',price:300}
    ];
  getDiscountedProducts():Observable<{name:string;price:number}>{
    return of(...this.products).pipe(
      map(product=>({...product,price:product.price*0.9}))
    );

  }
   
  }

