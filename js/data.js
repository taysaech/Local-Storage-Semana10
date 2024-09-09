
// Recuperar el dato almacenado en localStorage
const savedData = localStorage.getItem('Data');

// Mostrar los datos en el párrafo
const displayParagraph = document.getElementById('data');

displayParagraph.textContent = ` ${savedData}`;
