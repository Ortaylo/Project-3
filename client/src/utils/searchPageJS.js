const test = async () => {
    
    const hits = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=cookie&app_id=0637c2e7&app_key=d01b1197825271e3271e1c4e7c26646f&mealType=Snack&dishType=Biscuits%20and%20cookies&imageSize=SMALL&random=true')
    .then(response => response.json())
    .then(function(data) { 
        
        // recipeImg.setAttribute('src',data.hits[0].recipe.image);
        // recipeLink.setAttribute('href',data.hits[0].recipe.shareAs);
        // recipeName.textContent = data.hits[0].recipe.label;
        // console.log(data.hits[0].recipe.shareAs);
        // localStorage.setItem('recipe-link',data.hits[0].recipe.url);
        // localStorage.setItem('recipe-name',data.hits[0].recipe.label);
        // localStorage.setItem('recipe-img',data.hits[0].recipe.image);
        
        
        return data.hits
    }).catch(err => console.error(err));
    var recipeDetails = [];
    for(var i = 0;i<19;i++){
        recipeDetails.push({img:hits[i].recipe.image,link:hits[i].recipe.shareAs,label:hits[i].recipe.label})
    }
    console.log('PRO',hits)
    console.log(hits[0])
    return hits;
}
module.exports =testFunc;