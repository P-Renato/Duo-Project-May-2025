const url = 'https://restcountries.com/v3.1/all';

const fetchedCountries = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error message!', error);
    }

    const container = document.querySelector('.nationalities-container');

                
    if (container) {
        container.innerHTML = "";

        // Group coutries by nationalities
        const nationalities = {};

        data.forEach(country => {
            if (!nationalities[country]) {
                nationalities[country] = [];
            }
            nationalities[country].push(country);


              
        });

        const countryFlags = country.flag;
        console.log(countryFlags)
    };

    

} 
fetchedCountries()
// console.log(fetchedCountries);
