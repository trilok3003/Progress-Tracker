import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  activeStep = 0;
  steps = ['order placed', 'ready for pickup', 'on the way', 'delivered!'];
}
