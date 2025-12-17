async function get_fruits() {
  const url = "http://192.168.0.96:8000/fruits/";
  const errorBox = document.getElementById("error");

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Server error (${response.status})`);
    }

    const fruits = await response.json();
    errorBox.innerText = "";
    renderFruits(fruits);
  } catch (error) {
    errorBox.innerText = "Fruits could not be loaded. Please try again later.";
  }
}

function renderFruits(fruits) {
  const fruitList = document.getElementById("fruits_body");

  fruitList.innerHTML = "";

  for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];

    fruitList.innerHTML += fruitRowHTML(fruit);
  }
}

get_fruits();
