let BASE_URL = "https://api.coingecko.com/api/v3";
let COIN_LIST_ENDPOINT = "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h";

let url = BASE_URL + COIN_LIST_ENDPOINT;

function displayAPI() {

  fetch(url)
    .then(function (res) {

      res.json().then(function (data) {

    for(let i = 0; i < data.length; i++){
      let color24 = "";
      if (data[i].price_change_percentage_24h > 0){
        color24 = "positive";
      }
      else if (data[i].price_change_percentage_24h < 0) {
        color24 = "negative";
      }

      x = new Intl.NumberFormat().format(data[i].market_cap);


      $("#myDisplay").append(
        `<tr>
        <th scope="row">${i}</th>
        <td><img width=18px src=${data[i].image}>&nbsp;<strong>${data[i].name}</stong></td>
        <td>$${data[i].market_cap}</td>
        <td>$${data[i].current_price}</td>
        <td>$${data[i].total_volume}</td>
        <td>${data[i].circulating_supply} ${data[i].symbol.toUpperCase()}</td>
        <td class="${color24}">${data[i].price_change_percentage_24h.toFixed(2)}%</td>
        </tr>`
        );
      }
    });
  });
}

displayAPI();

    /* console.log(coinList);

    $("#coinRank").html(coinList[0].market_cap_rank);
    $("#coinName").html(coinList[0].name);
    $("#coinMktCap").html("$" + coinList[0].market_cap);
    $("#coinPrice").html("$" + coinList[0].current_price);
    $("#coinVol").html("$" + coinList[0].total_volume);
    $("#coinSupply").html((coinList[0].circulating_supply) + " " + (coinList[0].symbol));
    $("#coin24h").html(coinList[0].price_change_percentage_24h + "%");

    let delta = coinList[0].price_change_percentage_24h;

    for(let i = 0; i < delta; i++){
            if (delta > 0) {
                $("#coin24h").css("color", "green");
            } else {
                $("#coin24h").css("color", "red");
            };
          }

        });
      });
*/
