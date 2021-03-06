window.onload = () => {
  const addIngredientButton = document.getElementById('add-ingredient');
  const addInstructionButton = document.getElementById('add-instruction');
  const ingredientsEl = document.getElementById('ingredient-json');
  const instructionsEl = document.getElementById('instruction-json');
  const loginButton = document.getElementById('login-button');
  const logoutButton = document.getElementById('logout-button');

  if (addIngredientButton) {
    addIngredientButton.addEventListener('click', () => {
      const ingredientCount = document.querySelectorAll('.ingredient-field').length;

      const ingredientForm = document.getElementById('ingredient-form');

      const newDiv = document.createElement('div');

      const newInput = document.createElement('input');

      newInput.className = 'ingredient-field';
      newInput.name = `ingredient-${ingredientCount + 1}`;
      ingredientForm.appendChild(newDiv);
      newDiv.appendChild(newInput);
    });
  }

  if (addInstructionButton) {
    addInstructionButton.addEventListener('click', () => {
      const instructionCount = document.querySelectorAll('.instruction-field').length;

      const instructionForm = document.getElementById('instruction-form');

      const newDiv = document.createElement('div');

      const newInput = document.createElement('textarea');

      newInput.className = 'instruction-field';
      newInput.name = `instruction-${instructionCount + 1}`;
      newInput.cols = '40';
      newInput.rows = '2';
      newInput.placeholder = `Step ${instructionCount + 1}`;
      instructionForm.appendChild(newDiv);
      newDiv.appendChild(newInput);
    });
  }

  if (ingredientsEl) {
    const ingredientsString = ingredientsEl.dataset.ingredients;
    const ingredientsObj = JSON.parse(ingredientsString);
    let ingredientCount = 0;
    const ingredientForm = document.getElementById('ingredient-form');

    ingredientsObj.items.forEach((ig) => {
      const newDiv = document.createElement('div');
      const newInput = document.createElement('input');
      newInput.value = ig;
      newInput.className = 'ingredient-field';
      newInput.name = `ingredient-${ingredientCount + 1}`;
      ingredientForm.appendChild(newDiv);
      newDiv.appendChild(newInput);
      ingredientCount += 1;
    });
  }

  if (instructionsEl) {
    const instructionsString = instructionsEl.dataset.instructions;
    const instructionsObj = JSON.parse(instructionsString);
    let instructionCount = 0;
    const instructionForm = document.getElementById('instruction-form');

    instructionsObj.steps.forEach((step) => {
      const newDiv = document.createElement('div');
      const newInput = document.createElement('textarea');
      newInput.value = step;
      newInput.className = 'instruction-field';
      newInput.name = `instruction-${instructionCount + 1}`;
      newInput.cols = '40';
      newInput.rows = '2';
      instructionForm.appendChild(newDiv);
      newDiv.appendChild(newInput);
      instructionCount += 1;
    });
  }

  if (document.cookie) {
    loginButton.style.display = 'none';
    logoutButton.style.display = 'inline';
  } else {
    loginButton.style.display = 'inline';
    logoutButton.style.display = 'none';
  }
};
