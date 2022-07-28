// import React, { useContext } from "react";
// import { useQuery } from '@apollo/client';
// const {GET_USER} = require('../utils/queries')
// export default function UserProfile({username}) {

//    const {data,loading,error} =useQuery(GET_USER,{variables: {username: username}})
  
//    if(!loading){
//     console.log('Profile',data)
//    }
//       return (
//         <div>
//             <h1>User Profile</h1>
//             <h2>Username: {username}</h2>
//             <h2>email: {email}</h2>
//             {loading && (
//                 <h3>LOADING...</h3>
//             )}
//             <aside className="Recipes">
//             {!loading && recipes && 
//                 recipes.map(recipe=>(
//                 <div className="Recipe">
//                 <h4 className="recipeLabel">{recipe.label}</h4>
//                 <h3 className="recipeDescription">{recipe.description}</h3> 
//                 </div>
//             ))}
//             </aside>
//         </div>
//     )
    
  
   
// }