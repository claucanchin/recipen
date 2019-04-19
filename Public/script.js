window.onload = () => {

    const addIngredientButton = document.getElementById("add-ingredient");
    const addInstructionButton = document.getElementById("add-instruction");

    if (addIngredientButton) {

        addIngredientButton.addEventListener("click", (e) => {

            const ingredientCount = document.querySelectorAll(".ingredient-field").length;

            const ingredientForm = document.getElementById("ingredient-form");

            const newDiv = document.createElement("div");

            const newInput = document.createElement("input");

            newInput.className = "ingredient-field";
            newInput.name = `ingredient-${ingredientCount+1}`;
            ingredientForm.appendChild(newDiv);
            newDiv.appendChild(newInput);

        });

    }

    if (addInstructionButton) {

        addInstructionButton.addEventListener("click", (e) => {

            const instructionCount = document.querySelectorAll(".instruction-field").length;

            const instructionForm = document.getElementById("instruction-form");

            const newDiv = document.createElement("div");

            const newInput = document.createElement("textarea");

            newInput.className = "instruction-field";
            newInput.name = `instruction-${instructionCount+1}`;
            newInput.cols = "40";
            newInput.rows = "2";
            newInput.placeholder = `Step ${instructionCount+1}`;
            instructionForm.appendChild(newDiv);
            newDiv.appendChild(newInput);

        });

    };

}