

  const destinations = {
    europe: {
      title: "Europe",
      subtitle: "Your unforgettable journey begins here.",
      description: "From the romantic streets of Paris to the sun-kissed beaches of Greece, Europe is a mosaic of cultures, flavors, and unforgettable moments.",
      banner: "Images/Logo/pics/europe-banner.jpg",
      images: [
        "Images/Logo/pics/coloseum.jpg",
        "Images/Logo/pics/Eiffel-Tower-Europe.webp",
        "Images/Logo/pics/IMG_7778.jpg",
        "Images/Logo/pics/europeMap.jpg"
      ],
      quote: "“We lived an adventure that others can only dream of.”"
    },
    southAmerica: {
      title: "South-America",
      subtitle: "Your unforgettable adventure begins here.",
      description: "From the mystical ruins of Machu Picchu to the rhythm-filled streets of Rio, South America is a land of breathtaking landscapes, rich cultures, and unforgettable experiences.",
      banner: "Images/Logo/pics/south-america-banner.jpg",
      images: [
        "Images/Logo/pics/machu_pichu.jpeg",
        "Images/Logo/pics/samba.jpg",
        "Images/Logo/pics/Rio.jpg",
        "Images/Logo/pics/soutAmerica.jpg"
      ],
      quote: "“We lived an adventure that others can only dream of.”"
    },
    asia: {
      title: "Asia",
      subtitle: "Your unforgettable discovery begins here.",
      description: "From the serene temples of Kyoto to the vibrant markets of Bangkok, Asia is a journey through ancient traditions, diverse flavors, and awe-inspiring wonders.",
      banner: "Images/Logo/pics/asia-banner.jpg",
      images: [
        "Images/Logo/pics/asia1.jpg",
        "Images/Logo/pics/asia2.jpg",
        "Images/Logo/pics/asia3.jpg",
        "Images/Logo/pics/asiaMap.jpg"
      ],
      quote: "“We lived an adventure that others can only dream of.”"
    },
    tropicals: {
      title: "Tropical Islands",
      subtitle: "Your paradise escape begins here.",
      description: "From the turquoise waters of the Maldives to the lush jungles of the Caribbean, tropical islands offer sun-soaked serenity, vibrant cultures, and unforgettable moments in nature’s most stunning settings.",
      banner: "Images/Logo/pics/tropicals-banner.jpg",
      images: [
        "Images/Logo/pics/trop1.jpg",
        "Images/Logo/pics/trop2.jpg",
        "Images/Logo/pics/trop3.jpg",
        "Images/Logo/pics/tropMap.jpg"
      ],
      quote: "“We lived an adventure that others can only dream of.”"
    }
  };
  
  function showDestination(key) {
    const data = destinations[key];
    const container = document.getElementById('destinationContainer');
    container.innerHTML = ''; 
  
    const destination = document.createElement('div');
    destination.classList.add('destination');
  
    // Here are the Info's
    const info = document.createElement('div');
    info.classList.add('infoTravel');
  
    const h1 = document.createElement('h1');
    h1.textContent = data.title;
  
    const h3 = document.createElement('h3');
    h3.textContent = data.subtitle;
  
    const desc = document.createElement('p');
    desc.textContent = data.description;
  
    const features = document.createElement('div');
    features.classList.add('features');
    const featureList = [
      { icon: 'fa-bed', label: 'Hotel' },
      { icon: 'fa-plane', label: 'Flight' },
      { icon: 'fa-car', label: 'Transport' },
      { icon: 'fa-utensils', label: 'Restaurant' },
      { icon: 'fa-map-marked-alt', label: 'Guide' }
    ];
    featureList.forEach(f => {
      const span = document.createElement('span');
      span.classList.add('feature');
      span.innerHTML = `<i class="fas ${f.icon}"></i> ${f.label}`;
      features.appendChild(span);
    });
  
    const plan = document.createElement('p');
    plan.textContent = "Plan everything in one place – simple, fast, and stress-free.";
  
    const quote = document.createElement('p');
    quote.innerHTML = `<strong>Traveler’s Words:</strong> ${data.quote}`;
  
    const review = document.createElement('div');
    review.classList.add('review');
  
    const emoji = document.createElement('img');
    emoji.classList.add('round');
    emoji.src = "Images/Logo/pics/emoji1.webp";
    emoji.alt = "happy";
  
    const audio = document.createElement('audio');
    audio.controls = true;
    const source = document.createElement('source');
    source.src = "review-audio.mp3";
    source.type = "audio/mpeg";
    audio.appendChild(source);
  
    const imageSide = document.createElement('div');
    imageSide.classList.add('imageSide');
    const banner = document.createElement('img');
    banner.classList.add('banner');
    banner.src = data.banner;
    banner.alt = data.title + " view";
    imageSide.appendChild(banner);
  
    review.appendChild(emoji);
    review.appendChild(audio);
    review.appendChild(imageSide);
  
    info.append(h1, h3, desc, features, plan, quote, review);
    destination.appendChild(info);
  
    // Image grid
    const grid = document.createElement('div');
    grid.classList.add('pituresGrid');
  
    const itemClasses = ['item1', 'item2', 'item3', 'item4'];
    data.images.forEach((img, i) => {
      const image = document.createElement('img');
      image.src = img;
      image.alt = `${data.title} image ${i + 1}`;
      image.classList.add('show', itemClasses[i]);
      grid.appendChild(image);
    });
  
    destination.appendChild(grid);
    container.appendChild(destination);
  }

  showDestination('tropicals'); // Default to tropicals