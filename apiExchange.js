//here we'll be pulling exchange info and displaying it on the website


let BASE_URL = "https://api.coingecko.com/api/v3";
let EXCHNAGE_ENDPOINT = "/exchanges";
let urlEx = BASE_URL + EXCHNAGE_ENDPOINT;


function displayExchange() {

  fetch(url)
    .then(function (res) {
      res.json().then(function (data) {

      $("#myExDisplay").append(
        `<tr>
        <th scope="row">${i}</th>
        <td><img width=18px src=${data[i].image}>&nbsp;<strong>${data[i].name}</stong></td>
        <td>$${data[i].trust_score}</td>
        <td>$${data[i].trade_volume_24h_btc}</td>
        <td>$${data[i].year_established}</td>
        <td>${data[i].country}</td>
        <td>${data[i].url}</td>
        </tr>`
        );
    });
  });
}

displayExchange();

/*let BASE_URL = "https://api.coingecko.com/api/v3";
let EXCHNAGE_ENDPOINT = "/exchanges";
let urlEx = BASE_URL + EXCHNAGE_ENDPOINT;

let data = "";

function displayExchange() {

  fetch(urlEx)
    .then(function (res) {
      res.json().then(function (data){

          $("#myExDisplay").append(
            `<tr>
            <th scope="row">${i}</th>
            <td><img width=18px src=${data[i].image}>&nbsp;<strong>${data[i].name}</stong></td>
            <td>$${data[i].trust_score}</td>
            <td>$${data[i].trade_volume_24h_btc}</td>
            <td>$${data[i].year_established}</td>
            <td>${data[i].country}</td>
            <td>${data[i].url}</td>
            </tr>`
            );
          });
        });
      }

  displayExchange();

/*  $("exchange").click(function(){
    $("table").hide();
  });

  $("exchange").click(function(){
    $("table2").show();
  });
*/
