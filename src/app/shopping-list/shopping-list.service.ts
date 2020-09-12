import { EventEmitter } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredientList: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10),
    ];

    getIngredientList() {
        return this.ingredientList.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredientList.push(ingredient);
        this.ingredientsChanged.emit(this.ingredientList.slice());
    }

    addIngredientsFromRecipe(ingredients : Ingredient[]) {
        this.ingredientList.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredientList.slice());
    }

}