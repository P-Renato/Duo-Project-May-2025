async function loadActivityContent() {
  const urlParams = new URLSearchParams(window.location.search);
  const activityName = decodeURIComponent(urlParams.get('activity'));
  const contentDiv = document.getElementById('content');

  try {
    const response = await fetch('data/activities.json');
    const activities = await response.json();
    
    const matched = Object.values(activities).flat().find(
      item => item.name.toLowerCase() === activityName.toLowerCase()
    );

    if (!matched) {
      contentDiv.innerHTML = `<p class="not-found">Activity "${activityName}" not found.</p>`;
      return;
    }

    document.title = matched.name;
    contentDiv.innerHTML = `
      <h1 class="activity-group" data-t="activities.${matched.id}.group">${matched.group}</h1>
      <section class="activity-box">
        <h2 class="activity-title" data-t="activities.${matched.id}.name">${matched.name}</h2>
        <p class="activity-description" data-t="activities.${matched.id}.description">${matched.description}</p>
        <section class="images-box">
          ${[1,2,3,4].map(i => 
            `<img class="image${i}" src="${matched.images[`image${i}`]}" alt="${matched.name}">`
          ).join('')}
        </section>
      </section>
    `;
    
    translateAll();
  } catch (err) {
    console.error('Error loading activity:', err);
    contentDiv.innerHTML = '<p class="not-found">Failed to load activity data.</p>';
  }
}

