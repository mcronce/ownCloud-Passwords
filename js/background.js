var passwordJson;

$(document).ready(function(){

 // checkIfLoggedIn();
  $("form").submit(function(e) {

    e.preventDefault();

    var server = $("form #server").val();
    var user = $("form #user").val();
    var password = $("form #password").val();

    console.log("Server: " + server);
    console.log("User: " + user);
    console.log("Password: " + password);
    
    passwordJson = getLoginJson(server, user, password);
  });
});