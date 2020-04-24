let apiKey="59e20706c2ca42e6b1173a11f866013d";
let queryURL=

$(document).ready(function() {

    $('#btnSubmit').on('click', function(){

        var searchValue = $('#inputSearch').val();
        $('#inputSearch').val('')
        getRecipes(searchValue)
    });


});

function getRecipes(searchValue){
    $.ajax({
        url: "https://api.spoonacular.com/recipes/search?query=" + searchValue + "&number=20&apiKey=" + apiKey,
        method: "GET",
        })
          .then(function(data){
            console.log(data)
            
            var searchValue= $("<div id= 'searchResults'>");

            var results= data.results;

            var display= $("#searchResults").text(results);

            searchResults.append(display);

  



          
          

         })
    
}