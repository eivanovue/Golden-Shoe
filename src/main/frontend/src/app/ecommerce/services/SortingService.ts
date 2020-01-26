import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  static sortDecider(filtered, sortingId) {
    if (sortingId === 0) {
      filtered = SortingService.sortByNameAlphabeticallyAscending(filtered);
    }
    if (sortingId === 1) {
      filtered = SortingService.sortByNameAlphabeticallyDescending(filtered);
    }
    if (sortingId === 2) {
      filtered = SortingService.sortByPriceAscending(filtered);
    }
    if (sortingId === 3) {
      filtered = SortingService.sortByPriceDescending(filtered);
    }
    return filtered;
  }

  static sortByNameAlphabeticallyAscending(products) {
    products.sort((a, b) => a.product.name.localeCompare(b.product.name));
    return products;
  }

  static sortByNameAlphabeticallyDescending(products) {
    products.sort((a, b) => a.product.name.localeCompare(b.product.name)).reverse();
    return products;
  }

  static sortByPriceAscending(products) {
    products.sort((a, b) => a.product.price - b.product.price);
    return products;
  }

  static sortByPriceDescending(products) {
    products.sort((a, b) => a.product.price - b.product.price).reverse();
    return products;
  }

}
