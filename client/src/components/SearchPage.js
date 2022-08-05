import React, {useState} from 'react'
import { GET_RECIPES } from '../utils/queries'
import { useQuery,useMutation } from '@apollo/client'
import { ADD_RECIPE } from '../utils/mutations'
// "ingredients":["testINgedeint1","ingredient2"],
//     "estimatedTime": "testEstimateTime2",
//     "description": "testDescription2
export default  function SearchPage(){
    const [recipeFormData,setRecipeFormData] = useState({recipeName: '', ingredients: [],estimatedTime:'',description:''})
    const [ingredientsText,setIngredientsText] = useState('')
    const [addRecipe,{newRecipeData}] = useMutation(ADD_RECIPE)

    const {data,loading,error} = useQuery(GET_RECIPES)
    const handleChange = (e) => {
        e.preventDefault();
        if(e.target.name === 'ingredientsText'){
            setIngredientsText(e.target.value)
            console.log('ingre',ingredientsText)
        }
        const {name,value} = e.target;
        setRecipeFormData({...recipeFormData,[name] : value})
        console.log(recipeFormData)
      }
      const addIngredient = (event) => {
        event.preventDefault();
        var ingredients = recipeFormData.ingredients;
        ingredients.push(ingredientsText);
        setRecipeFormData({ingredients: ingredients})
      }
      const handleFormSubmit = (event) => {
        event.preventDefault();
        addRecipe({variables:{
            input:{
                recipeName: recipeFormData.recipeName,
                 ingredients: recipeFormData.ingredients,
                 estimatedTime:recipeFormData.estimatedTime,
                 description:recipeFormData.description
            }}})
      }
    if(loading){
        
        return (
            <div>
                LOADING...
            </div>
        )
    } else if(!loading){
        console.log(data)
        console.log(data.recipes)
        console.log(data[0])
    }
    

    return(
        <div>
            <h1>Hi</h1>
            <button>TEST</button>
            {/* {!loading && data.map(recipe => (
                <div>
                    {recipe.label}
                </div>
            )

            )} */}
            { !loading && (
            <form className="recipeForm">
            Name:<input name="recipeName" defaultValue={recipeFormData.recipeName} onBlur={handleChange}></input>
            <div>
            Ingredients:<input name="ingredientsText" defaultValue={ingredientsText} onBlur={handleChange}></input>
            <button onClick={addIngredient} className='ingredientBtn'>Add Ingredient</button>

            </div>
            description:<textarea name="description" className="description" defaultValue={recipeFormData.description} onBlur={handleChange}></textarea>
            estimatedTime:<input name="estimatedTime" defaultValue={recipeFormData.estimatedTime} onBlur={handleChange}></input>
            
                    <button onClick={handleFormSubmit} className='recipeBtn'>Add Recipe</button>
            </form>
)}
        </div>
    )
}