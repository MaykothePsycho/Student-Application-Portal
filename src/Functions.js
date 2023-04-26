export const girisKontrol = () => {

    var user = sessionStorage.getItem("user");

    if(user == null){
        sessionStorage.setItem("user","");
    }

    var isLogin = false;
        
    user = sessionStorage.getItem("user");
    const user_split = user.split(",");

   
    const mail = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const result = document.getElementById("result");

    if (mail == user_split[0] && password == user_split[1]) {

        result.innerHTML = "You've been logged in"; 
        result.style.color = "green";



        isLogin = true;

        sessionStorage.setItem("isLogin", isLogin);


    }
    else {
        result.innerHTML = "Your e-mail or password is wrong";
        result.style.color = "red";
    }


}


export const girisPortal = () => {
    const user_email = sessionStorage.getItem("email");
    const user_password = sessionStorage.getItem("password");
    return user_email && user_password;
  };