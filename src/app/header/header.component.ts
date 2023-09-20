import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  onSelect($event: any) {
    console.log($event.target.innerText);
    this.featureSelected.emit($event.target.innerText);
  }
  

}
