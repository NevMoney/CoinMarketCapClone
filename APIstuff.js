let BASE_URL = "https://api.coingecko.com/api/v3";
let COIN_LIST_ENDPOINT = "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h";

let url = BASE_URL + COIN_LIST_ENDPOINT;

  fetch(url)
    .then(function (res) {

      res.json().then(function (data) {
        const coinList = data;

    console.log(coinList);

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
