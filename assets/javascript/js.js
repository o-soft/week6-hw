var giftastic = {
	cartoonArray: ['death note', 'power rangers', 'dragonball z', 'mobile suit gundam', 'rurouni kenshin', "akira"],

		//create button
	
	createBtn: function() {
		// for loop to run through each cartoon in array
		for (var i = 0; i < this.cartoonArray.length; i++) {
			//results of ajax call
			var btn = $("<button>");
			// var button = $(this).attr(btn);
			var btnText = this.cartoonArray[i];
			btn.text(btnText);
			$("#new-cartoonBtn").append(btn);
			
		}
	}
		//Call api within button	
}

var ajax = {

		runAjax: function() {
			// $("button").on("click", function() {
				var cartoons = $(this).text();
				// = $(this).attr("data-name");
				var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
		        cartoons + "&limit=10&rating=r&api_key=dc6zaTOxFJmzC";


		        console.log(queryURL);

		        	        // perform ajax requests
		      $.ajax({
		          url: queryURL,
		          method: "GET"
		        })
		        // perform another function after its done
			        .done(function(response) {
		         // create images
		         //set limit in gipht documentation 
		         		//console.log(response);
		         		var results = response.data;

			          	for (var i = 0; i < results.length; i++) {
			          		//console.log("i am in the for loop "+i);
				          	var imgContainer = $("<div>");
				            var rating = results[i].rating;
				            //console.log(rating);

				            var p = $("<p>").text("Rating: " + rating);

				            var cartoonImage = $("<img>");
				            cartoonImage.attr("src", results[i].images.fixed_height_still.url);
				            cartoonImage.attr("data-notmoving", results[i].images.fixed_height_still.url);
				            cartoonImage.attr("data-moving", results[i].images.fixed_height.url);
				            cartoonImage.attr("data-state", "still")
				            imgContainer.append(cartoonImage);
				            imgContainer.append(p);

				            $("#cartoonsAppear").prepend(imgContainer);

			          	}	

		         	})
		   	// })
		 }
	}	    

    $("#cartoonsAppear").on("click", "img", function() {


      var state = $(this).data("state");
      console.log(state);
		//Check if the variable state is equal to 'still',
      if (state === "still") {
        //var foo = $(this)attr(data.attribute);
        $(this).attr("src", $(this).data("moving"));
        console.log(this);
        $(this).data("state","animate");
      }

      
      // then update the src attribute of this image to it's data-animate value,
      // and update the data-state attribute to 'animate'.
       else if (state === "animate") {
        $(this).attr("src", $(this).data("notmoving"));
        $(this).data("state","still");
      }


    });

      $("#addCartoon").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var newAnime = $("#cartoon-input").val().trim();

        // Adding movie from the textbox to our array
        giftastic.cartoonArray.push(newAnime);

        $("#new-cartoonBtn").empty();
        // Calling renderButtons which handles the processing of our movie array
        giftastic.createBtn();
      });

      // Adding a click event listener to all elements with a class of "movie"
      // $(document).on("click", ".movie", displayMovieInfo);

      // Calling the renderButtons function to display the intial buttons
      // renderButtons();

			
$(document).ready(function(){
	$("#new-cartoonBtn").on("click", "button", ajax.runAjax);
	giftastic.createBtn();
	// ajax.runAjax();
})