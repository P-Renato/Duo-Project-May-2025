async function loadTravelTypeContent() {
  const urlParams = new URLSearchParams(window.location.search);
  const travelType = decodeURIComponent(urlParams.get('travelType'));
  const contentDiv = document.getElementById('content');

  try {
    const response = await fetch('data/travelTypes.json');
    const travelTypes = await response.json();
    
    // Find matching travel type (case-insensitive)
    const matched = travelTypes.find(item => 
      item.name.toLowerCase() === travelType.toLowerCase()
    );

    if (!matched) {
      contentDiv.innerHTML = `<p class="not-found">Travel type "${travelType}" not found.</p>`;
      return;
    }

    // Set title and generate identical HTML structure as activity.js
    document.title = matched.name;
    contentDiv.innerHTML = `
      <h1 class="activity-group" data-t="travelTypes.${matched.id}.group">${matched.group}</h1>
      <section class="activity-box">
        <h2 class="activity-title" data-t="travelTypes.${matched.id}.name">${matched.name}</h2>
        <p class="activity-description" data-t="travelTypes.${matched.id}.description">${matched.description}</p>
        <section class="images-box">
          ${[1,2,3,4].map(i => 
            `<img class="image${i}" src="${matched.images[`image${i}`]}" alt="${matched.name}">`
          ).join('')}
        </section>
      </section>
    `;
    
    // Apply translations
    translateAll();
  } catch (err) {
    console.error('Error loading travel type:', err);
    contentDiv.innerHTML = '<p class="not-found">Failed to load travel type data.</p>';
  }
}

// Initialize only if URL has ?travelType=
if (new URLSearchParams(window.location.search).has('travelType')) {
  loadTravelTypeContent();
}