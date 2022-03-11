import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/ICategory';
import { IMovie } from 'src/app/models/IMovie';
import { RequestCatalogService } from 'src/app/services/apiRequests/request-catalog.service';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  categories: ICategory[] = [];

  constructor(private service: RequestCatalogService, private orderService: OrdersService) {}

  ngOnInit() {
    this.service.category$.subscribe((categoriesFromApi: ICategory[]) => {
      this.categories = categoriesFromApi;
    });
    this.service.getCategories();
    
  }

  changeCategory(categoryId: number) {
  }
}
