 const people = document.querySelectorAll('.reviwPeople');

people.forEach(person => {
  person.addEventListener('mouseenter', () => {
    const imgUrl = person.dataset.image;

    document.querySelectorAll('.reviwPeople').forEach(box => {
      const pos = box.dataset.pos;

      // Set background image
      box.style.backgroundImage = `url(${imgUrl})`;

      // Set correct slice position
      switch (pos) {
        case 'top-left':
          box.style.backgroundPosition = '0% 0%';
          break;
        case 'top-right':
          box.style.backgroundPosition = '100% 0%';
          break;
        case 'bottom-left':
          box.style.backgroundPosition = '0% 100%';
          break;
        case 'bottom-right':
          box.style.backgroundPosition = '100% 100%';
          break;
        default:
          box.style.backgroundPosition = 'center';
      }
    });
  });

  person.addEventListener('mouseleave', () => {
    // Remove background when hover ends
    document.querySelectorAll('.reviwPeople').forEach(box => {
      box.style.backgroundImage = '';
      box.style.backgroundPosition = 'center';
    });
  });
}); 

/* const people = document.querySelectorAll('.reviwPeople');

people.forEach(person => {
  person.addEventListener('mouseenter', () => {
    const imgUrl = person.dataset.image;

    // Apply background image to all 4 boxes
    document.querySelectorAll('.reviwPeople').forEach(box => {
      box.style.backgroundImage = `url(${imgUrl})`;
    });
  });

  person.addEventListener('mouseleave', () => {
    document.querySelectorAll('.reviwPeople').forEach(box => {
      box.style.backgroundImage = '';
    });
  });
}); */