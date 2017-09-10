import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pd-app',
    templateUrl: 'app/products/product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
    pageTitle: string = 'Product Details';
    product: IProduct;
    errorMessage: string;

    constructor(private _route: ActivatedRoute, 
        private _router: Router,
        private _productService: ProductService) { }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this._productService.getProduct(id)
            .subscribe(
                product => this.product = product,
                error => this.errorMessage = <any>error
            );
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

    onRatingClicked(messgae: string) {}
}