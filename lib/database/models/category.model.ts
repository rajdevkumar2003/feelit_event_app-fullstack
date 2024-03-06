import { Model, Schema, models } from "mongoose";

export interface ICategory extends Document{
    _id:string;
    name:string;
}

const CategorySchema = new Schema({
    name: {type:String, required:true, unique:true},
});

const Category = models.Category || new Model('Category',CategorySchema );

export default Category;