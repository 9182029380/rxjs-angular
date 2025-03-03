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
  products: { name: string; price: number }[] = [];
  filteredProducts: { name: string; price: number }[] = [];

  // BehaviorSubjects to track checkbox states
  price0to5000$ = new BehaviorSubject<boolean>(false);
  price5000to10000$ = new BehaviorSubject<boolean>(false);
  price10000above$ = new BehaviorSubject<boolean>(false);

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.applyFilters(); // Ensure the filter logic applies initially
    });

    // Combine latest checkbox selections and filter products dynamically
    combineLatest([
      this.price0to5000$,
      this.price5000to10000$,
      this.price10000above$
    ])
      .pipe(
        map(([range1, range2, range3]) => {
          return this.filterProducts(range1, range2, range3);
        })
      )
      .subscribe(filtered => {
        this.filteredProducts = filtered;
      });
  }

  // Method to apply filtering logic
  private filterProducts(range1: boolean, range2: boolean, range3: boolean) {
    if (!range1 && !range2 && !range3) {
      return this.products; // If no checkbox is selected, return all products
    }

    return this.products.filter(product => {
      return (
        (range1 && product.price <= 5000) ||
        (range2 && product.price > 5000 && product.price <= 10000) ||
        (range3 && product.price > 10000)
      );
    });
  }

  // Update filter state when a checkbox changes
  onFilterChange(range: string, checked: boolean) {
    if (range === '0-5000') this.price0to5000$.next(checked);
    if (range === '5000-10000') this.price5000to10000$.next(checked);
    if (range === '10000+') this.price10000above$.next(checked);
  }

  // Apply initial filter logic
  private applyFilters() {
    this.filteredProducts = this.products;
  }
}
