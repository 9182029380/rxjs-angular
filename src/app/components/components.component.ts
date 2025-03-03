import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  Observable,
  of,
  from,
  interval,
  timer,
  map,
  filter,
  reduce,
  scan,
  pluck,
  switchMap,
  mergeMap,
  concatMap,
  debounceTime,
  distinctUntilChanged,
  take,
  takeUntil,
  skip,
  merge,
  concat,
  zip,
  combineLatest,
  forkJoin,
  catchError,
  retry,
  retryWhen,
  tap,
  delay,
  finalize,
  Subject,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject,
  Subscription,
  throwError,
} from 'rxjs';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-components',
  imports: [CommonModule],
  templateUrl: './components.component.html',
})
export class ComponentsComponent implements OnInit  {
  discountProducts:{name:string;price:number}[]=[]
  constructor(private productService:ProductService ) { }

  ngOnInit(){
    this.productService.getDiscountedProducts().subscribe({
      next: (product) => {
        console.log("discout products",product);
        this.discountProducts.push(product);
    },
    error: (err) => {
      console.error("Error fetching discounted products:", err);
    },
    complete: () => {
      console.log("Discounted products fetched successfully");
    }
    });
    
  } 
  }
  
