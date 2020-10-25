function shuffle(array) {
    let copy = [], n = array.length, i;
  
    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);
  
      // If not already shuffled, move it to the new array.
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
  
    return copy;
  }

function generateField(size){
    let cards = []
    for(let i=0; i<(size*size); i++){
        // добавление элемента в cards
        let card = $("<div>");
        $(card).addClass("card");

        let flipper = $("<div>");
        $(flipper).addClass("flipper");

        let front = $("<div>");
        $(front).addClass("front");

        let back = $("<div>");
        $(back).addClass("back");

        $(flipper).append(back)
        $(flipper).prepend(front)
        $(card).append(flipper)
        
        cards.push(card);
    }

    $("#field").html("");

    $("#field").css({
        "width": size*150+16 + "px",
        "margin-left": (window.innerWidth + size*150+16)/2 + "px"
    })
    $("#field").append(cards);
    console.log(cards);

   
} 


$("#btn").click(function(event) { 
    size = $("#size").val(); 
    alert(size);
    if (size%2 == 0){
        generateField(size);
    }
    else{
        alert("НЕЧЕТНОЕ!!!!!!")
    }

});



$(".flipper").click(function(event){
    $(event.currentTarget).toggleClass("clicked")

});
