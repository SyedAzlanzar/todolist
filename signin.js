var a;
var b;
var signin = function () {
  const emailId = document.getElementById("emailId").value;
  // var userNameId = document.getElementById("userNameId").value
  const passwordId = document.getElementById("passwordId").value;
  const users = JSON.parse(localStorage.getItem("users"));


  users.forEach(function(user,index){
    if (user.email === emailId) {
        if (user.password ===  passwordId) {
            localStorage.setItem("authenticated-user", JSON.stringify(user));
          user += {}
          // user += [users];
            Swal.fire("log-in successfull");
            window.location.href = "./dashboard.html";
          }
          else {
              Swal.fire("Password is incorrect");
              return;
          }

        }
    else if(emailId === '') {
       Swal.fire("Invalid Email or Password");
       return
    }
    else{
      Swal.fire("Invalid Email")
      return
    }
    
  });
  
};
var signin_btn = document.getElementById("signin_btn");
signin_btn.addEventListener("click", signin);
