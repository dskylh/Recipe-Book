import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
onClear() {
throw new Error('Method not implemented.');
}
onListDeleted() {
throw new Error('Method not implemented.');
}
  // ingredients = [];
  @ViewChild('nameInput', { static: false }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef;
  @Output() ingredientsAdded = new EventEmitter<Ingredient>();

  onListAdded() {
    const ingredientName = this.nameInput.nativeElement.value;
    const ingredientAmount = this.amountInput.nativeElement.value;
    this.ingredientsAdded.emit(new Ingredient(ingredientName, ingredientAmount));
  }
}
