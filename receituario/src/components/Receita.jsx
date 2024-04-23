import React from 'react';

function Recipe({ recipe, onDelete, onEdit }) {
  return (
    <div>
      <h3>{recipe.nome}</h3>
      <ul>
        {recipe.ingredientes.map(ing => (
          <li key={ing.nome}>{ing.nome}: {ing.quantidade}{ing.unidade}</li>
        ))}
      </ul>
      <p>{recipe.modoDePreparo}</p>
      <button onClick={() => onDelete(recipe.id)}>Deletar</button>
      <button onClick={() => onEdit(recipe)}>Editar</button>
    </div>
  );
}

export default Recipe;
