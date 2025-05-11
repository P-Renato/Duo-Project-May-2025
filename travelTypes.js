async function loadActivity() {
    const urlParams = new URLSearchParams(window.location.search);
    const activityName = urlParams.get('activity');

    const contentDiv = document.getElementById('content');

    if (!activityName) {
      contentDiv.innerHTML = '<p class="not-found">No activity specified.</p>';
      return;
    }

    try {
      const response = await fetch('data/travelTypes.json'); // Make sure this is in the same folder
      const data = await response.json();

      console.log(data)

      
      // Flatten the data into a single array of activities
      const allActivities = Object.values(data).flat();

      const matched = allActivities.find(item => item.name.toLowerCase() === activityName.toLowerCase());

      if (!matched) {
        contentDiv.innerHTML = `<p class="not-found">Activity "${activityName}" not found.</p>`;
        return;
      }

      document.title = matched.name;
      contentDiv.innerHTML = `
<h1 class="activity-group" data-t="${matched.group}.group">${i18next.t(matched.group)}</h1>
  <section class="activity-box">
    <h2 class="activity-title" data-t="${matched.name}.name">${i18next.t(matched.name)}</h2>
    <p class="activity-description" data-t="${matched.description}.description">${i18next.t(matched.description)}</p>
    <section class="images-box">
      <img class="image1" src="${matched.images.image1}">
      <img class="image2" src="${matched.images.image2}">
      <img class="image3" src="${matched.images.image3}">
      <img class="image4" src="${matched.images.image4}">
    </section>
  </section>

      `;
    } catch (err) {
      console.error('Error fetching activities.json:', err);
      contentDiv.innerHTML = '<p class="not-found">Failed to load activity data.</p>';
    }
  }

  loadActivity();




  

/**
       <h1 class="activity-group" data-t="">${matched.group}</h1>
      <section class="activity-box">
        <h2 class="activity-title" data-t="">${matched.name}</h2>
        <p class="activity-description" data-t="">${matched.description}</p>
        <section class="images-box">
            <img class="image1" src="${matched.images.image1}">
            <img class="image2" src="${matched.images.image2}">
            <img class="image3" src="${matched.images.image3}">
            <img class="image4" src="${matched.images.image4}">
        </section>
      </section>
 */