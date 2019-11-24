topics = ["frog","dog","cat"];
searchterm = $("#searchBar").val();

function renderButtons() {
    $(".tagHolder").empty();
    for (var i = 0; i < topics.length; i++) {
      var a = $("<button>");
      a.addClass("topic-btn btn btn-outline-success btn-block my-2 my-sm-0 m-1");
      a.attr("data-name", topics[i]);
      a.text(topics[i]);
      $(".tagHolder").append(a);
    }
  }


// Adding buttons to the overall structure when input
  $("#searchButton").on("click", function(event) {
    event.preventDefault();
    // console.log("Working")
    var topic = $("#searchBar").val();
    topics.push(topic);
    renderButtons();
  });



  function topicDisplay() {

    var topic = $(this).attr("data-name");
    var key = "dIxrMMRJwkqETR5DclQQXIBjt2emSBRC";
    limit = parseInt(10);
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&limit= " + limit + "&q=" + topic;
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {

    var results = response.data;
      for (var i=0; i < results.length; i++) {
        var topicDiv = $("<div class='topic'>");
        var still = results[i].images.fixed_height_still.url;
        var animate = results[i].images.fixed_height.url;
        var rating = results[i].rating;
        var paragraphOne = $("<p>").text("Rating: " + rating);
        topicDiv.append(paragraphOne);
        var image = $("<img>").attr({"src": still, "data-animate": animate, "data-still": still, "data-state": "still", "class": "gif"});
        topicDiv.append(image);
        $(".giphyImage").prepend(topicDiv);
    };
    $(".gif").on("click", function() {
        // console.log("Working");
      var state = $(this).attr("data-state");
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });
});

  };

  $(document).on("click", ".topic-btn", topicDisplay);
  renderButtons();

 