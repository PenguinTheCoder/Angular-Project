import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.module";


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

 getRecipes() {
     return this.recipes.slice();
 }

}