import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductsComponent} from "../products.component";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() filter = new EventEmitter();

  // @ts-ignore
  productComponent = new ProductsComponent();

  private options = [
    { name: 'Ankle boots', value: 'Ankle boots', checked: false },
    { name: 'Boat shoes', value: 'Boat shoes', checked: false },
    { name: 'Brogues', value: 'Brogues', checked: false },
    { name: 'Chelsea boots', value: 'Chelsea boots', checked: false },
    { name: 'Derby shoe', value: 'Derby shoe', checked: false },
    { name: 'Flat sandals', value: 'Flat sandals', checked: false },
    { name: 'Loafers & Slip ons', value: 'Loafers & Slip ons', checked: false },
    { name: 'Oxford shoes', value: 'Oxford shoes', checked: false },
    { name: 'T Bar shoes', value: 'T Bar shoes', checked: false },
    { name: 'Trainers', value: 'Trainers', checked: false }

  ];

  public ngOnInit() {
    this.onFilter();
  }

  private onFilter() {

    const checkedOptions = this.options
      .filter(o => o.checked)
      .map(o => o.name);

    const checkedMerged = [...checkedOptions];

    this.filter.emit(checkedMerged);
  }

  onSort(event){
    this.productComponent.onSort(event);
  }

  reset(){
    this.options.forEach( item => {
      item.checked = false;
    })
  }

}
