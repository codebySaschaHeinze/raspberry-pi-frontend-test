function fruitRowHTML(fruit) {
  return `
    <tr>
      <td>${fruit.name}</td>
      <td>${fruit.weight}g</td>
      <td>${fruit.color}</td>
    </tr>
  `;
}
