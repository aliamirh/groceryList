$(document).ready(function(){
  $("form#list").submit(function(event){
    event.preventDefault();
    $("form#list").hide();
    var groceryItems = [];
    //
    // groceryItems[0] = $("input#item1").val();
    // groceryItems[1] = $("input#item2").val();
    // groceryItems[2] = $("input#item3").val();

    var index = 0;


    for ( i = 0; i < 3; i++){
      groceryItems[i] = $("input#item" + (i+1) ).val();
    }




    var capitalizedItems = groceryItems.map(function(item){
      return item.toUpperCase();
      console.log(item);
    });

    capitalizedItems.sort();

    console.log(capitalizedItems);
    var i =0;


    capitalizedItems.forEach(function(item, i){
      i +=1;
      $("li#listItem" + i).append(item);

    });

    //insert output into li item ids



  });
});
