let registereddata=  JSON.parse(localStorage.getItem("userdata"))
let username= JSON.parse(localStorage.getItem("enteredinput"))
document.getElementById("inputnum").innerText= username


document.getElementById("signinbtn").addEventListener("click",function(){

    let passwordval= document.getElementById("password").value  
    let flag= false;
    for(let i= 0; i< registereddata.length; i++ ){
        if(username[i]===registereddata[i].usermob && passwordval===registereddata[i].userpassword){
            flag=true;
            break;
        }

    }

    if(flag){
      let homepage= document.createElement("a")
      homepage.setAttribute("href", "../../Homepage/home.html")
      homepage.click()

    }else if(passwordval==="")
       alert("Please fill your password")
    
    else{
        alert("Wrong password")
    }

})
