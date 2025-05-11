
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("search-modal");
  const openBtn = document.querySelector(".open-search");
  const closeBtn = document.querySelector(".close");

  openBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
  });

  closeBtn?.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});



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

async function fetchTranslations() {
  try {
    const [enActivitiesRes, enNavRes, deActivitiesRes, deNavRes] = await Promise.all([
      fetch('./locales/en/activities.json'),
      fetch('./locales/en/nav.json'),
      fetch('./locales/de/activities.json'),
      fetch('./locales/de/nav.json')
    ]);

    if (!enActivitiesRes.ok || !enNavRes.ok || !deActivitiesRes.ok || !deNavRes.ok) {
      throw new Error("Failed to fetch translation files.");
    }

    const [activitiesEn, navEn, activitiesDe, navDe] = await Promise.all([
      enActivitiesRes.json(),
      enNavRes.json(),
      deActivitiesRes.json(),
      deNavRes.json()
    ]);

    return {
      en: { translation: { ...activitiesEn, ...navEn } },
      de: { translation: { ...activitiesDe, ...navDe } }
    };
  } catch (error) {
    console.error("Error loading translation files:", error);
    throw error;
  }
}

async function loadContent() {
  const urlParams = new URLSearchParams(window.location.search);
  const contentDiv = document.getElementById('content');
  
  try {
    if (urlParams.has('activity')) {
      await loadActivityContent();
    } else if (urlParams.has('travelType')) {
      await loadTravelTypeContent();
    } else {
      contentDiv.innerHTML = '<p class="not-found">Please select an activity or travel type</p>';
    }
  } catch (error) {
    console.error("Error loading content:", error);
    contentDiv.innerHTML = '<p class="error">Failed to load content</p>';
  }
}
async function loadActivityContent() {
  const activityName = decodeURIComponent(new URLSearchParams(window.location.search).get('activity'));
  const contentDiv = document.getElementById('content');

  try {
    const response = await fetch('data/activities.json');
    const activities = await response.json();
    const matched = Object.values(activities).flat().find(
      item => item.name.toLowerCase() === activityName.toLowerCase()
    );

    if (!matched) {
      contentDiv.innerHTML = `<p class="not-found">Activity "${activityName}" not found</p>`;
      return;
    }

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
    contentDiv.innerHTML = '<p class="error">Failed to load activity</p>';
  }
}

async function loadTravelTypeContent() {
  const travelType = decodeURIComponent(new URLSearchParams(window.location.search).get('travelType'));
  const contentDiv = document.getElementById('content');

  try {
    const response = await fetch('data/travelTypes.json');
    const travelTypes = await response.json();
    const matched = travelTypes.find(
      item => item.name.toLowerCase() === travelType.toLowerCase()
    );

    if (!matched) {
      contentDiv.innerHTML = `<p class="not-found">Travel type "${travelType}" not found</p>`;
      return;
    }

    contentDiv.innerHTML = `
      <h1 class="travel-type-group" data-t="travelTypes.${matched.id}.group">${matched.group}</h1>
      <section class="travel-type-box">
        <h2 class="travel-type-title" data-t="travelTypes.${matched.id}.name">${matched.name}</h2>
        <p class="travel-type-description" data-t="travelTypes.${matched.id}.description">${matched.description}</p>
        <section class="images-box">
          ${[1,2,3,4].map(i => 
            `<img class="image${i}" src="${matched.images[`image${i}`]}" alt="${matched.name}">`
          ).join('')}
        </section>
      </section>
    `;
    translateAll();
  } catch (err) {
    console.error('Error loading travel type:', err);
    contentDiv.innerHTML = '<p class="error">Failed to load travel type</p>';
  }
}

async function initApp() {
  try {
    const resources = await fetchTranslations();
    
    await i18next.init({
      lng: localStorage.getItem('selectedLanguage') || 'en',
      fallbackLng: 'en',
      debug: true,
      resources
    });

    await loadContent();
    
    const switcher = document.querySelector(".language-switcher");
    if (switcher) {
      switcher.value = i18next.language;
      switcher.addEventListener("change", (e) => {
        i18next.changeLanguage(e.target.value)
          .then(() => {
            localStorage.setItem('selectedLanguage', e.target.value);
            translateAll();
          });
      });
    }
  } catch (error) {
    console.error("Initialization failed:", error);
    document.getElementById('content').innerHTML = 
      '<p class="error">Application initialization failed. Please refresh.</p>';
  }
}

document.addEventListener('DOMContentLoaded', initApp);