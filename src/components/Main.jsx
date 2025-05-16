import React from "react";
function Main() {
    const[ingredients,setIngredients] = React.useState([]);
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event){
        event.preventDefault();
        const formEl = event.currentTarget;
        const formData = new FormData(formEl);
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        formEl.reset();
    }
    return(
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                type="text" 
                placeholder="e.g. oregano" 
                aria-label="Add ingredient"
                name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    );
}
export default Main;