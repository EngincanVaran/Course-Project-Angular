import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[] = [
    new Recipe("A Test Recipe", "This is a test recipe", "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"),
    new Recipe("A Test Recipe 2", "This is a test recipe 2", "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
