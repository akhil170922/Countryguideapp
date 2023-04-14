let searchBtn=document.getElementById('search-btn');
let countryInp=document.getElementById("country-inp");
let result=document.getElementById('result');
  searchBtn.addEventListener('click',()=>{
    let countryName=countryInp.value;
    let finalUrl=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalUrl);
    fetch(finalUrl).then(response => response.json())
    .then((data)=>
    result.innerHTML=`<img src="${data[0].flags.svg}" class="flag-img">
    <h2>${data[0].name.common}</h2>
    <h6><b>Capital: </b></h6><p>${data[0].capital[0]}</p><br>
    <h6><b>Continent: </b></h6><p>${data[0].continents[0]}</p> <br>
    <h6><b>Population: </b></h6><p>${data[0].population}</p> <br>
    <h6><b>Currency: </b></h6><p>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${data[0].currencies[Object.keys(data[0].currencies)].symbol}</p><br>
    <h6><b>Common Languages: </b></h6><p>${data[0].languages[Object.keys(data[0].languages)]}</p>`
    )
    
    let clearButton=document.getElementById('clear-btn');
    clearButton.addEventListener('click',()=>{
        result.innerHTML=``;
        countryInp.value='';
    })
  })
