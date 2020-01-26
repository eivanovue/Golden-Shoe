import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html'
})
export class SortingComponent {

  @Output() sort = new EventEmitter();

  private sorting = [
    { name: 'Name (A-Z)', value: 'Name (A-Z)' },
    { name: 'Name (Z-A)', value: 'Name (Z-A)' },
    { name: 'Price (Low-To-High)', value: 'Price (Low-To-High)' },
    { name: 'Price (High-To-Low)', value: 'Price (High-To-Low)' }
  ];

  onSort(sortingId: number) {
    this.sort.emit(sortingId);
  }

}
