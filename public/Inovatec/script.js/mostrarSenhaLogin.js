var btn = document.getElementById('btnLogin')


btn.addEventListener('click', function(){
    let password = document.getElementById('passwordLogin')
    
  

    if((passwordLogin.type == "password")){
        passwordLogin.type = "text"
        
        
    }else{
        passwordLogin.type = "password"
        
    }
})