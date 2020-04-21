let apiKey="59e20706c2ca42e6b1173a11f866013d";
let queryURL="https://api.spoonacular.com/food/products/search" + apiKey;
// https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=API-KEY
$(document).ready(function() {

    $.ajax({
        
        url: queryURL,
        method: "GET"
        
    })
    .then(function(data) {
        
        console.log(data);
        
    })



    
})