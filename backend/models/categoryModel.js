import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categorySchema = new Schema({  
  category: {
    type: String,
    required: true,
  }
},{
    timestamps: true
});

const Category = mongoose.model("Category", categorySchema);

export default Category;