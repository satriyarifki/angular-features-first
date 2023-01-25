import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';
import { IProductApi } from './data';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  indexProduct: number = 5;
  product: any;
  dummy: IProductApi[] = [];
  constructor(private http: BackendService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.http.getDummy().subscribe((response: any) => {
      this.dummy = response;
      console.log(this.dummy[0].name);
      new Chart('chartPrice', {
        type: 'line',
        data: {
          labels: [
            this.dummy[0].name,
            this.dummy[1].name,
            this.dummy[2].name,
            this.dummy[3].name,
          ],
          datasets: [
            {
              label: 'Price',
              data: [
                this.dummy[0].price,
                this.dummy[1].price,
                this.dummy[2].price,
                this.dummy[3].price,
              ],
              borderWidth: 1,
              backgroundColor: '#0d0863',
            },
          ],
        },
        options: {
          scales: {
            y: {
              min: 1000,
              max: 20000,
            },
          },
        },
      });
    });
  }

  listName = ['Product Name', 'Color', 'Proccesor', 'Price'];
  listProduct = [
    ['Apple Macbook', 'White', 'M2', '$1500'],
    ['Acer Predator', 'Black', 'Intel 12k', '$1000'],
    ['Asus ROG', 'Navy', 'Ryzen 7200', '$1100'],
  ];
}
