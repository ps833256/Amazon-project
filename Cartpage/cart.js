document
  .getElementById("lanselectdiv")
  .addEventListener("mouseover", function () {
    document.getElementById("langhoverdiv").style.display = "block";
    document.getElementById("langhoverdiv").style.opacity = 1;
  });

document
  .getElementById("lanselectdiv")
  .addEventListener("mouseout", function () {
    document.getElementById("langhoverdiv").style.display = "none";
    document.getElementById("langhoverdiv").style.opacity = 0;
  });

document.getElementById("signindiv").addEventListener("mouseover", function () {
  document.getElementById("signinhoverdiv").style.display = "block";
  document.getElementById("signinhoverdiv").style.opacity = 1;
});

document.getElementById("signindiv").addEventListener("mouseout", function () {
  document.getElementById("signinhoverdiv").style.display = "none";
  document.getElementById("signinhoverdiv").style.opacity = 0;
});

document.getElementById("baricon").addEventListener("click", function () {
  document.getElementById("allhoverdiv").style.display = "block";
});

document
  .getElementById("crossicon")
  .addEventListener("click", function (event) {
    event.stopPropagation();

    document.getElementById("allhoverdiv").style.display = "none";
  });


let matchedCardData= JSON.parse(localStorage.getItem("matchcarddata"));
if (matchedCardData===null) {
    matchedCardData=[]
    
}

console.log(matchedCardData)


function carddisplay(data) {


    data.forEach(element => {

        let imagediv= document.createElement("div")
        imagediv.setAttribute("id", "imagediv")

        let productimg= document.createElement("img")
        productimg.setAttribute("id","productimg" )
        productimg.setAttribute("src", element.image)

        imagediv.append(productimg)

        document.getElementById("productimgdiv").append(imagediv)

        
    });
    
}

carddisplay(matchedCardData)