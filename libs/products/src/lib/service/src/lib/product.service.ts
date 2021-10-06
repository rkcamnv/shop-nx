import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelProduct } from '@shop-nx/shared/models';
import { UtilApi, UtilUrl } from '@shop-nx/shared/utils/router';
import { ID } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private url = `${UtilUrl}/${UtilApi.products}`;

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<ModelProduct[]> {
    return this.http.get<ModelProduct[]>(this.url);
  }

  public getProduct(id: ID): Observable<ModelProduct> {
    return this.http.get<ModelProduct>(`${this.url}/${id}`);
  }

  public postProduct(product: ModelProduct): Observable<ModelProduct> {
    return this.http.post<ModelProduct>(`${this.url}`, product);
  }

  public putProduct(product: ModelProduct): Observable<ModelProduct> {
    return this.http.put<ModelProduct>(`${this.url}/${product.id}`, product);
  }

  public deleteProduct(id: ID): Observable<ModelProduct> {
    return this.http.delete<ModelProduct>(`${this.url}/${id}`);
  }
}
