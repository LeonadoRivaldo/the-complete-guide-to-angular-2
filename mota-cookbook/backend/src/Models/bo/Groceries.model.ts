
import  mongoose , { Document, Schema } from 'mongoose';
import {v4} from 'uuid';

type grocerieUnits = "kg" | "g" | "unity" | "dozen";
const types: grocerieUnits[] = [ "kg", "g", "unity", "dozen" ]; 

export interface IGrocerie{
  name: String;
  quantity: Number;
  price: Number;
  units: grocerieUnits;
  noStock?: Boolean;
  uuid?: String;
}

export interface IGrocerieSchema extends Document, IGrocerie {
  }


export const GrocerieSchema: Schema = new Schema({
    uuid: { type: String, set: (v:string) => v ? v : v4()  },
    name: {type: String, index: true },
    quantity: { type: Number, default: 0 },
    noStock: { type: Boolean },
    units:{ type: String, enum: types  },
    price: { type: Number }
});

GrocerieSchema.statics.createGrocerie = function(obj: IGrocerie){
    
}


export default mongoose.model<IGrocerieSchema>('Grocerie', GrocerieSchema);