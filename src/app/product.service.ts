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
  private products = [
    { name: 'Laptop', price: 15000 },
    { name: 'Mobile', price: 7000 },
    { name: 'Tablet', price: 3000 },
    { name: 'Smartwatch', price: 4000 },
    { name: 'TV', price: 9000 },
    { name: 'Headphones', price: 2000 }
  ];

  // Observable to return the full product list
  getProducts(): Observable<{ name: string; price: number }[]> {
    return of(this.products);
  }
   
  }

