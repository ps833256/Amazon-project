
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

function Carddisplay(data) {
    
    data.forEach(element => {

        let productimgdiv= document.createElement("div")
        productimgdiv.setAttribute("id", "productimgdiv")

        let shoppingcartimage= document.createElement("img")
        shoppingcartimage.setAttribute("id", "shoppingcartimage")
        shoppingcartimage.setAttribute("src", element.image)

        let titledivcont= document.createElement("div")
        titledivcont.setAttribute("id", "titledivcont")

        let title= document.createElement("p")
        title.innerText= element.title

        titledivcont.append(title)

        productimgdiv.append(shoppingcartimage)
        document.getElementById("shoppingcartsection").append(productimgdiv,titledivcont )

        

        
    });
    
}

Carddisplay(matchedCardData)