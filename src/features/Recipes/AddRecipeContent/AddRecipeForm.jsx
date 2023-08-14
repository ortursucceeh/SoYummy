import RecipeDescriptionFields from './RecipeDescriptionFields/RecipeDescriptionFields';
import styles from './AddRecipeForm.module.scss';
import RecipeIngredientsFields from './RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationField from './RecipePreparationField/RecipePreparationField';
import Button from '../../../ui/Button/Button';
import { useState } from 'react';
import { randomId } from '../../../utils/recipes';

function AddRecipeForm() {
  const [ingredients, setIngredients] = useState([
    { _id: randomId(), id: null, title: '', measure: null },
    { _id: randomId(), id: null, title: '', measure: null },
    { _id: randomId(), id: null, title: '', measure: null },
  ]);

  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Breakfast');
  const [description, setDescription] = useState('');
  const [preparation, setPreparation] = useState('');
  const [cookingTime, setCookingTime] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    // const formData = new FormData();
    const data = {
      title,
      category,
      description,
      instructions: preparation,
      time: cookingTime,
      ingredients: ingredients.map(ing => ({ id: ing.id, measure: ing.measure })),
      fullImage: selectedFile,
    };
    console.log('data :>> ', data);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <RecipeDescriptionFields
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        categoryValue={category}
        setCategory={setCategory}
        cookingTime={cookingTime}
        setCookingTime={setCookingTime}
      />
      <RecipeIngredientsFields ingredients={ingredients} setIngredients={setIngredients} />
      <RecipePreparationField preparation={preparation} setPreparation={setPreparation} />
      <Button shape="curv" color="dark" type="submit" className={styles.addBtn}>
        Add
      </Button>
    </form>
  );
}

export default AddRecipeForm;
