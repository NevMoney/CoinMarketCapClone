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
        <td class="notbold"><strong>${news[i].title}</stong><br>${news[i].description}</td>
        <td><a href=${news[i].sourceLink} target="_blank">${news[i].source}</td>
        <td>${news[i].relatedCoins}</td>

        </tr>`
      );
    }
  });
}

displayNews();
