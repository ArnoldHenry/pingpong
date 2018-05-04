function pongfunction(myinput){
var emptyarray = [];

for (var i = 0; i <= myinput; i++) {
  if ((i%3) == 0) {
    emptyarray.push("ping");
  }else if ((i%5) == 0) {
    emptyarray.push("pong");
  }else if ((i%15) == 0) {
    emptyarray.push("pingpong");
  }else {
    emptyarray.push(i);
  }
  // return emptyarray;
  alert(emptyarray);
}
}



$(document).ready(function(){
  $("form#myform").submit(function(event){
    $("#results").empty();
    var convertinput = parseInt($("input#convertinput").val());
    var functionvariable = pongfunction(myinput);
    functionvariable.forEach(function(newvariable){
      $("#results").append(newvariable+"</br>");
      event.preventDefault();

    });
  });
});
