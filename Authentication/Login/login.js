
let registereddata=  JSON.parse(localStorage.getItem("userdata"))
if(registereddata===null){
   registereddata=[]
}

document.getElementById("contbtn").addEventListener("click",function(){
    let inputval= document.getElementById("emailinput").value
    let inputdata=[]
    
    let flag= false;
    for(let i= 0; i < registereddata.length; i++){
     
        if(inputval===registereddata[i].usermob){
           flag=true;
           break;
        }
    }


    if(flag){
        inputdata.push(inputval)
        let loginpath= document.createElement("a")
        loginpath.setAttribute("href","../Password/password.html")
        localStorage.setItem("enteredinput",JSON.stringify(inputdata))
        loginpath.click()
       
    }

    else if(inputval===""){
        document.getElementById("emailinput").style.borderColor="red"
        document.getElementById("emailinput").style.boxShadow= "0 0 0 3px #c8f3fa, 0 1px 2px rgba(15,17,17,.15) inset";
        alert("Enter your mobile phone number")

    }else{
        alert("Wrong Username")
    }

})

