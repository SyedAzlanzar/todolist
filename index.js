var signup = function () {
  let users = JSON.parse(localStorage.getItem("users"));

  var emailId = document.getElementById("emailId").value;
  var userNameId = document.getElementById("userNameId").value;
  var passwordId = document.getElementById("passwordId").value;

  var user = {
    email: emailId,
    username: userNameId,
    password: passwordId,
  };

  if (users !== null) {
    users.push(user);
  } else {
    users = [user];
  }
  
  if (emailId !== "" && userNameId !== "" && passwordId !== "") {
    // })
    
    localStorage.setItem("users", JSON.stringify(users));
    var check = JSON.parse(localStorage.getItem("users"));
    console.log(check);

    window.location.href = "./signin.html?";
  }

  // check.forEach(function (task){

  //     if(task.email === emailId){
  //         Swal.fire('Already taken email,try different')
  //     }
  //     else if(task.username === userNameId){
  //         Swal.fire('Already taken username,try different')
  //         window.location.href = './signup.html?'
  //     }

  //     else{
  //          window.location.href = './signin.html?'
  //     }
};
var signup_btn = document.getElementById("signup_btn");
signup_btn.addEventListener("click", signup);
