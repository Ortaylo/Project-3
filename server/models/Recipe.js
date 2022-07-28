const { Schema, model, Types } = require('mongoose');


const recipeSchema = new Schema(
  {
    recipeName: {
      type: String,
      required: true
    },
    ingredients: [],
    estimatedTime: {
      type: String
    },
    description: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
);

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;