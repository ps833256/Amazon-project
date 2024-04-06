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

let searcheddata = JSON.parse(localStorage.getItem("searchdata"));
if (searcheddata === null) {
  searcheddata = [];
}

searcheddata.forEach((element) => {
  let carddiv = document.createElement("div");
  carddiv.setAttribute("class", "carddiv");

  let imgdiv = document.createElement("div");
  imgdiv.setAttribute("class", "imgdiv");

  let productimg = document.createElement("img");
  productimg.setAttribute("class", "productimg");
  productimg.setAttribute("src", element.image);

  let brand = document.createElement("p");
  brand.setAttribute("class", "brand");
  brand.innerText = element.brand;

  let title = document.createElement("p");
  title.setAttribute("class", "title");
  title.innerText = element.title;

  let rating = document.createElement("p");
  rating.setAttribute("class", "rating");
  rating.innerText = `Rating: ${element.rating}`;

  let price = document.createElement("p");
  price.setAttribute("class", "price");
  price.innerText = ` M.R.P: ₹${element.price}`;

  let del = document.createElement("p");
  del.setAttribute("class", "delivery");
  del.innerText = element.delivery;

  imgdiv.append(productimg);

  carddiv.append(imgdiv, brand, title, rating, price, del);

  document.getElementById("cont").append(carddiv);

  if (element.badge) {
    let deal = document.createElement("div");
    deal.setAttribute("class", "deal");
    deal.innerText = element.badge;
    carddiv.append(deal);
  }
});
