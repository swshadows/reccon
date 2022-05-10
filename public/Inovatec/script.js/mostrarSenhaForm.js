var btn = document.getElementById('btn')


btn.addEventListener('click', function(){
    let password = document.getElementById('password')
    let comfirmPassword = document.getElementById('comfirmPassword')
  

    if((password.type == "password") && (comfirmPassword.type == "password")){
        password.type = "text"
        comfirmPassword.type = "text"
        
    }else{
        password.type = "password"
        comfirmPassword.type = "password"
    }
})