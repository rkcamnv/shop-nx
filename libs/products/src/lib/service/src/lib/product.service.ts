import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelProduct } from '@shop-nx/shared/models';
import { UtilApi, UtilUrl } from '@shop-nx/shared/utils/router';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<ModelProduct[]> {
    return this.http.get<ModelProduct[]>(`${UtilUrl}/${UtilApi.products}`);
  }
}
