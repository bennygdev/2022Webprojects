const countryInput = document.getElementById('countryInput');
const searchBtn = document.getElementById('searchBtn');
const countryContent = document.getElementById('countryInfo');

searchBtn.addEventListener('click', () => {
    let countryName = countryInput.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true
    `;
    
    console.log(finalURL);

    fetch(finalURL).then((response) => response.json()).then((data) => {

        // prints the output to test if output is valid
        console.log(data[0]); // country data object
        console.log(data[0].capital[0]); 
        console.log(data[0].flags.png); 
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(data[0].timezones[0]);
        console.log(data[0].postalCode.format);


        // tostring functions splits objects that might have multiple keys and values and joins them together
        console.log(Object.keys(data[0].currencies).toString().split(',').join(', '));

        //currency fullname
        // console.log(data[0].currencies[Object.keys(data[0].currencies)].name.toString().split(',').join(', '));

        console.log(Object.values(data[0].languages).toString().split(',').join(', '))

        countryContent.innerHTML = `<img src="${data[0].flags.png}" class="flag-img">
        <h3><span id="countryName">${data[0].name.common}</span></h3>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital: <span id="highlight">${data[0].capital[0]}</span></h4>
                <h4>Continent: <span id="highlight">${data[0].continents[0]}</span></h4>
                <h4>Population: <span id="highlight">${numberWithCommas(data[0].population)}</span></h4>
                <h4>Currencies: <span id="highlight">${Object.keys(data[0].currencies).toString().split(',').join(', ')}</span></h4>
                <h4>Common Languages: <span id="highlight">${Object.values(data[0].languages).toString().split(',').join(', ')}</span></h4>
                <h4>Timezone: <span id="highlight">${data[0].timezones[0]}</span></h4>
                <h4>Postal Code Format: <span id="highlight">${data[0].postalCode.format}</span></h4>
            </div>
        </div>
        `;

    }).catch(() => { // if error occurs
        if(countryName.length === 0) {
            countryContent.innerHTML = `<p id="errortext">The input field cannot be empty.</p>`
        } else {
            countryContent.innerHTML = `<p id="errortext">Please enter a valid country name.</p>`
        }
    })

    countryInput.value = ""; // clear the input field
});

// implements the thousands comma seperator
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}