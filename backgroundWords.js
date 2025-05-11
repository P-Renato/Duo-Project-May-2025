const words = ["Hello", "Hallo", "Bonjour", "Ciao", "Hola", "Salam", "Namaste", "Bienvenido"];
const container = document.getElementById('background-words');

function createWord() {
  const span = document.createElement('span');
  span.classList.add('word');
  span.innerText = words[Math.floor(Math.random() * words.length)];

 
  span.style.top = Math.random() * 100 + 'vh';
  span.style.left = Math.random() * 100 + 'vw';

 
  const size = (Math.random() * 2 + 1).toFixed(2);
  span.style.fontSize = size + 'rem';
  span.style.opacity = (Math.random() * 0.7 + 0.1).toFixed(2);

 
  container.appendChild(span);

  
  const dx = (Math.random() - 0.5) * 800; // left/right
  const dy = (Math.random() - 0.5) * 800; // up/down
  const duration = Math.random() * 5000 + 5000;

  span.animate([
    { transform: 'translate(0, 0)' },
    { transform: `translate(${dx}px, ${dy}px)` }     // this si the movement range how far a word moves 
  ], {
    duration: duration,
    iterations: Infinity,
    direction: 'alternate',
    easing: 'ease-in-out'
  });
}

// Create 50 words
for (let i = 0; i < 50; i++) {
  createWord();
}