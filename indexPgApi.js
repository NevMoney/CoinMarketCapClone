let BASE_URL = "https://api.coingecko.com/api/v3";
var pgNumb = `1`;
let COIN_LIST_ENDPOINT = `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${pgNumb}&sparkline=false&price_change_percentage=24h`;
let url = BASE_URL + COIN_LIST_ENDPOINT;

//hide previous tab on first page
function hideTabs() {
  if (pgNumb == 1) {
    $("#prev-tab").hide();
  }
}

hideTabs();

//fetch and display api data
function displayAPI() {
  fetch(url).then(function (res) {
    res.json().then(function (data) {
      $("#loading").hide();
      for (let i = 0; i < data.length; i++) {
        let color24 = "";
        if (data[i].price_change_percentage_24h > 0) {
          color24 = "positive";
        } else if (data[i].price_change_percentage_24h < 0) {
          color24 = "negative";
        }

        mc = new Intl.NumberFormat().format(data[i].market_cap);
        p = new Intl.NumberFormat().format(data[i].current_price);
        v = new Intl.NumberFormat().format(data[i].total_volume);
        cs = new Intl.NumberFormat().format(data[i].circulating_supply);

        $("#myDisplay").append(
          `<tr>
          <th scope="row" class="notbold">${(pgNumb - 1) * 100 + i + 1}</th>
          <td><img width=16px src=${data[i].image}>&nbsp;<strong>${
            data[i].name
          }</stong></td>
          <td>$${mc}</td>
          <td>$${p}</td>
          <td>$${v}</td>
          <td>${cs} ${data[i].symbol.toUpperCase()}</td>
          <td class="${color24}">${data[i].price_change_percentage_24h.toFixed(
            2
          )}%</td>
        </tr>`
        );
      }
    });
  });
}

displayAPI();

//change to exchanges page
$("#exchange-tab").click(function () {
  $("#Cryptocurrencies").hide();
  $("#Exchanges").show();
  console.log("tab clicked");
});

//show next set of data
$("#next-tab").click(function () {
  pgNumb++;
  console.log(pgNumb);
  COIN_LIST_ENDPOINT = `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${pgNumb}&sparkline=false&price_change_percentage=24h`;
  url = BASE_URL + COIN_LIST_ENDPOINT;
  console.log(url);
  $("#myDisplay").empty();
  $("#prev-tab").show();

  displayAPI();
});

//show previous set of data
$("#prev-tab").click(function () {
  pgNumb--;
  console.log(pgNumb);
  COIN_LIST_ENDPOINT = `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${pgNumb}&sparkline=false&price_change_percentage=24h`;
  url = BASE_URL + COIN_LIST_ENDPOINT;
  console.log(url);
  $("#myDisplay").empty();

  displayAPI();
  hideTabs();
});
