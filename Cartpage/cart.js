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

function carddisplay(data) {


    data.forEach(element => {

        let imagediv= document.createElement("div")
        imagediv.setAttribute("id", "imagediv")

        let titlediv= document.createElement("div")
        titlediv.setAttribute("id", "titlediv")

        let titleheading= document.createElement("h1")
        titleheading.innerText= element.title

        let searchanchor= document.createElement("a")
        searchanchor.setAttribute("id", "searchanchor")
        searchanchor.innerText= "Search this Page"

        let sepator= document.createElement("hr")

        let pricediv= document.createElement("div")
        pricediv.setAttribute("id", "pricediv")
        let pricesymbol= document.createElement("div")
        pricesymbol.setAttribute("id", "pricesymbol")
        pricesymbol.innerText= "₹"
        pricediv.innerText= `${element.price}`

        let inclusive= document.createElement("div")
        inclusive.setAttribute("id", "inclusive")
        inclusive.innerText= "Inclusive of all taxes"

        let netPrice= document.createElement("div")
        netPrice.setAttribute("id", "netprice")
        let netPricesymbol= document.createElement("div")
        netPricesymbol.setAttribute("id", "netPricesymbol")
        let zerodiv= document.createElement("div")
        zerodiv.setAttribute("id", "zerodiv")
        netPricesymbol.innerText= "₹"
        netPrice.innerText= `${element.price}`
        zerodiv.innerText= "00"

        let deliverydatediv= document.createElement("div")
        deliverydatediv.setAttribute("id", "deliverydatediv")
        deliverydatediv.innerText= "FREE delivery Wednesday, 10 April. Order within 10 hrs 2 mins. Details"

        
        
        pricesymbol.append(pricediv)
        netPricesymbol.append(netPrice, zerodiv)

        let productimg= document.createElement("img")
        productimg.setAttribute("id","productimg" )
        productimg.setAttribute("src", element.image)

        imagediv.append(productimg)
        titlediv.append(titleheading)

        document.getElementById("productimgdiv").append(imagediv)
        document.getElementById("descriptiondiv").prepend(titlediv, searchanchor, sepator, pricesymbol, inclusive )
        document.getElementById("pricedivsection").prepend(netPricesymbol)

        
    });
    
}

carddisplay(matchedCardData)


document.getElementById("addtocartbtn").addEventListener("click", function(){

  let shoppingcart= document.createElement("a")
  shoppingcart.setAttribute("href", "../Shoppingcart/shopping.html")
  shoppingcart.click()
  

})