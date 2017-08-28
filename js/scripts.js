// scripts.js

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
$('#search').click(searchCountries);


function searchCountries() {
    var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
            url: url + countryName,
            method: 'GET',
            success: showCountriesList
        });
}


function showCountriesList(resp) {
  countriesList.empty();
  
        resp.forEach(function(item){
            $('<h3>').text(item.name).appendTo(countriesList).css("font-weight", "700");
            $('<li>').html('<span>Region:    </span>' + item.region).appendTo(countriesList);
            $('<li>').html('<span>Capital city:    </span>' + item.capital).appendTo(countriesList);
            $('<li>').html('<span>Currency:    </span>' + item.currencies).appendTo(countriesList);
            $('<li>').html('<span>Language:    </span>' + item.languages).appendTo(countriesList);
            $('<li>').html('<span>Population:    </span>' + item.population).appendTo(countriesList);
            
        });
    
};

