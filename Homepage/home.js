

document.getElementById("lanselectdiv").addEventListener("mouseover", function(){
    document.getElementById("langhoverdiv").style.display = "block";
    document.getElementById("langhoverdiv").style.opacity = 1;

    
});

document.getElementById("lanselectdiv").addEventListener("mouseout", function(){
    document.getElementById("langhoverdiv").style.display = "none";
    document.getElementById("langhoverdiv").style.opacity = 0;

    
});



document.getElementById("signindiv").addEventListener("mouseover",function(){

    document.getElementById("signinhoverdiv").style.display= "block";
    document.getElementById("signinhoverdiv").style.opacity = 1;
})


document.getElementById("signindiv").addEventListener("mouseout", function(){
    document.getElementById("signinhoverdiv").style.display = "none";
    document.getElementById("signinhoverdiv").style.opacity = 0;

    
});
