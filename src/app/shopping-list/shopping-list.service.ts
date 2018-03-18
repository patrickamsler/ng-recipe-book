import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

    addIngredient(ingredient: Ingredient) {
        console.log('add' + ingredient);
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
      return this.ingredients[index];
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
      this.ingredients[index] = newIngredient;
      this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
      this.ingredients.splice(index, 1);
      this.ingredientChanged.next(this.ingredients.slice());
    }
}
