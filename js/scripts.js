
function mypingfunction(myresult){
  var storedarray = [];

  for (var i = 1; i <= myresult; i++) {
    if ((i%15) === 0) {
      storedarray.push("pingpong");
    }else if ((i%5) === 0 ){
      storedarray.push("pong");
    }else if ((i%3) === 0) {
      storedarray.push("ping");
    }else {
      storedarray.push(i);
    }
  }
// alert(storedarray);
return storedarray;
}

$(document).ready(function(){
  $("form#myformid").submit(function(event){
    $("#answers").empty();
    var myresult = parseInt($("input#mynumber").val());
     var storedarray = mypingfunction(myresult);
     storedarray.forEach(function(myouttput){
       $("#answers").append(myouttput + "</br>");
       $("#mynumber").val('');
       event.preventDefault();
     });
  });
});
