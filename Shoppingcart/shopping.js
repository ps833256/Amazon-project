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

let matchedCardData = JSON.parse(localStorage.getItem("matchcarddata"));
if (matchedCardData === null) {
  matchedCardData = [];
}

function Carddisplay(data) {
  data.forEach((element) => {
    let productimgdiv = document.createElement("div");
    productimgdiv.setAttribute("id", "productimgdiv");

    let shoppingcartimage = document.createElement("img");
    shoppingcartimage.setAttribute("id", "shoppingcartimage");
    shoppingcartimage.setAttribute("src", element.image);

    let title = document.createElement("p");
    title.innerText = element.title;

    let instockdiv = document.createElement("div");
    instockdiv.setAttribute("id", "instockdiv");

    let instock = document.createElement("p");
    instock.innerText = "In stock";

    let eligiblediv = document.createElement("div");
    eligiblediv.setAttribute("id", "eligiblediv");

    let eligibleforfree = document.createElement("p");
    eligibleforfree.innerText = "Eligible for FREE Shipping";

    let fullfilleddiv = document.createElement("div");
    fullfilleddiv.setAttribute("id", "fullfilleddiv");

    let fullfillimg = document.createElement("img");
    fullfillimg.setAttribute(
      "src",
      "https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
    );

    let sizediv = document.createElement("div");
    sizediv.setAttribute("id", "sizediv");
    sizediv.innerText = "Size: 36";

    let colordiv = document.createElement("div");
    colordiv.setAttribute("id", "colordiv");
    colordiv.innerText = "Color: Navy Blue";

    let quantitydiv = document.createElement("div");
    quantitydiv.setAttribute("id", "quantitydiv");

    let price = document.createElement("p");
    price.setAttribute("id", "price");
    price.innerText = `${element.price}.00`;

    let subtotalprice = document.createElement("p");
    subtotalprice.setAttribute("id", "subtotalprice");
    subtotalprice.innerText = `${element.price}.00`;

    let rightsectionprice= document.createElement("p")
    rightsectionprice.setAttribute("id", "rightsectionprice")
    rightsectionprice.innerText= `${element.price}.00`


    document.getElementById("rightsectionprice").append(rightsectionprice)

    document.getElementById("Quantity").addEventListener("change", function () {
      let quantity = document.getElementById("Quantity").value;
      if (quantity === 1) {
        subtotalprice.innerText = `${element.price}.00`;
      } else {
        subtotalprice.innerText = `${element.price * quantity}.00`;
      }
    });

    document.getElementById("delbtn").addEventListener("click", function(){

     document.getElementById("shoppingcardcontainer").innerHTML=null

     
    
    })

    document.getElementById("subtotalprice").append(subtotalprice);
    document.getElementById("price").append(price);

    instockdiv.append(instock);
    eligiblediv.append(eligibleforfree);
    fullfilleddiv.append(fullfillimg);

    document
      .getElementById("titledivcont")
      .prepend(
        title,
        instockdiv,
        eligiblediv,
        fullfilleddiv,
        sizediv,
        colordiv
      );

    productimgdiv.append(shoppingcartimage);
    document
      .getElementById("shoppingcartsection")
      .prepend(productimgdiv, titledivcont);
  });
}

Carddisplay(matchedCardData);
