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

function display(data) {
  document.getElementById("cont").innerHTML = null;
  data.forEach((element) => {
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
}

display(searcheddata);

document.getElementById("fivestar").addEventListener("click", function () {
  document.getElementById("fivestarup").style.fontSize = "16px";
  document.getElementById("fourstarup").style.fontSize = "12px";
  document.getElementById("threestarup").style.fontSize = "12px";

  let fivestarproducts = [];

  searcheddata.forEach((element) => {
    if (element.rating >= parseInt(4)) {
      fivestarproducts.push(element);
    }
  });

  console.log(fivestarproducts);
  display(fivestarproducts);
});

document.getElementById("fourstar").addEventListener("click", function () {
  document.getElementById("fourstarup").style.fontSize = "16px";
  document.getElementById("fivestarup").style.fontSize = "12px";
  document.getElementById("threestarup").style.fontSize = "12px";

  let fourstarproducts = [];

  searcheddata.forEach((element) => {
    if (element.rating >= parseInt(3)) {
      fourstarproducts.push(element);
    }
  });

  console.log(fourstarproducts);
  display(fourstarproducts);
});

document.getElementById("threestar").addEventListener("click", function () {
  document.getElementById("threestarup").style.fontSize = "16px";
  document.getElementById("fourstarup").style.fontSize = "12px";
  document.getElementById("fivestarup").style.fontSize = "12px";

  let threestarproducts = [];

  searcheddata.forEach((element) => {
    if (element.rating >= parseInt(2)) {
      threestarproducts.push(element);
    }
  });

  console.log(threestarproducts);
  display(threestarproducts);
});

document.getElementById("Arrow").addEventListener("change", function () {
  let Arrowproducts = [];

  searcheddata.forEach((element) => {
    if (element.brand === document.getElementById("Arrow").value) {
      Arrowproducts.push(element);
    }
  });

  display(Arrowproducts);
});

document.getElementById("AllenSolly").addEventListener("change", function () {
  let AllenSollyproducts = [];

  searcheddata.forEach((element) => {
    if (element.brand === document.getElementById("AllenSolly").value) {
      AllenSollyproducts.push(element);
    }
  });

  console.log(AllenSollyproducts);

  display(AllenSollyproducts);
});

document.getElementById("Levi's").addEventListener("change", function () {
  let Levisproducts = [];

  searcheddata.forEach((element) => {
    if (element.brand === document.getElementById("Levi's").value) {
      Levisproducts.push(element);
    }
  });

  console.log(Levisproducts);

  display(Levisproducts);
});

document
  .getElementById("UrbanoFashion")
  .addEventListener("change", function () {
    let UrbanoFashionproducts = [];

    searcheddata.forEach((element) => {
      if (element.brand === document.getElementById("UrbanoFashion").value) {
        UrbanoFashionproducts.push(element);
      }
    });

    console.log(UrbanoFashionproducts);

    display(UrbanoFashionproducts);
  });

document.getElementById("PeterEngland").addEventListener("change", function () {
  let PeterEnglandproducts = [];

  searcheddata.forEach((element) => {
    if (element.brand === document.getElementById("PeterEngland").value) {
      PeterEnglandproducts.push(element);
    }
  });

  console.log(PeterEnglandproducts);

  display(PeterEnglandproducts);
});

document.getElementById("PepeJeans").addEventListener("change", function () {
  let PepeJeansproducts = [];

  searcheddata.forEach((element) => {
    if (element.brand === document.getElementById("PepeJeans").value) {
      PepeJeansproducts.push(element);
    }
  });

  display(PepeJeansproducts);
});

document
  .getElementById("U.S. POLO ASSN.")
  .addEventListener("change", function () {
    let USPOLOASSNproducts = [];

    searcheddata.forEach((element) => {
      if (element.brand === document.getElementById("U.S. POLO ASSN.").value) {
        USPOLOASSNproducts.push(element);
      }
    });

    display(USPOLOASSNproducts);
  });

document.getElementById("Billford").addEventListener("change", function () {
  let Billfordproducts = [];

  searcheddata.forEach((element) => {
    if (element.brand === document.getElementById("Billford").value) {
      Billfordproducts.push(element);
    }
  });

  display(Billfordproducts);
});

function onlyOne(checkbox) {
  var checkboxes = document.querySelectorAll(".brand-checkbox");
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}

document.getElementById("price1").addEventListener("click", function () {
  let threehundredproducts = [];

  searcheddata.forEach((element) => {
    if (Number(element.price) <= 300) {
      threehundredproducts.push(element);
    }
  });

  console.log(threehundredproducts);
  display(threehundredproducts)
});

document.getElementById("price2").addEventListener("click", function () {
  let threehundredproducts = [];

  searcheddata.forEach((element) => {
    if (Number(element.price) >= 300 && Number(element.price) <= 500) {
      threehundredproducts.push(element);
    }
  });

  console.log(threehundredproducts);
  display(threehundredproducts)
});

document.getElementById("price3").addEventListener("click", function () {
  let threehundredproducts = [];

  searcheddata.forEach((element) => {
    if (Number(element.price) >= 500 && Number(element.price) <= 1000) {
      threehundredproducts.push(element);
    }
  });

  console.log(threehundredproducts);
  display(threehundredproducts)
});

document.getElementById("price4").addEventListener("click", function () {
  let threehundredproducts = [];

  searcheddata.forEach((element) => {
    if (Number(element.price) >= 1000 && Number(element.price) <= 1500) {
      threehundredproducts.push(element);
    }
  });

  console.log(threehundredproducts);
  display(threehundredproducts)
});

document.getElementById("price5").addEventListener("click", function () {
  let threehundredproducts = [];

  searcheddata.forEach((element) => {
    if (Number(element.price) >= 1500) {
      threehundredproducts.push(element);
    }
  });

  console.log(threehundredproducts);
  display(threehundredproducts)
});
