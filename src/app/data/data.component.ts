import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  indexProduct: number = 5;
  dummy: any;
  constructor(private http: BackendService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.http.getDummy().subscribe((response) => {
      this.dummy = response;
      console.log(this.dummy);
    });
  }

  listName = ['Product Name', 'Color', 'Proccesor', 'Price'];
  listProduct = [
    ['Apple Macbook', 'White', 'M2', '$1500'],
    ['Acer Predator', 'Black', 'Intel 12k', '$1000'],
    ['Asus ROG', 'Navy', 'Ryzen 7200', '$1100'],
  ];
}
