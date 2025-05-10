const resources = {
    en: {
      translation: {
        nav: {
          destination: "Destination",
          europe: "Europe",
          asia: "Asia",
          southAmerica: "South America",
          activities: "Activities",
          travelTypes: "Travel Types"
        },
        navItems: {
          europe: {
            france: "France",
            italy: "Italy",
            germany: "Germany",
            spain: "Spain"
          },
          asia: {
            japan: "Japan",
            thailand: "Thailand",
            china: "China",
            southKorea: "South Korea"
          },
          southAmerica: {
            brazil: "Brazil",
            argentina: "Argentina",
            peru: "Peru",
            colombia: "Colombia"
          },
          activities: {
            adventure: "Adventure",
            water: "Water Sports",
            cultural: "Cultural",
            winter: "Winter Sports"
          },
          travelTypes: {
            byGroup: "By Group",
            byTheme: "By Theme",
            seasonal: "Seasonal"
          }
        },
        activities: {
          hiking: "Hiking",
          safari: "Safari",
          rafting: "Rafting",
          ziplining: "Ziplining",
          scuba: "Scuba Diving",
          surfing: "Surfing",
          snorkeling: "Snorkeling",
          kayaking: "Kayaking",
          museums: "Museums",
          historicSites: "Historic Sites",
          festivals: "Local Festivals",
          cooking: "Cooking Classes",
          skiing: "Skiing",
          snowboarding: "Snowboarding",
          iceClimbing: "Ice Climbing"
        },
        group: {
          solo: "Solo Travel",
          couples: "Couples",
          family: "Family",
          friends: "Friends"
        },
        theme: {
          wellness: "Wellness",
          food: "Food & Wine",
          honeymoon: "Honeymoon",
          volunteering: "Volunteering"
        },
        season: {
          summer: "Summer Holidays",
          winter: "Winter Getaways",
          spring: "Spring Break",
          christmas: "Christmas Markets"
        }
      }
    }
    ,
    de: {
  "translation": {
    "nav": {
      "destination": "Reiseziel",
      "europe": "Europa",
      "asia": "Asien",
      "southAmerica": "Südamerika",
      "activities": "Aktivitäten",
      "travelTypes": "Reisearten"
    },
    "navItems": {
      "europe": {
        "france": "Frankreich",
        "italy": "Italien",
        "germany": "Deutschland",
        "spain": "Spanien"
      },
      "asia": {
        "japan": "Japan",
        "thailand": "Thailand",
        "china": "China",
        "southKorea": "Südkorea"
      },
      "southAmerica": {
        "brazil": "Brasilien",
        "argentina": "Argentinien",
        "peru": "Peru",
        "colombia": "Kolumbien"
      },
      "activities": {
        "adventure": "Abenteuer",
        "water": "Wassersport",
        "cultural": "Kulturell",
        "winter": "Wintersport"
      },
      "travelTypes": {
        "byGroup": "Nach Gruppe",
        "byTheme": "Nach Thema",
        "seasonal": "Saisonal"
      }
      },
      "activities": {
        "hiking": "Wandern",
        "safari": "Safari",
        "rafting": "Rafting",
        "ziplining": "Ziplining",
        "scuba": "Tauchen",
        "surfing": "Surfen",
        "snorkeling": "Schnorcheln",
        "kayaking": "Kajakfahren",
        "museums": "Museen",
        "historicSites": "Historische Stätten",
        "festivals": "Lokale Festivals",
        "cooking": "Kochkurse",
        "skiing": "Skifahren",
        "snowboarding": "Snowboarden",
        "iceClimbing": "Eisklettern"
      },
      "group": {
        "solo": "Alleinreisende",
        "couples": "Paare",
        "family": "Familien",
        "friends": "Freunde"
      },
      "theme": {
        "wellness": "Wellness",
        "food": "Essen & Wein",
        "honeymoon": "Flitterwochen",
        "volunteering": "Freiwilligenarbeit"
      },
      "season": {
        "summer": "Sommerurlaub",
        "winter": "Winterurlaub",
        "spring": "Frühlingsferien",
        "christmas": "Weihnachtsmärkte"
      }
    }
  }
}

const activityTranslations = {
  en: {
    translation: {
      activities: {
        hiking: {
          name: "Hiking",
          group: "Adventures",
          description: "Explore nature on foot through scenic trails, mountains, and forests."
        },
        safari: {
          name: "Safari",
          group: "Adventures",
          description: "Experience wildlife up close in their natural habitat on guided expeditions."
        },
        rafting: {
          name: "Rafting",
          group: "Adventures",
          description: "Ride the rapids and navigate exciting river currents with a team."
        },
        ziplining: {
          name: "Ziplining",
          group: "Adventures",
          description: "Soar above the ground and enjoy thrilling aerial views of forests and landscapes."
        },
        museums: {
          name: "Museums",
          group: "Cultural",
          description: "Discover art, history, and science through curated exhibits and collections."
        },
        historicSites: {
          name: "Historic Sites",
          group: "Cultural",
          description: "Visit landmarks that hold cultural and historical significance across regions."
        },
        localFestivals: {
          name: "Local Festivals",
          group: "Cultural",
          description: "Celebrate traditions, food, music, and arts with local communities."
        },
        cookingClasses: {
          name: "Cooking Classes",
          group: "Cultural",
          description: "Learn to prepare traditional dishes hands-on with local chefs and ingredients."
        },
        skiing: {
          name: "Skiing",
          group: "Winter Sports",
          description: "Glide down snowy slopes and enjoy winter landscapes at ski resorts."
        },
        snowboarding: {
          name: "Snowboarding",
          group: "Winter Sports",
          description: "Ride the snow with style and adrenaline on your snowboard."
        },
        iceClimbing: {
          name: "Ice Climbing",
          group: "Winter Sports",
          description: "Climb frozen waterfalls and ice walls using axes and crampons."
        },
        scubaDiving: {
          name: "Scuba Diving",
          group: "Water Sports",
          description: "Dive deep underwater to explore marine life and coral reefs."
        },
        surfing: {
          name: "Surfing",
          group: "Water Sports",
          description: "Catch ocean waves and ride them to shore on a surfboard."
        },
        snorkeling: {
          name: "Snorkeling",
          group: "Water Sports",
          description: "Float on the surface and observe underwater life with a snorkel mask."
        },
        kayaking: {
          name: "Kayaking",
          group: "Water Sports",
          description: "Paddle through rivers, lakes, or coastlines in a narrow watercraft."
        }
      }
    }
  },
  de: {
    translation: {
      activities: {
        hiking: {
          name: "Wandern",
          group: "Abenteuer",
          description: "Erkunde die Natur zu Fuß auf malerischen Wegen, Bergen und in Wäldern."
        },
        safari: {
          name: "Safari",
          group: "Abenteuer",
          description: "Erlebe Wildtiere hautnah in ihrem natürlichen Lebensraum auf geführten Expeditionen."
        },
        rafting: {
          name: "Rafting",
          group: "Abenteuer",
          description: "Bezwinge Stromschnellen und navigiere spannende Flüsse im Team."
        },
        ziplining: {
          name: "Seilrutschen",
          group: "Abenteuer",
          description: "Fliege durch die Luft und genieße atemberaubende Aussichten von oben."
        },
        museums: {
          name: "Museen",
          group: "Kultur",
          description: "Entdecke Kunst, Geschichte und Wissenschaft in sorgfältig kuratierten Ausstellungen."
        },
        historicSites: {
          name: "Historische Stätten",
          group: "Kultur",
          description: "Besuche bedeutende kulturelle und geschichtliche Wahrzeichen in verschiedenen Regionen."
        },
        localFestivals: {
          name: "Lokale Festivals",
          group: "Kultur",
          description: "Feiere Traditionen, Essen, Musik und Kunst mit lokalen Gemeinschaften."
        },
        cookingClasses: {
          name: "Kochkurse",
          group: "Kultur",
          description: "Lerne traditionelle Gerichte mit lokalen Köchen und Zutaten zuzubereiten."
        },
        skiing: {
          name: "Skifahren",
          group: "Wintersport",
          description: "Rutsche die schneebedeckten Pisten hinunter und genieße die Winterlandschaft."
        },
        snowboarding: {
          name: "Snowboarden",
          group: "Wintersport",
          description: "Fahre mit Stil und Adrenalin auf deinem Snowboard durch den Schnee."
        },
        iceClimbing: {
          name: "Eisklettern",
          group: "Wintersport",
          description: "Erklimme gefrorene Wasserfälle und Eiswände mit Äxten und Steigeisen."
        },
        scubaDiving: {
          name: "Tauchen",
          group: "Wassersport",
          description: "Tauche tief unter Wasser, um Meeresleben und Korallenriffe zu erkunden."
        },
        surfing: {
          name: "Surfen",
          group: "Wassersport",
          description: "Erwische Wellen und reite sie stilvoll an Land."
        },
        snorkeling: {
          name: "Schnorcheln",
          group: "Wassersport",
          description: "Schwebe an der Oberfläche und beobachte das Unterwasserleben mit einer Tauchmaske."
        },
        kayaking: {
          name: "Kajakfahren",
          group: "Wassersport",
          description: "Paddle durch Flüsse, Seen oder Küsten in einem schmalen Boot."
        }
      }
    }
  }
};

document.querySelectorAll('[data-t^="activities."]').forEach(el => {
  const key = el.getAttribute('data-t');
  if (!key.endsWith('.name')) {
    el.setAttribute('data-t', key + '.name');
  }
});



const mergedResources = {
  en: {
    translation: {
      ...resources.en.translation,
      ...activityTranslations.en.translation
    }
  },
  de: {
    translation: {
      ...resources.de.translation,
      ...activityTranslations.de.translation
    }
  }
};


// Initialize i18next
i18next.init({
  lng:  localStorage.getItem('selectedLanguage') || 'en',
  debug: true,
  resources: mergedResources
}).then(() => {
  translateAll();
});

// Language switcher logic
const switcher = document.querySelector(".language-switcher");

if (switcher) {
  // Set initial value from localStorage if available
  const savedLang = localStorage.getItem('selectedLanguage');
  if (savedLang) {
    switcher.value = savedLang;
  }

  switcher.addEventListener("input", (e) => {
    const lang = e.target.value;
    console.log("Switching to", lang);

    // Save to localStorage
    localStorage.setItem('selectedLanguage', lang);

    i18next.changeLanguage(lang).then(() => {
      translateAll();
    });
  });
}

// Function to update all translatable text
function translateAll() {
  const translationTargets = document.querySelectorAll("[data-t]");
  
  translationTargets.forEach((el) => {
    const key = el.getAttribute("data-t");
    if (key) {
      el.textContent = i18next.t(key);
    }
  });
}

  
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("search-modal");
    const openBtn = document.querySelector(".open-search");
    const closeBtn = document.querySelector(".close");
  
    openBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });