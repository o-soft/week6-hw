var giftastic = {
	cartoonArray: ['death note', 'power rangers', 'dragonball z', 'mobile suit gundam', 'rurouni kenshin', "akira"],

		//create button
	
	// createBtn: function() {
		// for loop to run through each cartoon in array
	// 	for (var i = 0; i < this.cartoonArray.length; i++) {
	// 		//results of ajax call
	// 		var btn = $("<button>");
	// 		var button = $(this).attr(btn);
	// 		var btnText = text(this.cartoonArray[i]);
	// 		$("#new-cartoonBtn").append(btn);
	// 		this.btn.append(btnText);
	// 	}
	// }


	createBtn: function() {
        // for loop to run through each cartoon in array
        for (var i = 0; i < this.cartoonArray.length; i++) {
            var btn = $("<button>");
            btn.text(this.cartoonArray[i]);
            $("#new-cartoonBtn").append(btn);
        }
    }



		//Call api within button	
},

ajax = {

		runAjax: function() {

			$("button").on("click", function() {


				var cartoon = $(this).attr("data-name");
		        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
		        cartoon + "&api_key=dc6zaTOxFJmzC&limit=5&rating=pg";



		        console.log(queryURL)

		        	        // perform ajax requests
					      $.ajax({
					          url: queryURL,
					          method: "GET"
					        })
					        // perform another function after its done
						        .done(function(response) {
					         // create images
					         //set limit in gipht documentation 
					         		var results = response.data;

						          	for (var i = 0; i < results.length; i++) {
							          	var imgContainer = $("<div class='item'>");

							            var rating = results[i].rating;

							            var p = $("<p>").text("Rating: " + rating);

							            var cartoonImage = $("<img>");
							            cartoonImage.attr("src", results[i].images.fixed_height.url);

							            imgContainer.prepend(p);
							            imgContainer.prepend(cartoonImage);

							            $("cartoonsApear").prepend(imgContainer);

						          	}	

					         	})
			
				})			
			}	   


	    }
		    

			

giftastic.createBtn();
ajax.runAjax();


//done outside object
// $( document ).ready(function() {}
	// $("#new-cartoonBtn").on("click", "button.cartoon", function() {

	// });

