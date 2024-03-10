
let userdata= JSON.parse(localStorage.getItem("userdata"))
if(userdata===null){
    userdata=[]

}


document.getElementById("verify").addEventListener("click",function(){

    let username= document.getElementById("name").value
    let usermob= document.getElementById("mobilenum").value
    let userpassword= document.getElementById("passwordval").value
    
    let obj={
        username,
        usermob,
        userpassword

    }

    if(username==="" ||usermob==="" || userpassword==="" ){
       alert("Please fill all the details")
    }else{

        let flag= false;
        for(let i= 0; i<userdata.length; i++){
          if(usermob===userdata[i].usermob){
             flag= true;
             break;
          }
        }
    
        if(flag){
            alert("Already registered by this phone number")
    
        }else{
            let login= document.createElement("a")
            login.setAttribute("href", "../Login/login.html")
            login.setAttribute("target", "_blank")
            login.click()
            userdata.push(obj)
            localStorage.setItem("userdata", JSON.stringify(userdata))
        }
    

    }

   

})
