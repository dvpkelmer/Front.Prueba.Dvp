import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private readonly httpClient: HttpClient) { }

  create(body: any, endpoint: string) {
    return this.httpClient.post<any>(`${environment.apiUrl}/${endpoint}/create`, body);
  }

  login(body: any, endpoint: string) {
    return this.httpClient.post<any>(`${environment.apiUrl}/${endpoint}`, body);
  }
}
