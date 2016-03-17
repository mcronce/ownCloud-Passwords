function getLoginJson(server, username, password) {
  $.ajax({
    type: "GET",
    url: server + "/index.php/apps/passwords/api/0.1/passwords",
    headers: {
    "Authorization": "Basic " + btoa(username + ":" + password),
    },
    success: function(json) {
      console.log(json);
      return json;
    },
    error: function(err) {
      console.log(err);
    }
  })
}