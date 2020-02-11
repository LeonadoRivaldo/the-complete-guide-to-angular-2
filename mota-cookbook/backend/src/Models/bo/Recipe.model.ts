
import mongoose, { Schema, Document } from 'mongoose';

import { IGrocerieSchema } from './Groceries.model';
import { v4 } from 'uuid';

interface IRecipeExtra{
    uuid: string;
    description: string;
}

export interface IRecipeStep extends IRecipeExtra {
    order: number;
}

export interface IRecipeIngretient extends IRecipeExtra{
    grocerie: IGrocerieSchema['_id'];
}


export interface IRecipe{
    uuid: string;
    name: string;
    description: string;
    recipeSteps: IRecipeStep[];
    ingredients: IRecipeIngretient[];
    haveAllIngredients: boolean;
    imagePath:string;
}

export interface IRecipeSchema extends Document, IRecipe {
}

const RecipeIngretientSchema: Schema = new Schema({
    uuid: { type: String, set: (v:string) => v ? v : v4()    },
    description: { type: String, required: true, index: true },
    grocerie: { type: Schema.Types.ObjectId, required: true, ref:"Grocerie" }
});

const RecipeStepSchema: Schema = new Schema({
    uuid: { type: String, set: (v:string) => v ? v : v4()    },
    description: { type: String, required: true, index: true },
    order:{ type: Number }
});

const RecipeSchema: Schema =  new Schema({
    uuid: { type: String, unique: true, index: true, set: (v:string) => v ? v : v4()   },
    name: { type: String, required: true },
    description: { type:String },
    recipeSteps:[RecipeStepSchema],
    ingredients: [RecipeIngretientSchema],
    haveAllIngredients: { type: Boolean }
})




//finish
//create default uuid setter for all schemas;


export default mongoose.model<IRecipeSchema>('Recipe', RecipeSchema);