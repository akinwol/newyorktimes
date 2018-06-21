var API_KEY = '62be46f04f464d4bbc0f89aef3fa9ce4'

$("#submit").on("click", function () {
    event.preventDefault();
    var searchTerm = $("#searchTerm").val();
    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=" + API_KEY +"&q="+searchTerm;
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(JSON.stringify(response))
    });
});
