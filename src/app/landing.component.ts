import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing-name',
  templateUrl: 'landing.component.html',
})
export class LandingComponent implements OnInit {
  show = false;
  show2 = false;
  time = new Date();
  test = 'test';
  hide = 'hidden';
  hide2 = 'hidden';
  dropdown() {
    this.show = !this.show;
    if (this.show) {
      this.hide = '';
    } else {
      this.hide = 'hidden';
    }
  }
  dropdown2() {
    this.show2 = !this.show2;
    if (this.show2) {
      this.hide2 = '';
    } else {
      this.hide2 = 'hidden';
    }
  }
  ngOnInit() {
    setInterval(() => {
      this.time = new Date(); //set time variable with current date
    }, 1000);
  }
}
