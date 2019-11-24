topics = [];
searchterm = $("#searchBar").val();
// click function to store topic
$("#searchButton").on("click", function() {
    var topic = $(this).attr("data-topic");
    var key = "dIxrMMRJwkqETR5DclQQXIBjt2emSBRC";
    //Building the query url
    var queryURL = "api.giphy.com/v1/gifs/search?api_key=" + key + "&limit=20&q=" + searchterm;
    // ajax call function
    $.ajax({
        url: queryURL,
        method: "get"
    })
    .then(function(response){
        var results = response.data;
    })
    //Building a div tag to store full giphy info in
    var topicDiv = $("<div>");
    //Assigning paragraph to new giphy
    var paragraph = $("<p>").text("");
    //Building images
    var giphyImage = $("<img>");
    //Associating image to correct result
    giphyImage.attr("src", results[i].images.downsided_large);

    topicDiv.append(paragraph);
    topicDiv.append(giphyImage);
    $(".giphyImage").prepend(topicDiv);
});

