import React, {useState} from 'react'

export default  function SearchPage(){
    const [Auth,setAuth] =useState(false)
    const [recipeData,setRecipeData] = useState([{img: '', link: '', label: ''}])

    const test = async () => {
        const hits = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=cookie&app_id=0637c2e7&app_key=d01b1197825271e3271e1c4e7c26646f&mealType=Snack&dishType=Biscuits%20and%20cookies&imageSize=SMALL&random=true')
        .then(response => response.json())
        .then(function(data) { 
            console.log(data);
            console.log(data.hits[0].recipe);
            // recipeImg.setAttribute('src',data.hits[0].recipe.image);
            // recipeLink.setAttribute('href',data.hits[0].recipe.shareAs);
            // recipeName.textContent = data.hits[0].recipe.label;
            // console.log(data.hits[0].recipe.shareAs);
            // localStorage.setItem('recipe-link',data.hits[0].recipe.url);
            // localStorage.setItem('recipe-name',data.hits[0].recipe.label);
            // localStorage.setItem('recipe-img',data.hits[0].recipe.image);
            
            
            return data.hits
        }).catch(err => console.error(err));
        for(var i = 0;i<hits;i++){
            setRecipeData(recipeData.push({img:hits[i].recipe.image,link:hits[i].recipe.shareAs,label:hits[i].recipe.label}))
        }
        setAuth(true)
        console.log('PRO',hits)
        return hits;
    }
    const recipes = test();
	console.log(recipes)
    console.log('AUTH',Auth)
    const test2 = () => {
        console.log(recipeData)
    }
    return(
        <div>
            <h1>Hi</h1>
            <button onClick={test2}>TEST</button>
            {recipeData[20] && recipeData.map(recipe => (
                <div>
                    {recipe.label}
                </div>
            )

            )}
        </div>
    )
}