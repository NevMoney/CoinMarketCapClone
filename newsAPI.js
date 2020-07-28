var settings = {
  url: "https://api.coinstats.app/public/v1/news?skip=0&limit=10",
  method: "GET",
  timeout: 0,
};

function displayNews() {
  $.ajax(settings).done(function (response) {
    const news = response.news;
    console.log(news);
    for (let i = 0; i < news.length; i++) {
      $("#myNewsDisplay").append(
        `<tr>
        <td><img width=18px src=${news[i].image}>&nbsp;<strong>${news[i].title}</stong></td>
        <td>${news[i].description}</td>
        <td>${news[i].source} BTC</td>
        <td>${news[i].feedDate}</td>
        <td>${news[i].relatedCoins}</td>
        </tr>`
      );
    }
  });
}

displayNews();
