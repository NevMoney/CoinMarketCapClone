let BASE_URL = "https://api.coingecko.com/api/v3";
let EXCHNAGE_ENDPOINT = "/exchanges";
let urlEx = BASE_URL + EXCHNAGE_ENDPOINT;


function displayExchange() {

  fetch(urlEx)
    .then(function (res) {
      res.json().then(function (data) {
      for(let i = 0; i < data.length; i++)

      $("#myExDisplay").append(
        `<tr>
        <th scope="row" class="notbold">${i+1}</th>
        <td><img width=18px src=${data[i].image}>&nbsp;<strong>${data[i].name}</stong></td>
        <td>${data[i].trust_score}</td>
        <td>${data[i].trade_volume_24h_btc.toFixed(2)} BTC</td>
        <td>${data[i].year_established}</td>
        <td>${data[i].country}</td>
        <td><a href=${data[i].url}>${data[i].url}</a></td>
        </tr>`
        );

    });
  });
}

displayExchange();

//$('.nav-tabs a[href="#Exchanges"]').tab('show')
