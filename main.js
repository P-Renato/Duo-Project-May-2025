// const url = 'https://restcountries.com/v3.1/all';

// const fetchedCountries = async () => {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error message!', error);
//     }

//     const container = document.querySelector('.nationalities-container');

                
//     if (container) {
//         container.innerHTML = "";

//         // Group coutries by nationalities
//         const nationalities = {};

//         data.forEach(country => {
//             if (!nationalities[country]) {
//                 nationalities[country] = [];
//             }
//             nationalities[country].push(country);


              
//         });

//         const countryFlags = country.flag;
//         console.log(countryFlags)
//     };

    

// } 
// fetchedCountries()
// // console.log(fetchedCountries);




const url = 'https://restcountries.com/v3.1/all';

const fetchedCountries = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        const container = document.querySelector('.nationalities-container');

        if (container) {
            container.innerHTML = "";

            
            // Example: loop through and show each country with its flag
            data.forEach(country => {
                const countryName = country.name.common;
                const flag = country.flags?.png || ''; // fallback
                const mapUrl = country.maps?.googleMaps;

                const countryEl = document.createElement('div');
                
            });
        }

    } catch (error) {
        console.error('Error fetching countries:', error);
    }
};

fetchedCountries();
