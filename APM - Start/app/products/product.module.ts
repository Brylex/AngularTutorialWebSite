import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.component';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailsComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(
            [
              {path: 'products', component: ProductListComponent },
              {path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailsComponent }
            ]),
    ],
    providers: [
        ProductDetailGuard,
        ProductService
    ],
})
export class ProductModule {}