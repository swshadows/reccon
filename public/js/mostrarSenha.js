var btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    let password = document.getElementById('password')
    let comfirmPassword = document.getElementById('new_password_confirm')
    let newPassword = document.getElementById('new_password')

    if((password.type == "password") && (comfirmPassword.type == "password") && (newPassword.type == "password")){
        password.type = "text"
        comfirmPassword.type = "text"
        newPassword.type = "text"
        
    }else{
        password.type = "password"
        comfirmPassword.type = "password"
        newPassword.type = "password"
        
    }
})