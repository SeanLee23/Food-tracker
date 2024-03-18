function addFood() {
    const foodInput = document.getElementById('foodInput');
    const foodItem = foodInput.value.trim();
  
    if (foodItem !== '') {
      const foodList = document.getElementById('foodList');
      const listItem = document.createElement('li');
      listItem.textContent = foodItem;
      foodList.appendChild(listItem);
      foodInput.value = '';
    } else {
      alert('Please enter a food item.');
    }
  }
  