import { Recipe, RecipeStep } from 'src/app/bo/models/recipe.model';
import RecipeIngredient from 'src/app/bo/models/recipe-ingredient.model';


const ingredients = [
  new RecipeIngredient('1/2 cup packed brown sugar', 0.5),
  new RecipeIngredient('3 tablespoons all-purpose flour', 3),
  new RecipeIngredient('1 teaspoon ground cinnamon', 1),
  new RecipeIngredient('1/4 teaspoon ground ginger', 0.25),
  new RecipeIngredient('1/4 teaspoon ground nutmeg', 0.25),
  new RecipeIngredient('6 to 7 cups thinly sliced peeled tart apples', 7),
  new RecipeIngredient('1 tablespoon lemon juice', 1),
  new RecipeIngredient('Pastry for double-crust pie (9 inches)', 1),
  new RecipeIngredient('1 tablespoon butter', 1),
  new RecipeIngredient('1 large egg white', 1)
];

const step1 = 'In a small bowl, combine the sugars, flour and spices; set aside. In a large bowl, toss apples with lemon juice. Add sugar mixture; toss to coat.';
const step2 = 'Line a 9-in. pie plate with bottom crust; trim even with edge. Fill with apple mixture; dot with butter. Roll remaining crust to fit top of pie; place over filling. Trim, seal and flute edges. Cut slits in crust.';
const step3 = 'Beat egg white until foamy; brush over crust. Sprinkle with sugar. Cover edges loosely with foil.';
const step4 = 'Bake at 375° for 25 minutes. Remove foil and bake until crust is golden brown and filling is bubbly, 20-25 minutes longer. Cool on a wire rack.';

const recipeSteps: RecipeStep[] = [
  new RecipeStep(step1, 0),
  new RecipeStep(step2, 1),
  new RecipeStep(step3, 2),
  new RecipeStep(step4, 3),
];


const applePie: Recipe = new Recipe('Apple pie', ingredients, recipeSteps);
applePie.description = `Nutrition Facts 1 piece has 414 calories, 16g fat (7g saturated fat),
14mg cholesterol, 227mg sodium, 67g carbohydrate (38g sugars, 2g fiber), 3g protein.`;

export const RECIPES: Recipe[] = [ applePie ];

