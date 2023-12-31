import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  feature: string = 'recipes';
  handleFeatureSelected(feature: string) {
    this.feature = feature.toLowerCase().trim();
  }
}
