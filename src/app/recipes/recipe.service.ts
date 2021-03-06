import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Schnitzel',
            'This is simply a test',
            'http://www.wienerwald.at/wp-content/uploads/2016/01/schnitzel_pommes.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('Burger',
            'This is simply another a test',
            'https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto,fl_lossy/wp-cms/uploads/2017/06/i-1-sonic-burger.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) {
    }

    setRecipes(recipes: Recipe[]) {
      this.recipes = recipes.slice();
      this.recipesChanged.next(this.recipes.slice())
    }

    getRecipes() {
        return this.recipes.slice(); // return new copy of array
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    getId(recipe: Recipe) {
        return this.recipes.indexOf(recipe);
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe): number {
      const index = this.recipes.push(recipe) - 1;
      this.recipesChanged.next(this.recipes.slice());
      return index;
    }

    updateRecipe(index: number, recipe: Recipe) {
      this.recipes[index] = recipe;
      this.recipesChanged.next(this.recipes.slice())
    }

    deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice())
    }
}
