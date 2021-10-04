import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelUser } from '@shop-nx/shared/models';
import { UtilApi, UtilUrl } from '@shop-nx/shared/utils/router';

@Injectable({providedIn:'root'})
export class UserService{

  constructor(
    private http:HttpClient
  ) {
  }

  public getUsers():Observable<ModelUser[]>{
    return this.http.get<ModelUser[]>(`${UtilUrl}/${UtilApi.users}`);
  }
}
