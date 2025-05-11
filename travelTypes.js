async function loadTravelTypeContent() {
  const urlParams = new URLSearchParams(window.location.search);
  const travelTypeParam = urlParams.get('travelType');
  
  if (!travelTypeParam) {
    console.error('No travelType parameter found');
    return;
  }

  const travelType = decodeURIComponent(travelTypeParam);
  const contentDiv = document.getElementById('content');

  try {
    const response = await fetch('data/travelTypes.json');
    const travelTypes = await response.json();
    
    // Debug: Log the loaded data and search parameter
    console.log('Loaded travelTypes:', travelTypes);
    console.log('Searching for:', travelType.toLowerCase());

    const matched = travelTypes.find(item => 
      item.name.toLowerCase() === travelType.toLowerCase()
    );

    if (!matched) {
      console.warn('No match found for:', travelType);
      contentDiv.innerHTML = `<p class="not-found">Travel type "${travelType}" not found.</p>`;
      return;
    }

    console.log('Matched travel type:', matched);
    
    // Use simpler keys for debugging
    contentDiv.innerHTML = `
      <h1 class="travel-type-group">${matched.group}</h1>
      <section class="travel-type-box">
        <h2 class="travel-type-title">${matched.name}</h2>
        <p class="travel-type-description">${matched.description}</p>
        <section class="images-box">
          ${[1,2,3,4].map(i => 
            `<img class="image${i}" src="${matched.images[`image${i}`]}" alt="${matched.name}">`
          ).join('')}
        </section>
      </section>
    `;

    // Add data-t attributes after content is loaded
    document.querySelector('.travel-type-group').setAttribute('data-t', `travelTypes.${matched.id}.group`);
    document.querySelector('.travel-type-title').setAttribute('data-t', `travelTypes.${matched.id}.name`);
    document.querySelector('.travel-type-description').setAttribute('data-t', `travelTypes.${matched.id}.description`);
    
    translateAll();
  } catch (err) {
    console.error('Error loading travel type:', err);
    contentDiv.innerHTML = '<p class="not-found">Failed to load travel type data.</p>';
  }
}





  