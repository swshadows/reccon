var btn = document.getElementById('btnLogin')


btn.addEventListener('click', function(){
    let password = document.getElementById('password')
    
  

    if((passwordLogin.type == "password")){
        passwordLogin.type = "text"
        
        
    }else{
        passwordLogin.type = "password"
        
    }
})