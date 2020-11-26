var favouriteRecipe = {
    recipeTitle: 'Yorkshire Puds',
    servings: 4,
    ingredients: ['2 eggs, ', 'half cup of milk, ', 'half cup of plain flour, ', 'salt, ', 'pepper'],
    directions: 'Add all to a bowl, whisk and pour in a hot oiled tin for 20 mins at 220 degrees'
}


    //document.write( favouriteRecipe.recipeTitle);
   // document.write( favouriteRecipe.servings);
   // document.write( favouriteRecipe.ingredients);
    //document.write( favouriteRecipe.directions);


var ingredients = favouriteRecipe.ingredients;
var recipeTitle = favouriteRecipe.recipeTitle;

for(var index = 0; index < ingredients.length; index ++ ){
    console.log(ingredients[index] );
    }

