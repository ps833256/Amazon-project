
document.getElementById("contbtn").addEventListener("click",function(){
    
    let inputdata=[]

    let inputval= document.getElementById("emailinput").value

    inputdata.push(inputval)

    console.log(inputdata)

   localStorage.setItem("enteredinput",JSON.stringify(inputdata))


})