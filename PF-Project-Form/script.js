// ---------------------------------functions to display and hide password--------------------------------------------------------

const passwordInput = document.getElementById("passwordInput");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    togglePassword.textContent = "Show";
  }
});

const passwordInput1 = document.getElementById("conf-passwordInput");
const togglePassword1 = document.getElementById("conf-togglePassword");

togglePassword1.addEventListener("click", function () {
  if (passwordInput1.type === "password") {
    passwordInput1.type = "text";
    togglePassword1.textContent = "Hide";
  } else {
    passwordInput1.type = "password";
    togglePassword1.textContent = "Show";
  }
});

// --------------------------------Function to Store data in Local Storage---------------------------------------------------------------

function test() {
    const password = document.getElementById("passwordInput").value;
    const confirmPassword = document.getElementById("conf-passwordInput").value;

  if(password != confirmPassword){
    alert("Password didn't Match")
  }

  else{
    const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
          const email = document.getElementById("email").value;
           const password = document.getElementById("passwordInput").value;
  //const confirmPassword = document.getElementById("con-password").value;
           const address = document.getElementById("address").value;
           const phone = document.getElementById("phone").value;
           const profilePicture = document.getElementById("image").value;

  const info = {
    firstName,
    lastName,
    email,
    password,
    address,
    phone,
    profilePicture,

     //alert(firstName + lastName + email + password + address + phone );
  }

// -------validating Empty Fields in Signup Page--------------------------------------------------------

  if(firstName=="" || email=="" || password==""){
    alert('Please fill all the fields')
  
  }
 


//  -----------------Storing in Local Storage-------------------------------------------------------------
  else{
    localStorage.setItem("info", JSON.stringify(info));

  //   // You can redirect the user to another page or perform other actions here
  alert("Signup successful!");

  }
}
}

// --------------------------Login Credentials Validating--------------------------------------------------------------------------------------
function validate(){
  var logemail = document.getElementById("login-email").value;
  var logpassword = document.getElementById("login-password").value;

  var localemail = localStorage.getItem("email");
  var localpassword = localStorage.getItem("password"); 

  if(logemail==localemail && logpassword == localpassword){
    alert("Login Successfull")
  }
  else{
    alert("Invalid Credentials")
  }

}