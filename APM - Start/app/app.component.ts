import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    pageTitle: string = "Acme Product Managment"

    constructor(private _productService: ProductService) {}
}