import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private product = 'http://localhost:3000/product';

  constructor(private http: HttpClient) {}
  getDummy() {
    return this.http.get(this.product);
  }
}
