
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
        userdata.push(obj)
        localStorage.setItem("userdata", JSON.stringify(userdata))
    }


})
