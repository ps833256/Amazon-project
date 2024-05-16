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


let addtocartdata = JSON.parse(localStorage.getItem("addtocartproduct"))

console.log(addtocartdata)


let pricedata = []


function display(data) {

 

  for (let i = 0; i < data.length; i++) {

    let card = document.createElement("div")
    card.setAttribute("class", "card")


    let imagediv = document.createElement("div")
    imagediv.setAttribute("class", "imagediv")
    let img = document.createElement("img")
    img.setAttribute("src", data[i].image)
    img.setAttribute("class", "product-image")



    let titlediv = document.createElement("div")
    titlediv.setAttribute("class", "titlediv")

    let title = document.createElement("p")
    title.setAttribute("class", "title")
    title.innerText = data[i].title

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

    let quantitycontainer = document.createElement("div")
    quantitycontainer.setAttribute("class", "quantitycontainer")


    let quantitydiv = document.createElement("div");
    quantitydiv.setAttribute("id", "quantitydiv");

    let delbtndiv = document.createElement("div")
    delbtndiv.setAttribute("class", "delbtndiv")

    let delbtn = document.createElement("a")
    delbtn.innerText = "Delete"
    delbtn.setAttribute("id", "delbtn")

    delbtn.addEventListener("click", function () {

         let matchdata=[]
         for(let j=0; j<data.length; j++){
          if(i!==j){
            console.log(data[j])
            matchdata.push(data[j])
          }
         }

         document.getElementById("shoppingcartsection").innerHTML=null

         display(matchdata)

         localStorage.setItem("addtocartproduct",JSON.stringify(matchdata))

    })

    delbtndiv.append(delbtn)

    let quantity = document.createElement("select")


    for (let i = 1; i < 11; i++) {
      let option = document.createElement("option")
      option.innerText = i
      option.setAttribute("value", i)
      quantity.append(option)
    }



    quantitycontainer.append(quantitydiv, delbtndiv)


    let pricediv = document.createElement("p")
    pricediv.setAttribute("class", "pricediv")

    let price = document.createElement("p")
    price.innerText = `₹ ${data[i].price}.00`


    let subtotal = document.createElement("p")
    subtotal.setAttribute("id", "subtotal")

    pricedata.push(Number(data[i].price))


    quantitydiv.append(quantity)

    pricediv.append(price)

    titlediv.append(title, instock, eligiblediv, eligibleforfree, fullfilleddiv, sizediv, colordiv, quantitycontainer)


    imagediv.append(img)


    card.append(imagediv, titlediv, pricediv)


    document.getElementById("shoppingcartsection").append(card)



  }


 



}

display(addtocartdata)




document.getElementById("prceddtobuybtn").addEventListener("click", function () {

  let checkout = document.createElement("a")
  checkout.setAttribute("href", "../Checkout/checkout.html")
  checkout.click()


})


let sum = 0;

for (let i = 0; i < pricedata.length; i++) {
  sum = sum + pricedata[i]
}

console.log(sum)

let subtotal = document.createElement("p")
subtotal.setAttribute("id", "subtotal")

subtotal.innerText = ` SubTotal: ₹${sum}.00`

document.getElementById("subtotaldiv").append(subtotal)