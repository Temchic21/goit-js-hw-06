const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments']


const nav = document.querySelector('#ingredients');


const elements = ingredients.map(ingredient => {
  const navItemEl = document.createElement('li')
	navItemEl.className = 'item'
	navItemEl.textContent = ingredient


  return navItemEl
});

console.log(elements)

nav.append(...elements);







