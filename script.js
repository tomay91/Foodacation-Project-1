
$(document).ready(function(){

    $('#btnSubmit').on('click', function(){
        var searchValue = $('#inputSeach').val();
        $('#inputSeach').val('')
        getCity(searchValue)
    });
});

function getCity(searchValue){
    $.ajax({
        url: `https://developers.zomato.com/api/v2.1/locations?query=${searchValue.trim()}`,
        method: "GET",
        headers: {
          "user-key": "1df36fe20e0293046e468f4ee5246765"
        },  success: function(data){
            console.log(data)
            //process the JSON data etc
            if(data.location_suggestions.length > 0){
            getRestaurant(data.location_suggestions[0].longitude, data.location_suggestions[0].latitude)
            } else{
                alert('City Not Found, please try again')
                $('#inputSeach').focus();
            }
        }
    })
}
function getRestaurant(lon, lat){
    $.ajax({
        url: `https://developers.zomato.com/api/v2.1/search?lon=${lon}&lat=${lat}`,
        method: "GET",
        headers: {
          "user-key": "1df36fe20e0293046e468f4ee5246765"
        },  success: function(data){
            console.log(data)
            var defaultImg= "./images/foodoption.jpg"
            $('#searchResults').empty();
            //process the JSON data etc
            if(data.restaurants.length > 0){
                data.restaurants.forEach(res => {
                var col =  $('<div class="col s6 m4 l3">').css({
                    "min-height": "459px",
                    "max-height": "460px",
                    "overflow-y": "scroll"
                });
                var card = $('<div class="card blue-grey darken-1">').css({
                    "overflow": "hidden",
                });
                var content = $('<div class="card-content white-text">');
                 var name = $('<span class="card-title">').text(res.restaurant.name);
                 var img  = $('<img>').attr("src", res.restaurant.featured_image || defaultImg).css({
                     "max-width": "270px",
                     "min-width": "250px",
                     "min-height": "199px",
                     "max-height": "200px"
                    
                    });
                var cuisinesIcon = $('<i class="material-icons right small">').text('restaurant_menu');
                var cuisinesText = $('<span>').text(res.restaurant.cuisines);
                var cuisines  = $('<p>').append(cuisinesIcon, cuisinesText)
                
                var action= $('<div class="card-action">');
                var time  = $('<p>').text("Times: " +res.restaurant.timings);
                var location  = $('<p>').text("Location: " +res.restaurant.location.address + ", " + res.restaurant.location.city + " " + res.restaurant.location.zipcode);

            action.append(time, location);
            content.append(name, img, cuisines)
            card.append(content, action)
            col.append(card)
            
            $('#searchResults').append(col)
             })
        } else {
                alert('This city has no restaurants.')
            }
        }
    })
}

