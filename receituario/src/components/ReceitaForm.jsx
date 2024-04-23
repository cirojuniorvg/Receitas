// src/components/RecipeForm.jsx
import React, { useState, useEffect } from 'react';

function RecipeForm({ onSave, recipeEdit }) {
  const [recipe, setRecipe] = useState({ id: null, nome: '', ingredientes: [], modoDePreparo: '' });

  useEffect(() => {
    if (recipeEdit) {
      setRecipe(recipeEdit);
    }
  }, [recipeEdit]);

  const handleInputChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(recipe);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="nome"
        value={recipe.nome}
        onChange={handleInputChange}
        placeholder="Nome da receita"
      />
      <textarea
        name="modoDePreparo"
        value={recipe.modoDePreparo}
        onChange={handleInputChange}
        placeholder="Modo de preparo"
      />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default RecipeForm;
