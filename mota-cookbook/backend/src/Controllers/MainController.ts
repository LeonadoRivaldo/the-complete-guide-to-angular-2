import { Request, Response } from 'express';
import IAppController from '../Models/Controller.model';
import Recipe, { IRecipe } from '../Models/bo/Recipe.model';
import  Grocerie , { IGrocerie } from '../Models/bo/Groceries.model';
import AppLogger from '../Utils/Logger';
const createRecipeMock = async ()=> {
    try {
        const recipe: IRecipe = new Recipe({ 
            "imagePath": "../../../assets/imgs/children-recipe-pic1-smaller.gif", 
            "ingredients": [], 
            "recipeSteps": [
            ], 
            "name": "Apple pie", 
            "uuid": "689dacba-b6b9-4534-b683-99bb02e7184e", 
            "description": "Nutrition Facts 1 piece has 414 calories, 16g fat (7g saturated fat),\n14mg cholesterol, 227mg sodium, 67g carbohydrate (38g sugars, 2g fiber), 3g protein." 
        });

        const groceries: IGrocerie[] = [
            { name: "brow sugar", quantity: 1, price: 3.59, units: "kg" },
            { name: "flour", quantity: 2, price: 0.59 , units: "kg"},
            { name: "ground cinnamon", quantity: 0.1, price: 0.59 , units: "kg"},
            { name: "ground ginger", quantity: 0.1, price: 0.59 , units: "kg"},
            { name: "ground nutmeg", quantity: 0.1, price: 0.59 , units: "kg"},
            { name: "apple", quantity: 3, price: 1.29, units: "kg"},
            { name: "lemon", quantity: 1, price: 0.79, units: "kg"},
            { name: "Pastry", quantity:3, price: 0.89, units: "unity" },
            { name: "butter", quantity:1, price: 1.39, units: "unity" },
            { name: "eggs", quantity:12, price: 1.29, units: "dozen" }
        ]
        
        const ingredients = [
            { "description": "1/2 cup packed brow sugar", "uuid": "d61ac81a-1f64-4b9a-9d64-d83d96e38197" },
            { "description": "3 tablespoons all-purpose flour", "uuid": "c48bf192-b0ea-4152-9b7f-ab6677c6de2d" },
            { "description": "1 teaspoon ground cinnamon",  "uuid": "6e65ce4f-f4b6-4ebf-a1a3-bf3f086adbe0" },
            { "description": "1/4 teaspoon ground ginger", "uuid": "aa6daf8a-a591-4016-8efc-92aba6367252" },
            { "description": "1/4 teaspoon ground nutmeg", "uuid": "552af89b-4d36-4839-8de7-20fbab7b46e2" },
            { "description": "6 to 7 cups thinly sliced peeled tart apples",  "uuid": "4de651df-9c5f-43bb-9648-aaee07819875" },
            { "description": "1 tablespoon lemon juice",  "uuid": "2c06a821-ad0e-4e3c-95a8-7bcb84906c7d" },
            { "description": "Pastry for double-crust pie (9 inches)",  "uuid": "f75667fe-863f-4f61-8f50-377da1454bfe" },
            { "description": "1 tablespoon butter",  "uuid": "86942945-feff-41cf-9eec-029390db7053" },
            { "description": "1 large egg white",  "uuid": "5e47f873-c9c2-47f7-835f-34adda7e9b43" }
        ];
        
        const steps = [
            { "description": "In a small bowl, combine the sugars, flour and spices; set aside. In a large bowl, toss apples with lemon juice. Add sugar mixture; toss to coat.", "order": 0, "uuid": "561049f5-85e4-40cb-801c-1834ed5170a4" },
            { "description": "Line a 9-in. pie plate with bottom crust; trim even with edge. Fill with apple mixture; dot with butter. Roll remaining crust to fit top of pie; place over filling. Trim, seal and flute edges. Cut slits in crust.", "order": 1, "uuid": "55591d01-0ec2-4c50-82cf-ed390b3fc764" },
            { "description": "Beat egg white until foamy; brush over crust. Sprinkle with sugar. Cover edges loosely with foil.", "order": 2, "uuid": "b75a141e-a236-4d30-85e0-22e3e419ff10" }, 
            { "description": "Bake at 375° for 25 minutes. Remove foil and bake until crust is golden brown and filling is bubbly, 20-25 minutes longer. Cool on a wire rack.", "order": 3, "uuid": "bb17fe97-bff0-4875-b57e-f9ee5615f0eb" }
        ]
    } catch (error) {
        console.log(error);
    }

    //recipe.ingredients = ingredients;
        
        //Recipe.create(recipe).then(r=> console.log( 'done!' ))


}
export default class MainController implements IAppController{
    welcome(req: Request, res:Response): void{
        createRecipeMock();
        res.json({ welcomeMessage: `😎 Welcome! to this backend 😎 ` });
    }
}





