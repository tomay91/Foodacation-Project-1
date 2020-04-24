let apiKey="59e20706c2ca42e6b1173a11f866013d";
let queryURL="https://api.spoonacular.com/food/products/search?query=all&apiKey=" + apiKey;

$(document).ready(function() {

    $('#btnSubmit').on('click', function(){

        var searchValue = $('#inputSearch').val();
        $('#inputSearch').val('')
        getRecipes(searchValue)
    });


});

function getRecipes(searchValue){
    $.ajax({
        url: queryURL,
        method: "GET",
        })
          .then(function(data){
            console.log(data)
            //process the JSON data etc
            // if(data.location_suggestions.length > 0){
            // getRestaurant(data.location_suggestions[0].longitude, data.location_suggestions[0].latitude)
            // } else{
            //     alert('City Not Found, please try again')
            //     $('#inputSeach').focus();
            // }
          

         })
    
}