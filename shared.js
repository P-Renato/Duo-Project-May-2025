// Shared translation function
function translateAll() {
    document.querySelectorAll('[data-t]').forEach(el => {
      const key = el.getAttribute('data-t');
      try {
        const translation = i18next.t(key);
        el.textContent = translation !== key ? translation : el.textContent;
      } catch (e) {
        console.warn(`Translation failed for ${key}:`, e);
      }
    });
  }
  
  // Shared content loader
  async function loadContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const contentDiv = document.getElementById('content');
    
    // Determine content type
    if (urlParams.has('activity')) {
      await loadActivityContent();
    } else if (urlParams.has('travelType')) {
      await loadTravelTypeContent();
    } else {
      contentDiv.innerHTML = '<p class="not-found">Please specify an activity or travel type</p>';
    }
  }