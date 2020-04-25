$(document).ready(function() {
    let apiKey="59e20706c2ca42e6b1173a11f866013d";
    $('#btnSubmit').on('click', function(){
        var searchValue = $('#inputSearch').val();
        $('#inputSearch').val('')
        getRecipes(searchValue)
    });

function getRecipes(searchValue){
    $.ajax({
        url: "https://api.spoonacular.com/recipes/search?query=" + searchValue + "&number=20&apiKey=" + apiKey,
        method: "GET",
        })
          .then(function(data){
            console.log(data.results.length)
            if(data.results.length > 0){
                for (var i=0; i < data.results.length; i++) {
                    console.log(data.results[i])

                 var col =  $('<div class="col s6 m4 l3">').css({
                     "min-height": "459px",
                     "max-height": "460px",
                                  
                 });
                 var card = $('<div class="card blue-grey darken-1">').css({
                      "overflow": "hidden",
                      "word-wrap": "break-word",
                 });

                 var content = $('<div class="card-content white-text">');
                  var name = $('<span class="card-title">').text(data.results[i].title);
                  var img  = $('<a link>').text(data.results[i].sourceUrl).attr("href", data.results[i].sourceUrl).css({
                      "max-width": "270px",
                      "min-width": "250px",
                      "min-height": "199px",
                      "max-height": "200px",
                      "overflow": "hidden",
                  });
                  console.log(data.results[i].sourceUrl)
                 var cuisinesIcon = $('<i class="material-icons right small">').text('restaurant_menu');
                 var readyText = $('<span>').text("Ready In Minutes: " + data.results[i].readyInMinutes);
                 var cuisines  = $('<p>').append(cuisinesIcon, readyText);
                 var action= $('<div class="card-action">');
             content.append(name, img, cuisines)
             card.append(content, action)
             col.append(card)
             $('#searchResults').append(col)
         }
            }
        })
    }
});