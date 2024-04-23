import React from 'react';
import Recipe from './Receita';

function RecipeList({ recipes, onDelete, onEdit }) {
  return (
    <div>
      {recipes.map(recipe => (
        <Recipe key={recipe.id} recipe={recipe} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default RecipeList;
