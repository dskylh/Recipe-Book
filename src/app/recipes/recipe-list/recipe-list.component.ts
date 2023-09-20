import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'test',
      'a simple test recipe',
      'http://images.media-allrecipes.com/userphotos/960x960/6211920.jpg'
    ),
    new Recipe(
      'test2',
      'another test recipe',
      'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_2560%2Cc_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'
    ),
  ];

  @Output() currentRecipe = new EventEmitter<Recipe>();
  constructor() {}
  onRecipeItemSelected($event: Recipe) {
    this.currentRecipe.emit($event) ;
  }
}
