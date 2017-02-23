var giftastic = {
  cartoonArray: ['death note', 'power rangers', 'dragonball z', 'mobile suit gundam', 'rurouni kenshin', "akira"],

      // displayMovieInfo function re-renders the HTML to display the appropriate content
  displayCartoon: function() {

        var cartoon = $(this).attr("data-name");
            var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
            cartoon + "&api_key=dc6zaTOxFJmzC&limit=10&rating=pg";

        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          // Creating a div to hold the movie
          var cartoonDiv = $("<div class='still'>");

          // Storing the rating data
          var rating = response.Rated;

          // Creating an element to have the rating displayed
          var displayRating = $("<p>").text("Rating: " + rating);

          // Displaying the rating
          cartoonDiv.append(displayRating);

          // Retrieving the URL for the image
          var cartoonURL = response.Poster;

          // Creating an element to hold the image
          var image = $("<img>").attr("src", imgURL);

          // Appending the image
          cartoonDiv.append(image);

          // Putting the entire movie above the previous movies
          $("#movies-view").prepend(movieDiv);
        });

      }

      // Function for displaying movie data
      createBtn: function() {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < movies.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie to our button
          a.addClass("movie");
          // Adding a data-attribute
          a.attr("data-name", movies[i]);
          // Providing the initial button text
          a.text(movies[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where a movie button is clicked
      $("#add-movie").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var movie = $("#movie-input").val().trim();

        // Adding movie from the textbox to our array
        movies.push(movie);

        // Calling renderButtons which handles the processing of our movie array
        createBtn();
      });
}

      // Adding a click event listener to all elements with a class of "movie"
      $(document).on("click", ".movie", displayMovieInfo);

      // Calling the renderButtons function to display the intial buttons
      createBtn();