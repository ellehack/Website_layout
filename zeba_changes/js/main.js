document.getElementById('register-form').addEventListener('submit',saveUser);
function fetchUser() {
    var users = JSON.parse(localStorage.getItem('users'));
    //var user_namesList = document.getElementById('user_namesList');
    
    //user_namesList.innerHTML = '';
    
    for (var i = 0; i < users.length; i++) {
      var userId = users[i].userId;
      var name = users[i].name;
      var email = users[i].email;
      var pass = users[i].pass;
      //var status = users[i].status;
      
      user_namesList.innerHTML +=   '<div class="well">'+
                                '<h6>Issue ID: ' + userId + '</h6>'+
                                '<p><span class="label label-info">' + name + '</span></p>'+
                                '<h3>' + email + '</h3>'+
                                '</div>';
    }
  }

function saveUser(e) {
    var userId = chance.guid();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var user = {
      userId: userId,
      name: name,
      email: email,
      pass: pass,
    }
    
    if (localStorage.getItem('users') === null) {
      var users = [];
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      var users = JSON.parse(localStorage.getItem('users'));
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    }
    document.getElementById('register-form').reset();
    fetchUser();
    e.printDefault();
  }
  
  function createJSON() {
    jsonObj = [];
    $("input[class=email]").each(function() {

        var id = $(this).attr("title");
        var email = $(this).val();

        item = {}
        item ["title"] = id;
        item ["email"] = email;

        jsonObj.push(item);
    });

    console.log(jsonObj);
}