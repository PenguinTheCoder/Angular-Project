import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.module";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
 private recipes: Recipe[] = [
    new Recipe('Schnitzel','Tasty and awesome', 'https://familynutrition.co.uk/wp-content/uploads/2014/06/Recipe-icon.png',[
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
        
    ]),


    new Recipe('Big Burger','Nice and big', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',[
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
    ])
  ];

  constructor(private slService: ShoppingListService) {
      this.slService;
  }

 getRecipes() {
     return this.recipes.slice();
 }

 getRecipe(index: number) {
    return this.recipes[index]
 }

 addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
 }
}