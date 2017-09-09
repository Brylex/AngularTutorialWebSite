import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { IProduct } from './product';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {
    private _productUrl = 'https://dcvmexlbxg.execute-api.eu-central-1.amazonaws.com/prod/getProducts';

    constructor(private _http: Http) {}

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
                    .map((response: Response) => <IProduct[]>response.json())
                    .do(data => console.log('All: ' + JSON.stringify(data)))
                    .catch(this.handleError);
    }

    getProduct(productId: number): Observable<IProduct> {
        return this._http.get(this._productUrl + '/' + productId)
                    .map((response: Response) => <IProduct>response.json())
                    .do(data => console.log(productId + ': ' + JSON.stringify(data)))
                    .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}