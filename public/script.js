window.onload = () => {

    const addIngredientButton = document.getElementById("add-ingredient");
    const addInstructionButton = document.getElementById("add-instruction");
    const ingredientsEl = document.getElementById('ingredient-json');
    const instructionsEl = document.getElementById('instruction-json');
    const loginButton = document.getElementById("login-button");
    const logoutButton = document.getElementById("logout-button");

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
    };

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

    if (ingredientsEl) {
        let ingredientsString = ingredientsEl.dataset.ingredients;
        let ingredientsObj = JSON.parse(ingredientsString);
        let ingredientCount = 0;
        const ingredientForm = document.getElementById("ingredient-form");

        ingredientsObj.items.forEach((ig) => {
            let newDiv = document.createElement("div");
            let newInput = document.createElement("input");
            newInput.value = ig;
            newInput.className = "ingredient-field";
            newInput.name = `ingredient-${ingredientCount+1}`;
            ingredientForm.appendChild(newDiv);
            newDiv.appendChild(newInput);
            ingredientCount++;
        })
    };

    if (instructionsEl) {
        let instructionsString = instructionsEl.dataset.instructions;
        let instructionsObj = JSON.parse(instructionsString);
        let instructionCount = 0;
        const instructionForm = document.getElementById("instruction-form");

        instructionsObj.steps.forEach((step) => {
            let newDiv = document.createElement("div");
            let newInput = document.createElement("textarea");
            newInput.value = step;
            newInput.className = "instruction-field";
            newInput.name = `instruction-${instructionCount+1}`;
            newInput.cols = "40";
            newInput.rows = "2";
            instructionForm.appendChild(newDiv);
            newDiv.appendChild(newInput);
            instructionCount++;
        });
    };

    if (document.cookies) {
        loginButton.style.display = "none";
        logoutButton.style.display = "inline";
    } else {
        loginButton.style.display = "inline";
        logoutButton.style.display = "none";
    }
}