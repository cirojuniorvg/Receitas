import React, { useState } from 'react';
import ReceitaList from './components/ReceitaList';
import ReceitaForm from './components/ReceitaForm';
import BarraPesquisa from './components/BarraPesquisa';

function App() {
  const [recipes, setRecipes] = useState([]); // Iniciar com array vazio ou dados iniciais
  const [searchTerm, setSearchTerm] = useState('');

  const addOrUpdateRecipe = (recipe) => {
    const existing = recipes.findIndex(r => r.id === recipe.id);
    if (existing > -1) {
      // Atualiza receita existente
      const updatedRecipes = [...recipes];
      updatedRecipes[existing] = recipe;
      setRecipes(updatedRecipes);
    } else {
      // Adiciona nova receita
      setRecipes([...recipes, { ...recipe, id: recipes.length + 1 }]);
    }
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  const filteredRecipes = searchTerm
    ? recipes.filter(recipe => recipe.nome.toLowerCase().includes(searchTerm.toLowerCase()))
    : recipes;

  return (
    <div>
      <BarraPesquisa onSearchChange={setSearchTerm} />
      <ReceitaForm onSave={addOrUpdateRecipe} />
      <ReceitaList recipes={filteredRecipes} onDelete={deleteRecipe} onEdit={addOrUpdateRecipe} />
    </div>
  );
}

export default App;
