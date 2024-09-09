
 // Capturamos el botón y el input
 const button = document.getElementById('buttonText');
 const input = document.getElementById('inputText');

 // Agregamos el evento para guardar en localStorage
 button.addEventListener('click', function() {
     const userInput = input.value; // Obtener el valor del input

// Guardar el valor en el Local Storage
localStorage.setItem('Data', userInput);

 });





