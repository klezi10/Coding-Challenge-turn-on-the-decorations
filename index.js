const house = document.getElementById('house');
const decorator = document.getElementById('decorator');
decorator.addEventListener('click', deckTheHalls);

function deckTheHalls() {
  if (this.checked) {
    house.innerHTML = `
    🏡🎄🎄🎅🎅`;
  } else {
    house.innerHTML = `🏡`;
  }
}
// Task:
// Write a function to add decorations (e.g. ☃️, 🎄, etc) next to the house when the switch is toggled.
