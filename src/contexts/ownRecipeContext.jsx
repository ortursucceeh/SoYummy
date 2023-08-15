import { createContext, useContext, useState } from 'react';
import { initialOwnRecipe } from '../utils/recipes';

export const OwnRecipeContext = createContext(null);

export default function OwnRecipeContextProvider({ children }) {
  const [recipe, setRecipe] = useState(initialOwnRecipe);

  return (
    <OwnRecipeContext.Provider value={{ recipe, setRecipe }}>{children}</OwnRecipeContext.Provider>
  );
}

export function useOwnRecipeContext() {
  const context = useContext(OwnRecipeContext);

  if (!context)
    throw new Error('useOwnRecipeContext must be used within a OwnRecipeContextProvider');

  return context;
}
