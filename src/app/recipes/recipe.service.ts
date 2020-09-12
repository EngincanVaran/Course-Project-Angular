import { EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model"

export class RecipeService {
    private recipeList: Recipe[] = [
        new Recipe("A Test Recipe", "This is a test recipe", "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"),
        new Recipe("A Test Recipe 2", "This is a test recipe 2", "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"),
    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipees() {
        return this.recipeList.slice(); // return a new array as a copy of the recipeList
    }

}