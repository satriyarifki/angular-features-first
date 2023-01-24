import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private dummy = 'https://dummyjson.com/products/categories';

  constructor(private http: HttpClient) {}
  getDummy() {
    return this.http.get(this.dummy);
  }
}
