import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onRemoveProduct = new EventEmitter();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onUpdateProduct = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  removeProduct(productId: string): void {
    this.onRemoveProduct.emit(productId);
  }

  updateQuantity(element): void {
    this.onUpdateProduct.emit(element);
  }

  demoK(key) {
    if (key.keyCode === 13) {
      console.log(key.target.id);
      console.log(key.target.value);
    }
  }
}
