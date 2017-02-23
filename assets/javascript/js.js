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
			var cartoons = 'anime';
			var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
	        cartoons + "&limit=10&rating=pg&api_key=dc6zaTOxFJmzC";


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
	         		console.log(response);
	         		var results = response.data;

		          	for (var i = 0; i < results.length; i++) {
		          		console.log("i am in the for loop "+i);
			          	var imgContainer = $("<div>");

			            var rating = results[i].rating;
			            console.log(rating);

			            var p = $("<p>").text("Rating: " + rating);

			            var cartoonImage = $("<img>");
			            cartoonImage.attr("src", results[i].images.fixed_height.url)
			            
			            imgContainer.append(cartoonImage);
			            imgContainer.append(p);

			            $("#cartoonsAppear").append(imgContainer);

		          	}	

	         	})
	   
	    }
	}	    

			
$(document).ready(function(){
	giftastic.createBtn();
	ajax.runAjax();
})