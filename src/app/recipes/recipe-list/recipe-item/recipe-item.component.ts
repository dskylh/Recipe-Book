import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input("recipeItem") recipeItem: Recipe;
  @Output() recipeClicked= new EventEmitter<Recipe>();

  showRecipeDetail() {
    this.recipeClicked.emit(this.recipeItem);
  }
}
