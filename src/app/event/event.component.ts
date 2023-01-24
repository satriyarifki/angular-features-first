import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  listColor = ['Green', 'Blue', 'Red'];
  selectedColor = 'White';
  w = 'white';
  b = 'blue';
  r = 'red';
  g = 'green';
  imageTitle: String = '';
  imageUrl =
    'https://img.freepik.com/free-vector/summer-landscape-with-lake-fields-mountains_107791-12866.jpg';
  colorHeight = '50px';
  onSelected(value: string): void {
    this.selectedColor = value;
  }
}
