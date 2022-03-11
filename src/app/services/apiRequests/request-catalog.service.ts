import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IApiResponse } from 'src/app/models/IApiResponse';
import { ICategory } from 'src/app/models/ICategory';
import { IMovie } from 'src/app/models/IMovie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestCatalogService {
  private movies = new Subject<IMovie[]>();
  movies$ = this.movies.asObservable();

  private category = new Subject<ICategory[]>();
  category$ = this.category.asObservable();

  constructor(private http: HttpClient) {}

  getProducts() {
    this.http.get<IMovie[]>(environment.apiURL).subscribe((data: IMovie[]) => {
      this.movies.next(data);
    });
  }

  getCategories() {
    this.http
      .get<ICategory[]>(environment.apiCategoryURL)
      .subscribe((data: ICategory[]) => {
        this.category.next(data);
      });
  }

}
