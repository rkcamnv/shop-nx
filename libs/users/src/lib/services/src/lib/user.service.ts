import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModelUser } from '@shop-nx/shared/models';
import { UtilApi, UtilUrl } from '@shop-nx/shared/utils/router';
import { ID } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class UserService {
  private url = `${UtilUrl}/${UtilApi.users}`;

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<ModelUser[]> {
    return this.http.get<ModelUser[]>(this.url);
  }

  public getUser(id: ID): Observable<ModelUser> {
    return this.http.get<ModelUser>(`${this.url}/${id}`);
  }

  public postUser(user: ModelUser): Observable<ModelUser> {
    return this.http.post<ModelUser>(this.url, user);
  }

  public putUser(user: ModelUser): Observable<ModelUser> {
    return this.http.put<ModelUser>(`${this.url}/${user.id}`, user);
  }

  public deleteUser(id: ID): Observable<ModelUser> {
    return this.http.delete<ModelUser>(`${this.url}/${id}`);
  }
}
