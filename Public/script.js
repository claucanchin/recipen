window.onload = () => {

    const addIngredientButton = document.getElementById("add-ingredient")

    if (addIngredientButton) {

        addIngredientButton.addEventListener("click", (e) => {

            const ingredientCount = document.querySelectorAll(".ingredient-field").length

            const ingredientForm = document.getElementById("ingredients-form")

            const newDiv = document.createElement("div");

            const newInput = document.createElement("input");

            newInput.className = "ingredient-field";
            newInput.name = `ingredient-${ingredientCount+1}`;
            ingredientForm.appendChild(newDiv);
            newDiv.appendChild(newInput);

        });

    }

}