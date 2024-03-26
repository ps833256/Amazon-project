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

let bannerdata = [
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg",
  },
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/augatf23/hsbcunrec/MA_2x._CB580708889_.jpg",
  },
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg",
  },
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg",
  },
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/saba/branddays/5300---Kitchen---Citi-bank-strip._CB580044345_.png",
  },
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/saba/branddays/5300---Kitchen---Citi-bank-strip._CB580044345_.png",
  },
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/jan2024/Bau/Unrec/BOB/SHOES/Frame_386_3000pc._CB581979262_.jpg",
  },
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/BAU/Hero/D91435399_WLA-BAU-Unrec-Hero_DesktopTallHero_3000x1200-bau._CB582195367_.jpg",
  },
];

let i = 0;
function changeImage() {
  document.getElementById("cont").innerHTML = null

  let img = document.createElement("img")
  img.src = bannerdata[i].image
  img.setAttribute("width", "100%")
  img.setAttribute("height", "500px")
  cont.append(img)

  i = (i + 1) % bannerdata.length
}

document.getElementById("righticon").addEventListener("click", changeImage)

changeImage()

document.getElementById("lefticon").addEventListener("click", changeImage)

changeImage()

//card-1 //

let data1 = [
  {
    card1: {
      heading: "Up to 60% off | Styles for men",
      image1:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg",
      title1: "Clothing",
      image2:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg",
      title2: "Footwear",
      image3:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg",
      title3: "Watches",
      image4:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg",
      title4: "Bags & clothes",

      ending: "End of season sale",
    },
  },
];

for (let i = 0; i < data1.length; i++) {
  let head = document.createElement("h1");
  head.innerText = data1[0].card1.heading;

  let firstimgdiv = document.createElement("div");
  let secondimgdiv = document.createElement("div");
  let thirdimgdiv = document.createElement("div");
  thirdimgdiv.setAttribute("class", "thirdimgdiv");
  let forthimgdiv = document.createElement("div");
  forthimgdiv.setAttribute("class", "forthimgdiv");

  let firstsection = document.createElement("div");
  firstsection.setAttribute("class", "firstsection");
  let secondsection = document.createElement("div");
  secondsection.setAttribute("class", "secondsection");

  let card1img = document.createElement("img");
  card1img.setAttribute("src", data1[0].card1.image1);

  let img1titile = document.createElement("p");
  img1titile.innerText = data1[0].card1.title1;

  firstimgdiv.append(card1img, img1titile);
  firstimgdiv.setAttribute("class", "firstimgdiv");

  let card2img = document.createElement("img");
  card2img.setAttribute("src", data1[0].card1.image2);

  let img2titile = document.createElement("p");
  img2titile.innerText = data1[0].card1.title2;

  secondimgdiv.append(card2img, img2titile);
  secondimgdiv.setAttribute("class", "secondimgdiv");

  let card3img = document.createElement("img");
  card3img.setAttribute("src", data1[0].card1.image3);

  let img3titile = document.createElement("p");
  img3titile.innerText = data1[0].card1.title3;

  thirdimgdiv.append(card3img, img3titile);

  let card4img = document.createElement("img");
  card4img.setAttribute("src", data1[0].card1.image4);

  let img4titile = document.createElement("p");
  img4titile.innerText = data1[0].card1.title4;

  let endofseson = document.createElement("a");
  endofseson.innerText = data1[0].card1.ending;
  endofseson.setAttribute("id", "endofseson");
  endofseson.setAttribute("href", "#");

  forthimgdiv.append(card4img, img4titile);

  secondsection.append(thirdimgdiv, forthimgdiv);
  firstsection.append(firstimgdiv, secondimgdiv);

  document
    .getElementById("card1")
    .append(head, firstsection, secondsection, endofseson);
  document.querySelector(".cardcontainer").append(card1);
}

// card-2 //

let data2 = [
  {
    card2: {
      heading: "Appliances for your home | Up to 55% off",
      image1:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
      title1: "Air conditioners",
      image2:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
      title2: "Refrigerator",
      image3:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
      title3: "Microwaves",
      image4:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
      title4: "Washing Machine",

      ending: "See more",
    },
  },
];

for (let i = 0; i < data2.length; i++) {
  let head = document.createElement("h1");
  head.innerText = data2[0].card2.heading;

  let firstimgdiv = document.createElement("div");
  let secondimgdiv = document.createElement("div");
  let thirdimgdiv = document.createElement("div");
  thirdimgdiv.setAttribute("class", "thirdimgdiv");
  let forthimgdiv = document.createElement("div");
  forthimgdiv.setAttribute("class", "forthimgdiv");

  let firstsection = document.createElement("div");
  firstsection.setAttribute("class", "firstsection");
  let secondsection = document.createElement("div");
  secondsection.setAttribute("class", "secondsection");

  let card1img = document.createElement("img");
  card1img.setAttribute("src", data2[0].card2.image1);

  let img1titile = document.createElement("p");
  img1titile.innerText = data2[0].card2.title1;

  firstimgdiv.append(card1img, img1titile);
  firstimgdiv.setAttribute("class", "firstimgdiv");

  let card2img = document.createElement("img");
  card2img.setAttribute("src", data2[0].card2.image2);

  let img2titile = document.createElement("p");
  img2titile.innerText = data2[0].card2.title2;

  secondimgdiv.append(card2img, img2titile);
  secondimgdiv.setAttribute("class", "secondimgdiv");

  let card3img = document.createElement("img");
  card3img.setAttribute("src", data2[0].card2.image3);

  let img3titile = document.createElement("p");
  img3titile.innerText = data2[0].card2.title3;

  thirdimgdiv.append(card3img, img3titile);

  let card4img = document.createElement("img");
  card4img.setAttribute("src", data2[0].card2.image4);

  let img4titile = document.createElement("p");
  img4titile.innerText = data2[0].card2.title4;

  let endofseson = document.createElement("a");
  endofseson.innerText = data2[0].card2.ending;
  endofseson.setAttribute("id", "endofseson");
  endofseson.setAttribute("href", "#");

  forthimgdiv.append(card4img, img4titile);

  secondsection.append(thirdimgdiv, forthimgdiv);
  firstsection.append(firstimgdiv, secondimgdiv);

  document
    .getElementById("card2")
    .append(head, firstsection, secondsection, endofseson);
  document.querySelector(".cardcontainer").append(card2);
}

// card-3

let data3 = [
  {
    card3: {
      heading: "Revamp your home in style",
      image1:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_furnishings_2._SY116_CB584596691_.jpg",
      title1: "Cushion covers, bedsheets & more",
      image2:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg",
      title2: "Figurines, vases and more",
      image3:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_storage_1._SY116_CB584596691_.jpg",
      title3: "Home storage",
      image4:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_lighting_2._SY116_CB584596691_.jpg",
      title4: "Lighting solutions",

      ending: "Explore all",
    },
  },
];

for (let i = 0; i < data3.length; i++) {
  let head = document.createElement("h1");
  head.innerText = data3[0].card3.heading;

  let firstimgdiv = document.createElement("div");
  firstimgdiv.setAttribute("class", "firstimgdiv");
  let secondimgdiv = document.createElement("div");
  secondimgdiv.setAttribute("class", "secondimgdiv");
  let thirdimgdiv = document.createElement("div");
  thirdimgdiv.setAttribute("class", "thirdimgdiv");
  let forthimgdiv = document.createElement("div");
  forthimgdiv.setAttribute("class", "forthimgdiv");

  let firstsection = document.createElement("div");
  firstsection.setAttribute("class", "firstsection");
  let secondsection = document.createElement("div");
  secondsection.setAttribute("class", "secondsection");

  let card1img = document.createElement("img");
  card1img.setAttribute("src", data3[0].card3.image1);

  let img1titile = document.createElement("p");
  img1titile.innerText = data3[0].card3.title1;

  firstimgdiv.append(card1img, img1titile);

  let card2img = document.createElement("img");
  card2img.setAttribute("src", data3[0].card3.image2);

  let img2titile = document.createElement("p");
  img2titile.innerText = data3[0].card3.title2;

  secondimgdiv.append(card2img, img2titile);

  let card3img = document.createElement("img");
  card3img.setAttribute("src", data3[0].card3.image3);

  let img3titile = document.createElement("p");
  img3titile.innerText = data3[0].card3.title3;

  thirdimgdiv.append(card3img, img3titile);

  let card4img = document.createElement("img");
  card4img.setAttribute("src", data3[0].card3.image4);

  let img4titile = document.createElement("p");
  img4titile.innerText = data3[0].card3.title4;

  let exploreall = document.createElement("a");
  exploreall.innerText = data3[0].card3.ending;
  exploreall.setAttribute("id", "exploreall");
  exploreall.setAttribute("href", "#");

  forthimgdiv.append(card4img, img4titile);

  secondsection.append(thirdimgdiv, forthimgdiv);

  firstsection.append(firstimgdiv, secondimgdiv);

  document
    .getElementById("card3")
    .append(head, firstsection, secondsection, exploreall);
  document.querySelector(".cardcontainer").append(card3);
}

// card-4//

let data4 = [
  {
    card4: {
      heading: "Up to 75% off | Headphones",
      image1:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boat_Desktop_Qc_1x._SY116_CB577919562_.jpg",
      title1: "Up to 75% off | boAt",
      image2:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boult_Desktop_Qc_1x._SY116_CB577919562_.jpg",
      title2: "Up to 75% off | boult",
      image3:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Noise_Desktop_Qc_1x._SY116_CB577919562_.jpg",
      title3: "Up to 75% off | Noise",
      image4:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Zebronics_Desktop_Qc_1x._SY116_CB577919562_.jpg",
      title4: "Up to 75% off | Zebronics",

      ending: "See all offers",
    },
  },
];

for (let i = 0; i < data4.length; i++) {
  let head = document.createElement("h1");
  head.innerText = data4[0].card4.heading;

  let firstimgdiv = document.createElement("div");
  firstimgdiv.setAttribute("class", "firstimgdiv");
  let secondimgdiv = document.createElement("div");
  secondimgdiv.setAttribute("class", "secondimgdiv");
  let thirdimgdiv = document.createElement("div");
  thirdimgdiv.setAttribute("class", "thirdimgdiv");
  let forthimgdiv = document.createElement("div");
  forthimgdiv.setAttribute("class", "forthimgdiv");

  let firstsection = document.createElement("div");
  firstsection.setAttribute("class", "firstsection");
  let secondsection = document.createElement("div");
  secondsection.setAttribute("class", "secondsection");

  let card1img = document.createElement("img");
  card1img.setAttribute("src", data4[0].card4.image1);

  let img1titile = document.createElement("p");
  img1titile.innerText = data4[0].card4.title1;

  firstimgdiv.append(card1img, img1titile);

  let card2img = document.createElement("img");
  card2img.setAttribute("src", data4[0].card4.image2);

  let img2titile = document.createElement("p");
  img2titile.innerText = data4[0].card4.title2;

  secondimgdiv.append(card2img, img2titile);

  let card3img = document.createElement("img");
  card3img.setAttribute("src", data4[0].card4.image3);

  let img3titile = document.createElement("p");
  img3titile.innerText = data4[0].card4.title3;

  thirdimgdiv.append(card3img, img3titile);

  let card4img = document.createElement("img");
  card4img.setAttribute("src", data4[0].card4.image4);

  let img4titile = document.createElement("p");
  img4titile.innerText = data4[0].card4.title4;

  let exploreall = document.createElement("a");
  exploreall.innerText = data4[0].card4.ending;
  exploreall.setAttribute("id", "exploreall");
  exploreall.setAttribute("href", "#");

  forthimgdiv.append(card4img, img4titile);

  secondsection.append(thirdimgdiv, forthimgdiv);

  firstsection.append(firstimgdiv, secondimgdiv);

  document
    .getElementById("card4")
    .append(head, firstsection, secondsection, exploreall);
  document.querySelector(".cardcontainer").append(card4);
}

//card= 5

let data5 = [
  {
    card5: {
      heading: "Starting ₹99 | All your home improvement needs",
      image1:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_4._SY116_CB600489960_.jpg",
      title1: "Spin mops, wipes & more",
      image2:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_3._SY116_CB600489960_.jpg",
      title2: "Bathroom hardware & accessories",
      image3:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_7._SY116_CB600489960_.jpg",
      title3: "Hammers, screwdrivers & more",
      image4:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_5._SY116_CB600489960_.jpg",
      title4: "Extension boards, plugs & more",

      ending: "Explore all",
    },
  },
];

for (let i = 0; i < data5.length; i++) {
  let head = document.createElement("h1");
  head.innerText = data5[0].card5.heading;

  let firstimgdiv = document.createElement("div");
  firstimgdiv.setAttribute("class", "firstimgdiv");
  let secondimgdiv = document.createElement("div");
  secondimgdiv.setAttribute("class", "secondimgdiv");
  let thirdimgdiv = document.createElement("div");
  thirdimgdiv.setAttribute("class", "thirdimgdiv");
  let forthimgdiv = document.createElement("div");
  forthimgdiv.setAttribute("class", "forthimgdiv");

  let firstsection = document.createElement("div");
  firstsection.setAttribute("class", "firstsection");
  let secondsection = document.createElement("div");
  secondsection.setAttribute("class", "secondsection");

  let card1img = document.createElement("img");
  card1img.setAttribute("src", data5[0].card5.image1);

  let img1titile = document.createElement("p");
  img1titile.innerText = data5[0].card5.title1;

  firstimgdiv.append(card1img, img1titile);

  let card2img = document.createElement("img");
  card2img.setAttribute("src", data5[0].card5.image2);

  let img2titile = document.createElement("p");
  img2titile.innerText = data5[0].card5.title2;

  secondimgdiv.append(card2img, img2titile);

  let card3img = document.createElement("img");
  card3img.setAttribute("src", data5[0].card5.image3);

  let img3titile = document.createElement("p");
  img3titile.innerText = data5[0].card5.title3;

  thirdimgdiv.append(card3img, img3titile);

  let card4img = document.createElement("img");
  card4img.setAttribute("src", data5[0].card5.image4);

  let img4titile = document.createElement("p");
  img4titile.innerText = data5[0].card5.title4;

  let exploreall = document.createElement("a");
  exploreall.innerText = data5[0].card5.ending;
  exploreall.setAttribute("id", "exploreall");
  exploreall.setAttribute("href", "#");

  forthimgdiv.append(card4img, img4titile);

  secondsection.append(thirdimgdiv, forthimgdiv);

  firstsection.append(firstimgdiv, secondimgdiv);

  document
    .getElementById("card5")
    .append(head, firstsection, secondsection, exploreall);
  document.querySelector(".cardcontainer2").append(card5);
}

// card-6//

let data6 = [
  {
    card6: {
      heading: "Up to 60% off | Styles for women",
      image1:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg",
      title1: "Women's Clothing",
      image2:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg",
      title2: "Footwear+Handbags",
      image3:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg",
      title3: "Watches",
      image4:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg",
      title4: "Fashion jewellery",

      ending: "End of season sale",
    },
  },
];

for (let i = 0; i < data6.length; i++) {
  let head = document.createElement("h1");
  head.innerText = data6[0].card6.heading;

  let firstimgdiv = document.createElement("div");
  firstimgdiv.setAttribute("class", "firstimgdiv");
  let secondimgdiv = document.createElement("div");
  secondimgdiv.setAttribute("class", "secondimgdiv");
  let thirdimgdiv = document.createElement("div");
  thirdimgdiv.setAttribute("class", "thirdimgdiv");
  let forthimgdiv = document.createElement("div");
  forthimgdiv.setAttribute("class", "forthimgdiv");

  let firstsection = document.createElement("div");
  firstsection.setAttribute("class", "firstsection");
  let secondsection = document.createElement("div");
  secondsection.setAttribute("class", "secondsection");

  let card1img = document.createElement("img");
  card1img.setAttribute("src", data6[0].card6.image1);

  let img1titile = document.createElement("p");
  img1titile.innerText = data6[0].card6.title1;

  firstimgdiv.append(card1img, img1titile);

  let card2img = document.createElement("img");
  card2img.setAttribute("src", data6[0].card6.image2);

  let img2titile = document.createElement("p");
  img2titile.innerText = data6[0].card6.title2;

  secondimgdiv.append(card2img, img2titile);

  let card3img = document.createElement("img");
  card3img.setAttribute("src", data6[0].card6.image3);

  let img3titile = document.createElement("p");
  img3titile.innerText = data6[0].card6.title3;

  thirdimgdiv.append(card3img, img3titile);

  let card4img = document.createElement("img");
  card4img.setAttribute("src", data6[0].card6.image4);

  let img4titile = document.createElement("p");
  img4titile.innerText = data6[0].card6.title4;

  let exploreall = document.createElement("a");
  exploreall.innerText = data6[0].card6.ending;
  exploreall.setAttribute("id", "exploreall");
  exploreall.setAttribute("href", "#");

  forthimgdiv.append(card4img, img4titile);

  secondsection.append(thirdimgdiv, forthimgdiv);

  firstsection.append(firstimgdiv, secondimgdiv);

  document
    .getElementById("card6")
    .append(head, firstsection, secondsection, exploreall);
  document.querySelector(".cardcontainer2").append(card6);
}

// card- 7//

let data7 = [
  {
    card7: {
      heading: "Discover TVs by your ideal size | Starting ₹6,999",
      image1:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Manish/BAU/MARCH/pri/rev/revs/shop/32._SY116_CB578871436_.jpg",
      title1: "Budget TVs | Save extra with No Cost EMI",
      image2:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Manish/BAU/MARCH/pri/rev/revs/shop/43._SY116_CB578871436_.jpg",
      title2: "4K TVs | Up to 24 months No Cost EMI",
      image3:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Manish/BAU/MARCH/pri/rev/revs/shop/55._SY116_CB578871436_.jpg",
      title3: "Big Screens | Free installation",
      image4:
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Manish/BAU/MARCH/pri/rev/revs/shop/65._SY116_CB578871436_.jpg",
      title4: "Ultra Premium TVs | Up to 50% off",

      ending: "See all",
    },
  },
];

for (let i = 0; i < data7.length; i++) {
  let head = document.createElement("h1");
  head.innerText = data7[0].card7.heading;

  let firstimgdiv = document.createElement("div");
  firstimgdiv.setAttribute("class", "firstimgdiv");
  let secondimgdiv = document.createElement("div");
  secondimgdiv.setAttribute("class", "secondimgdiv");
  let thirdimgdiv = document.createElement("div");
  thirdimgdiv.setAttribute("class", "thirdimgdiv");
  let forthimgdiv = document.createElement("div");
  forthimgdiv.setAttribute("class", "forthimgdiv");

  let firstsection = document.createElement("div");
  firstsection.setAttribute("class", "firstsection");
  let secondsection = document.createElement("div");
  secondsection.setAttribute("class", "secondsection");

  let card1img = document.createElement("img");
  card1img.setAttribute("src", data7[0].card7.image1);

  let img1titile = document.createElement("p");
  img1titile.innerText = data7[0].card7.title1;

  firstimgdiv.append(card1img, img1titile);

  let card2img = document.createElement("img");
  card2img.setAttribute("src", data7[0].card7.image2);

  let img2titile = document.createElement("p");
  img2titile.innerText = data7[0].card7.title2;

  secondimgdiv.append(card2img, img2titile);

  let card3img = document.createElement("img");
  card3img.setAttribute("src", data7[0].card7.image3);

  let img3titile = document.createElement("p");
  img3titile.innerText = data7[0].card7.title3;

  thirdimgdiv.append(card3img, img3titile);

  let card4img = document.createElement("img");
  card4img.setAttribute("src", data7[0].card7.image4);

  let img4titile = document.createElement("p");
  img4titile.innerText = data7[0].card7.title4;

  let exploreall = document.createElement("a");
  exploreall.innerText = data7[0].card7.ending;
  exploreall.setAttribute("id", "exploreall");
  exploreall.setAttribute("href", "#");

  forthimgdiv.append(card4img, img4titile);

  secondsection.append(thirdimgdiv, forthimgdiv);

  firstsection.append(firstimgdiv, secondimgdiv);

  document
    .getElementById("card7")
    .append(head, firstsection, secondsection, exploreall);
  document.querySelector(".cardcontainer2").append(card7);
}

// Card- 8//

let data8 = [
  {
    card8: {
      heading: "Automotive essentials | Up to 60% off",
      image1:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
      title1: "Cleaning accessories",
      image2:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
      title2: "Tyre & rim care",
      image3:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
      title3: "Helmets",
      image4:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
      title4: "Vacuum cleaner",

      ending: "See more",
    },
  },
];

for (let i = 0; i < data8.length; i++) {
  let head = document.createElement("h1");
  head.innerText = data8[0].card8.heading;

  let firstimgdiv = document.createElement("div");
  firstimgdiv.setAttribute("class", "firstimgdiv");
  let secondimgdiv = document.createElement("div");
  secondimgdiv.setAttribute("class", "secondimgdiv");
  let thirdimgdiv = document.createElement("div");
  thirdimgdiv.setAttribute("class", "thirdimgdiv");
  let forthimgdiv = document.createElement("div");
  forthimgdiv.setAttribute("class", "forthimgdiv");

  let firstsection = document.createElement("div");
  firstsection.setAttribute("class", "firstsection");
  let secondsection = document.createElement("div");
  secondsection.setAttribute("class", "secondsection");

  let card1img = document.createElement("img");
  card1img.setAttribute("src", data8[0].card8.image1);

  let img1titile = document.createElement("p");
  img1titile.innerText = data8[0].card8.title1;

  firstimgdiv.append(card1img, img1titile);

  let card2img = document.createElement("img");
  card2img.setAttribute("src", data8[0].card8.image2);

  let img2titile = document.createElement("p");
  img2titile.innerText = data8[0].card8.title2;

  secondimgdiv.append(card2img, img2titile);

  let card3img = document.createElement("img");
  card3img.setAttribute("src", data8[0].card8.image3);

  let img3titile = document.createElement("p");
  img3titile.innerText = data8[0].card8.title3;

  thirdimgdiv.append(card3img, img3titile);

  let card4img = document.createElement("img");
  card4img.setAttribute("src", data8[0].card8.image4);

  let img4titile = document.createElement("p");
  img4titile.innerText = data8[0].card8.title4;

  let exploreall = document.createElement("a");
  exploreall.innerText = data8[0].card8.ending;
  exploreall.setAttribute("id", "exploreall");
  exploreall.setAttribute("href", "#");

  forthimgdiv.append(card4img, img4titile);

  secondsection.append(thirdimgdiv, forthimgdiv);

  firstsection.append(firstimgdiv, secondimgdiv);

  document
    .getElementById("card8")
    .append(head, firstsection, secondsection, exploreall);
  document.querySelector(".cardcontainer2").append(card8);
}

// today's deals section//

let todaydealsdata = [
  {
    mobdiv: {
      heading: "Todays Deals",
      subanchor: "See all deals",
      limited: "Limited time deals",
      image1: "https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg",
      title1: "Up to 20% off",
      title2: "iQOO Z9 5G || Newly Launched @17999",
      image2: "https://m.media-amazon.com/images/I/41m-C1HHkIL._AC_SY200_.jpg",
      title3: "Up to 11% off",
      title4:
        "iQOO Neo9 Pro | Starting 35999 Including add. offersiQOO Neo9 Pro | Starting 35999 Inclu…",
      image3: "https://m.media-amazon.com/images/I/41yAce7gd4L._AC_SY200_.jpg",
      title5: "11% off",
      title6:
        "iQOO Z7 Pro | Most loved Smartphone @21999iQOO Z7 Pro | Most loved Smartphon…",
      image4: "https://m.media-amazon.com/images/I/411gvmvNQzL._AC_SY200_.jpg",
      title7: "Up to 12% off",
      title8:
        "iQOO 12 5G | India's only Flagship with 50MP @ 50999iQOO 12 5G | India's only Flagship wit…",
      image5: "https://m.media-amazon.com/images/I/411iWoJEJjL._AC_SY200_.jpg",
      title9: "Up to 37% off",
      title10:
        "Redmi 13C | Starting from 7799 including additional offersRedmi 13C | Starting from 7799 inclu…",
      image6: "https://m.media-amazon.com/images/I/51JaSbauK3L._AC_SY200_.jpg",
      title11: "30% off",
      title12:
        "₹19,999.00M.R.P.: ₹28,499.00 Samsung Galaxy M34Samsung Galaxy M34",
      image7: "https://m.media-amazon.com/images/I/41888-BWxKL._AC_SY200_.jpg",
      title13: "45% off",
      title14:
        "₹5,999.00M.R.P.: ₹10,999.00 POCO C51 | Starting from 5499 including additional offersPOCO C51 | Starting from 5499 includ…",
      image8: "https://m.media-amazon.com/images/I/51o13K4h3-L._AC_SY200_.jpg",
      title15: "Up to 23% off",
      title16:
        "iQOO Neo 7 Pro | Powerful Smartphone @29999iQOO Neo 7 Pro | Powerful Smartpho…",
      image9: "https://m.media-amazon.com/images/I/41ArHnIL7uL._AC_SY200_.jpg",
      title17: "54% off",
      title18:
        "₹6,499.00M.R.P.: ₹13,999.00 POCO C55 | Starting from 5999 including additional offersPOCO C55 | Starting from 5999 includ…",
      image10: "https://m.media-amazon.com/images/I/41dEcQR7UnL._AC_SY200_.jpg",
      title19: "36% off",
      title20:
        "₹8,999.00M.R.P.: ₹13,999.00 Starting from 8999 including additional offersStarting from 8999 including addition…",
    },
  },
];

for (let i = 0; i < todaydealsdata.length; i++) {
  let product1div = document.createElement("div");
  product1div.setAttribute("class", "product1");

  let product2div = document.createElement("div");
  product2div.setAttribute("class", "product1");

  let product3div = document.createElement("div");
  product3div.setAttribute("class", "product1");

  let product4div = document.createElement("div");
  product4div.setAttribute("class", "product1");

  let product5div = document.createElement("div");
  product5div.setAttribute("class", "product1");

  let product6div = document.createElement("div");
  product6div.setAttribute("class", "product1");

  let product7div = document.createElement("div");
  product7div.setAttribute("class", "product1");

  let product8div = document.createElement("div");
  product8div.setAttribute("class", "product1");

  let product9div = document.createElement("div");
  product9div.setAttribute("class", "product1");

  let product10div = document.createElement("div");
  product10div.setAttribute("class", "product1");

  let imgdiv1 = document.createElement("div");
  imgdiv1.setAttribute("class", "imgdiv");

  let imgdiv2 = document.createElement("div");
  imgdiv2.setAttribute("class", "imgdiv");

  let imgdiv3 = document.createElement("div");
  imgdiv3.setAttribute("class", "imgdiv");

  let imgdiv4 = document.createElement("div");
  imgdiv4.setAttribute("class", "imgdiv");

  let imgdiv5 = document.createElement("div");
  imgdiv5.setAttribute("class", "imgdiv");

  let imgdiv6 = document.createElement("div");
  imgdiv6.setAttribute("class", "imgdiv");

  let imgdiv7 = document.createElement("div");
  imgdiv7.setAttribute("class", "imgdiv");

  let imgdiv8 = document.createElement("div");
  imgdiv8.setAttribute("class", "imgdiv");

  let imgdiv9 = document.createElement("div");
  imgdiv9.setAttribute("class", "imgdiv");

  let imgdiv10 = document.createElement("div");
  imgdiv10.setAttribute("class", "imgdiv");

  let productimg1 = document.createElement("img");
  productimg1.setAttribute("src", todaydealsdata[0].mobdiv.image1);
  productimg1.setAttribute("class", "productimg");

  let productimg2 = document.createElement("img");
  productimg2.setAttribute("src", todaydealsdata[0].mobdiv.image2);
  productimg2.setAttribute("class", "productimg");

  let productimg3 = document.createElement("img");
  productimg3.setAttribute("src", todaydealsdata[0].mobdiv.image3);
  productimg3.setAttribute("class", "productimg");

  let productimg4 = document.createElement("img");
  productimg4.setAttribute("src", todaydealsdata[0].mobdiv.image4);
  productimg4.setAttribute("class", "productimg");

  let productimg5 = document.createElement("img");
  productimg5.setAttribute("src", todaydealsdata[0].mobdiv.image5);
  productimg5.setAttribute("class", "productimg");

  let productimg6 = document.createElement("img");
  productimg6.setAttribute("src", todaydealsdata[0].mobdiv.image6);
  productimg6.setAttribute("class", "productimg");

  let productimg7 = document.createElement("img");
  productimg7.setAttribute("src", todaydealsdata[0].mobdiv.image7);
  productimg7.setAttribute("class", "productimg");

  let productimg8 = document.createElement("img");
  productimg8.setAttribute("src", todaydealsdata[0].mobdiv.image8);
  productimg8.setAttribute("class", "productimg");

  let productimg9 = document.createElement("img");
  productimg9.setAttribute("src", todaydealsdata[0].mobdiv.image9);
  productimg9.setAttribute("class", "productimg");

  let productimg10 = document.createElement("img");
  productimg10.setAttribute("src", todaydealsdata[0].mobdiv.image10);
  productimg10.setAttribute("class", "productimg");

  imgdiv1.append(productimg1);
  imgdiv2.append(productimg2);
  imgdiv3.append(productimg3);
  imgdiv4.append(productimg4);
  imgdiv5.append(productimg5);
  imgdiv6.append(productimg6);
  imgdiv7.append(productimg7);
  imgdiv8.append(productimg8);
  imgdiv9.append(productimg9);
  imgdiv10.append(productimg10);

  let title1div = document.createElement("div");
  title1div.setAttribute("class", "title1div");

  let title2div = document.createElement("div");
  title2div.setAttribute("class", "title1div");

  let title3div = document.createElement("div");
  title3div.setAttribute("class", "title1div");

  let title4div = document.createElement("div");
  title4div.setAttribute("class", "title1div");

  let title5div = document.createElement("div");
  title5div.setAttribute("class", "title1div");

  let title6div = document.createElement("div");
  title6div.setAttribute("class", "title1div");

  let title7div = document.createElement("div");
  title7div.setAttribute("class", "title1div");

  let title8div = document.createElement("div");
  title8div.setAttribute("class", "title1div");

  let title9div = document.createElement("div");
  title9div.setAttribute("class", "title1div");

  let title10div = document.createElement("div");
  title10div.setAttribute("class", "title1div");

  let title1 = document.createElement("p");
  title1.setAttribute("class", "title1");
  title1.innerText = todaydealsdata[0].mobdiv.title1;

  let title2 = document.createElement("p");
  title2.setAttribute("class", "title1");
  title2.innerText = todaydealsdata[0].mobdiv.title3;

  let title3 = document.createElement("p");
  title3.setAttribute("class", "title1");
  title3.innerText = todaydealsdata[0].mobdiv.title5;

  let title4 = document.createElement("p");
  title4.setAttribute("class", "title1");
  title4.innerText = todaydealsdata[0].mobdiv.title7;

  let title5 = document.createElement("p");
  title5.setAttribute("class", "title1");
  title5.innerText = todaydealsdata[0].mobdiv.title9;

  let title6 = document.createElement("p");
  title6.setAttribute("class", "title1");
  title6.innerText = todaydealsdata[0].mobdiv.title11;

  let title7 = document.createElement("p");
  title7.setAttribute("class", "title1");
  title7.innerText = todaydealsdata[0].mobdiv.title13;

  let title8 = document.createElement("p");
  title8.setAttribute("class", "title1");
  title8.innerText = todaydealsdata[0].mobdiv.title15;

  let title9 = document.createElement("p");
  title9.setAttribute("class", "title1");
  title9.innerText = todaydealsdata[0].mobdiv.title17;

  let title10 = document.createElement("p");
  title10.setAttribute("class", "title1");
  title10.innerText = todaydealsdata[0].mobdiv.title19;

  let limitedtitle1 = document.createElement("p");
  limitedtitle1.setAttribute("class", "title2");
  limitedtitle1.innerText = todaydealsdata[0].mobdiv.limited;

  let limitedtitle2 = document.createElement("p");
  limitedtitle2.setAttribute("class", "title2");
  limitedtitle2.innerText = todaydealsdata[0].mobdiv.limited;

  let limitedtitle3 = document.createElement("p");
  limitedtitle3.setAttribute("class", "title2");
  limitedtitle3.innerText = todaydealsdata[0].mobdiv.limited;

  let limitedtitle4 = document.createElement("p");
  limitedtitle4.setAttribute("class", "title2");
  limitedtitle4.innerText = todaydealsdata[0].mobdiv.limited;

  let limitedtitle5 = document.createElement("p");
  limitedtitle5.setAttribute("class", "title2");
  limitedtitle5.innerText = todaydealsdata[0].mobdiv.limited;

  let limitedtitle6 = document.createElement("p");
  limitedtitle6.setAttribute("class", "title2");
  limitedtitle6.innerText = todaydealsdata[0].mobdiv.limited;

  let limitedtitle7 = document.createElement("p");
  limitedtitle7.setAttribute("class", "title2");
  limitedtitle7.innerText = todaydealsdata[0].mobdiv.limited;

  let limitedtitle8 = document.createElement("p");
  limitedtitle8.setAttribute("class", "title2");
  limitedtitle8.innerText = todaydealsdata[0].mobdiv.limited;

  let limitedtitle9 = document.createElement("p");
  limitedtitle9.setAttribute("class", "title2");
  limitedtitle9.innerText = todaydealsdata[0].mobdiv.limited;

  let limitedtitle10 = document.createElement("p");
  limitedtitle10.setAttribute("class", "title2");
  limitedtitle10.innerText = todaydealsdata[0].mobdiv.limited;

  let des1 = document.createElement("p");
  des1.setAttribute("class", "des1");
  des1.innerText = todaydealsdata[0].mobdiv.title2;
  let des2 = document.createElement("p");
  des2.setAttribute("class", "des1");
  des2.innerText = todaydealsdata[0].mobdiv.title4;

  let des3 = document.createElement("p");
  des3.setAttribute("class", "des1");
  des3.innerText = todaydealsdata[0].mobdiv.title6;

  let des4 = document.createElement("p");
  des4.setAttribute("class", "des1");
  des4.innerText = todaydealsdata[0].mobdiv.title8;

  let des5 = document.createElement("p");
  des5.setAttribute("class", "des1");
  des5.innerText = todaydealsdata[0].mobdiv.title10;

  let des6 = document.createElement("p");
  des6.setAttribute("class", "des1");
  des6.innerText = todaydealsdata[0].mobdiv.title12;

  let des7 = document.createElement("p");
  des7.setAttribute("class", "des1");
  des7.innerText = todaydealsdata[0].mobdiv.title14;

  let des8 = document.createElement("p");
  des8.setAttribute("class", "des1");
  des8.innerText = todaydealsdata[0].mobdiv.title16;

  let des9 = document.createElement("p");
  des9.setAttribute("class", "des1");
  des9.innerText = todaydealsdata[0].mobdiv.title18;

  let des10 = document.createElement("p");
  des10.setAttribute("class", "des1");
  des10.innerText = todaydealsdata[0].mobdiv.title20;

  title1div.append(title1, limitedtitle1);
  title2div.append(title2, limitedtitle2);
  title3div.append(title3, limitedtitle3);
  title4div.append(title4, limitedtitle4);
  title5div.append(title5, limitedtitle5);
  title6div.append(title6, limitedtitle6);
  title7div.append(title7, limitedtitle7);
  title8div.append(title8, limitedtitle8);
  title9div.append(title9, limitedtitle9);
  title10div.append(title10, limitedtitle10);

  product1div.append(imgdiv1, title1div, des1);
  product2div.append(imgdiv2, title2div, des2);
  product3div.append(imgdiv3, title3div, des3);
  product4div.append(imgdiv4, title4div, des4);
  product5div.append(imgdiv5, title5div, des5);
  product6div.append(imgdiv6, title6div, des6);
  product7div.append(imgdiv7, title7div, des7);
  product8div.append(imgdiv8, title8div, des8);
  product9div.append(imgdiv9, title9div, des9);
  product10div.append(imgdiv10, title10div, des10);

  document
    .getElementById("cardcontainer3")
    .append(
      product1div,
      product2div,
      product3div,
      product4div,
      product5div,
      product6div,
      product7div,
      product8div,
      product9div,
      product10div
    );
}

document.getElementById("leftslideicon").addEventListener("click", function () {
  document.getElementById("cardcontainer3").scrollLeft -= 250;
});

document
  .getElementById("rightslideicon")
  .addEventListener("click", function () {
    document.getElementById("cardcontainer3").scrollLeft += 250;
  });

function updateIconPosition() {
  var cardContainerRect = document
    .getElementById("cardcontainer3")
    .getBoundingClientRect();
  var leftIcon = document.getElementById("leftslideicon");
  var rightIcon = document.getElementById("rightslideicon");

  leftIcon.style.top =
    cardContainerRect.top + cardContainerRect.height / 4 + "px";
  rightIcon.style.top =
    cardContainerRect.top + cardContainerRect.height / 4 + "px";
}

updateIconPosition();
window.addEventListener("scroll", updateIconPosition);

let bikescootersdata = [
  {
    maindiv: {
      image1: "https://m.media-amazon.com/images/I/71bp1ECm53L._AC_SY200_.jpg",
      image2: "https://m.media-amazon.com/images/I/61wZvaoE2HL._AC_SY200_.jpg",
      image3: "https://m.media-amazon.com/images/I/61lbumYbFyL._AC_SY200_.jpg",
      image4: "https://m.media-amazon.com/images/I/51pDpsai4DL._AC_SY200_.jpg",
      image5: "https://m.media-amazon.com/images/I/51N4Rot3QwL._AC_SY200_.jpg",
      image6: "https://m.media-amazon.com/images/I/71o9jzwMpHL._AC_SY200_.jpg",
      image7: "https://m.media-amazon.com/images/I/61AM3f2Lu4L._AC_SY200_.jpg",
      image8: "https://m.media-amazon.com/images/I/71K-ldEcNDL._AC_SY200_.jpg",
      image9: "https://m.media-amazon.com/images/I/71wF3dbId5L._AC_SY200_.jpg",
      image10: "https://m.media-amazon.com/images/I/71w6QM5mPUL._AC_SY200_.jpg",
    },
  },
];

for (let i = 0; i < bikescootersdata.length; i++) {
  let imgdiv1 = document.createElement("div");
  imgdiv1.setAttribute("class", "imgdiv");

  let imgdiv2 = document.createElement("div");
  imgdiv2.setAttribute("class", "imgdiv");

  let imgdiv3 = document.createElement("div");
  imgdiv3.setAttribute("class", "imgdiv");

  let imgdiv4 = document.createElement("div");
  imgdiv4.setAttribute("class", "imgdiv");

  let imgdiv5 = document.createElement("div");
  imgdiv5.setAttribute("class", "imgdiv");

  let imgdiv6 = document.createElement("div");
  imgdiv6.setAttribute("class", "imgdiv");

  let imgdiv7 = document.createElement("div");
  imgdiv7.setAttribute("class", "imgdiv");

  let imgdiv8 = document.createElement("div");
  imgdiv8.setAttribute("class", "imgdiv");

  let imgdiv9 = document.createElement("div");
  imgdiv9.setAttribute("class", "imgdiv");

  let imgdiv10 = document.createElement("div");
  imgdiv10.setAttribute("class", "imgdiv");

  let productimg1 = document.createElement("img");
  productimg1.setAttribute("src", bikescootersdata[0].maindiv.image1);

  let productimg2 = document.createElement("img");
  productimg2.setAttribute("src", bikescootersdata[0].maindiv.image2);

  let productimg3 = document.createElement("img");
  productimg3.setAttribute("src", bikescootersdata[0].maindiv.image3);

  let productimg4 = document.createElement("img");
  productimg4.setAttribute("src", bikescootersdata[0].maindiv.image4);

  let productimg5 = document.createElement("img");
  productimg5.setAttribute("src", bikescootersdata[0].maindiv.image5);

  let productimg6 = document.createElement("img");
  productimg6.setAttribute("src", bikescootersdata[0].maindiv.image6);

  let productimg7 = document.createElement("img");
  productimg7.setAttribute("src", bikescootersdata[0].maindiv.image7);

  let productimg8 = document.createElement("img");
  productimg8.setAttribute("src", bikescootersdata[0].maindiv.image8);

  let productimg9 = document.createElement("img");
  productimg9.setAttribute("src", bikescootersdata[0].maindiv.image9);

  let productimg10 = document.createElement("img");
  productimg10.setAttribute("src", bikescootersdata[0].maindiv.image10);

  imgdiv1.append(productimg1);
  imgdiv2.append(productimg2);
  imgdiv3.append(productimg3);
  imgdiv4.append(productimg4);
  imgdiv5.append(productimg5);
  imgdiv6.append(productimg6);
  imgdiv7.append(productimg7);
  imgdiv8.append(productimg8);
  imgdiv9.append(productimg9);
  imgdiv10.append(productimg10);

  document
    .getElementById("cardcontainer4")
    .append(
      imgdiv1,
      imgdiv2,
      imgdiv3,
      imgdiv4,
      imgdiv5,
      imgdiv6,
      imgdiv7,
      imgdiv8,
      imgdiv9,
      imgdiv10
    );
}

document.getElementById("leftslide").addEventListener("click", function () {
  document.getElementById("cardcontainer4").scrollLeft -= 250;
});

document.getElementById("rightslide").addEventListener("click", function () {
  document.getElementById("cardcontainer4").scrollLeft += 250;
});

function updateslidePosition() {
  var cardContainerRect = document
    .getElementById("cardcontainer4")
    .getBoundingClientRect();
  var leftIcon = document.getElementById("leftslide");
  var rightIcon = document.getElementById("rightslide");

  leftIcon.style.top =
    cardContainerRect.top + cardContainerRect.height / 2.5 + "px";
  rightIcon.style.top =
    cardContainerRect.top + cardContainerRect.height / 2.5 + "px";
}

updateslidePosition();
window.addEventListener("scroll", updateslidePosition);

// furniture card//

let furnituredata = [
  {
    maindiv: {
      image1: "https://m.media-amazon.com/images/I/71rnApMf+ZL._AC_SY200_.jpg",
      image2: "https://m.media-amazon.com/images/I/81ratqQtFfL._AC_SY200_.jpg",
      image3: "https://m.media-amazon.com/images/I/518qIwv8c1L._AC_SY200_.jpg",
      image4: "https://m.media-amazon.com/images/I/71S59-R52EL._AC_SY200_.jpg",
      image5: "https://m.media-amazon.com/images/I/91CIL48Ev-L._AC_SY200_.jpg",
      image6: "https://m.media-amazon.com/images/I/61AR0QsauKL._AC_SY200_.jpg",
      image7: "https://m.media-amazon.com/images/I/51ppT1zE71L._AC_SY200_.jpg",
      image8: "https://m.media-amazon.com/images/I/81Df5I+BN+L._AC_SY200_.jpg",
      image9: "https://m.media-amazon.com/images/I/5141x2XRpwL._AC_SY200_.jpg",
      image10: "https://m.media-amazon.com/images/I/31KLA-tVZBS._AC_SY200_.jpg",
    },
  },
];

for (let i = 0; i < furnituredata.length; i++) {
  let imgdiv1 = document.createElement("div");
  imgdiv1.setAttribute("class", "imgdiv");

  let imgdiv2 = document.createElement("div");
  imgdiv2.setAttribute("class", "imgdiv");

  let imgdiv3 = document.createElement("div");
  imgdiv3.setAttribute("class", "imgdiv");

  let imgdiv4 = document.createElement("div");
  imgdiv4.setAttribute("class", "imgdiv");

  let imgdiv5 = document.createElement("div");
  imgdiv5.setAttribute("class", "imgdiv");

  let imgdiv6 = document.createElement("div");
  imgdiv6.setAttribute("class", "imgdiv");

  let imgdiv7 = document.createElement("div");
  imgdiv7.setAttribute("class", "imgdiv");

  let imgdiv8 = document.createElement("div");
  imgdiv8.setAttribute("class", "imgdiv");

  let imgdiv9 = document.createElement("div");
  imgdiv9.setAttribute("class", "imgdiv");

  let imgdiv10 = document.createElement("div");
  imgdiv10.setAttribute("class", "imgdiv");

  let productimg1 = document.createElement("img");
  productimg1.setAttribute("src", furnituredata[0].maindiv.image1);

  let productimg2 = document.createElement("img");
  productimg2.setAttribute("src", furnituredata[0].maindiv.image2);

  let productimg3 = document.createElement("img");
  productimg3.setAttribute("src", furnituredata[0].maindiv.image3);

  let productimg4 = document.createElement("img");
  productimg4.setAttribute("src", furnituredata[0].maindiv.image4);

  let productimg5 = document.createElement("img");
  productimg5.setAttribute("src", furnituredata[0].maindiv.image5);

  let productimg6 = document.createElement("img");
  productimg6.setAttribute("src", furnituredata[0].maindiv.image6);

  let productimg7 = document.createElement("img");
  productimg7.setAttribute("src", furnituredata[0].maindiv.image7);

  let productimg8 = document.createElement("img");
  productimg8.setAttribute("src", furnituredata[0].maindiv.image8);

  let productimg9 = document.createElement("img");
  productimg9.setAttribute("src", furnituredata[0].maindiv.image9);

  let productimg10 = document.createElement("img");
  productimg10.setAttribute("src", furnituredata[0].maindiv.image10);

  imgdiv1.append(productimg1);
  imgdiv2.append(productimg2);
  imgdiv3.append(productimg3);
  imgdiv4.append(productimg4);
  imgdiv5.append(productimg5);
  imgdiv6.append(productimg6);
  imgdiv7.append(productimg7);
  imgdiv8.append(productimg8);
  imgdiv9.append(productimg9);
  imgdiv10.append(productimg10);

  document
    .getElementById("cardcontainer5")
    .append(
      imgdiv1,
      imgdiv2,
      imgdiv3,
      imgdiv4,
      imgdiv5,
      imgdiv6,
      imgdiv7,
      imgdiv8,
      imgdiv9,
      imgdiv10
    );
}

document.getElementById("leftarrow").addEventListener("click", function () {
  document.getElementById("cardcontainer5").scrollLeft -= 250;
});

document.getElementById("rightarrow").addEventListener("click", function () {
  document.getElementById("cardcontainer5").scrollLeft += 250;
});

function updatearrowPosition() {
  var cardContainerRect = document
    .getElementById("cardcontainer5")
    .getBoundingClientRect();
  var leftIcon = document.getElementById("leftarrow");
  var rightIcon = document.getElementById("rightarrow");

  leftIcon.style.top =
    cardContainerRect.top + cardContainerRect.height / 2.5 + "px";
  rightIcon.style.top =
    cardContainerRect.top + cardContainerRect.height / 2.5 + "px";
}

updateslidePosition();
window.addEventListener("scroll", updatearrowPosition);

//Small bussiness-card//

let Smallbussinessdata = [
  {
    maindiv: {
      image1: "https://m.media-amazon.com/images/I/91Zb64yWENL._AC_SY200_.jpg",
      image2: "https://m.media-amazon.com/images/I/71hZj+2OkuL._AC_SY200_.jpg",
      image3: "https://m.media-amazon.com/images/I/71sAn2UfxPL._AC_SY200_.jpg",
      image4: "https://m.media-amazon.com/images/I/51-J1WOxzIL._AC_SY200_.jpg",
      image5: "https://m.media-amazon.com/images/I/61r7gf6JBXL._AC_SY200_.jpg",
      image6: "https://m.media-amazon.com/images/I/81Bs7YYM9NL._AC_SY200_.jpg",
      image7: "https://m.media-amazon.com/images/I/714ifTPwXXL._AC_SY200_.jpg",
      image8: "https://m.media-amazon.com/images/I/712uzQ26A-L._AC_SY200_.jpg",
      image9: "https://m.media-amazon.com/images/I/81std614dgL._AC_SY200_.jpg",
      image10: "https://m.media-amazon.com/images/I/61ff-h9UAoL._AC_SY200_.jpg",
    },
  },
];

for (let i = 0; i < Smallbussinessdata.length; i++) {
  let imgdiv1 = document.createElement("div");
  imgdiv1.setAttribute("class", "imgdiv");

  let imgdiv2 = document.createElement("div");
  imgdiv2.setAttribute("class", "imgdiv");

  let imgdiv3 = document.createElement("div");
  imgdiv3.setAttribute("class", "imgdiv");

  let imgdiv4 = document.createElement("div");
  imgdiv4.setAttribute("class", "imgdiv");

  let imgdiv5 = document.createElement("div");
  imgdiv5.setAttribute("class", "imgdiv");

  let imgdiv6 = document.createElement("div");
  imgdiv6.setAttribute("class", "imgdiv");

  let imgdiv7 = document.createElement("div");
  imgdiv7.setAttribute("class", "imgdiv");

  let imgdiv8 = document.createElement("div");
  imgdiv8.setAttribute("class", "imgdiv");

  let imgdiv9 = document.createElement("div");
  imgdiv9.setAttribute("class", "imgdiv");

  let imgdiv10 = document.createElement("div");
  imgdiv10.setAttribute("class", "imgdiv");

  let productimg1 = document.createElement("img");
  productimg1.setAttribute("src", Smallbussinessdata[0].maindiv.image1);

  let productimg2 = document.createElement("img");
  productimg2.setAttribute("src", Smallbussinessdata[0].maindiv.image2);

  let productimg3 = document.createElement("img");
  productimg3.setAttribute("src", Smallbussinessdata[0].maindiv.image3);

  let productimg4 = document.createElement("img");
  productimg4.setAttribute("src", Smallbussinessdata[0].maindiv.image4);

  let productimg5 = document.createElement("img");
  productimg5.setAttribute("src", Smallbussinessdata[0].maindiv.image5);

  let productimg6 = document.createElement("img");
  productimg6.setAttribute("src", Smallbussinessdata[0].maindiv.image6);

  let productimg7 = document.createElement("img");
  productimg7.setAttribute("src", Smallbussinessdata[0].maindiv.image7);

  let productimg8 = document.createElement("img");
  productimg8.setAttribute("src", Smallbussinessdata[0].maindiv.image8);

  let productimg9 = document.createElement("img");
  productimg9.setAttribute("src", Smallbussinessdata[0].maindiv.image9);

  let productimg10 = document.createElement("img");
  productimg10.setAttribute("src", Smallbussinessdata[0].maindiv.image10);

  imgdiv1.append(productimg1);
  imgdiv2.append(productimg2);
  imgdiv3.append(productimg3);
  imgdiv4.append(productimg4);
  imgdiv5.append(productimg5);
  imgdiv6.append(productimg6);
  imgdiv7.append(productimg7);
  imgdiv8.append(productimg8);
  imgdiv9.append(productimg9);
  imgdiv10.append(productimg10);

  document
    .getElementById("cardcontainer6")
    .append(
      imgdiv1,
      imgdiv2,
      imgdiv3,
      imgdiv4,
      imgdiv5,
      imgdiv6,
      imgdiv7,
      imgdiv8,
      imgdiv9,
      imgdiv10
    );
}

document.getElementById("leftoptions").addEventListener("click", function () {
  document.getElementById("cardcontainer6").scrollLeft -= 250;
});

document.getElementById("rightoptions").addEventListener("click", function () {
  document.getElementById("cardcontainer6").scrollLeft += 250;
});

function updateoptionsPosition() {
  var cardContainerRect = document
    .getElementById("cardcontainer6")
    .getBoundingClientRect();
  var leftIcon = document.getElementById("leftoptions");
  var rightIcon = document.getElementById("rightoptions");

  leftIcon.style.top =
    cardContainerRect.top + cardContainerRect.height / 2.5 + "px";
  rightIcon.style.top =
    cardContainerRect.top + cardContainerRect.height / 2.5 + "px";
}

updateoptionsPosition();
window.addEventListener("scroll", updateoptionsPosition);


let shirtdata = {
  products: [
    {
      card1: {
        image: "https://m.media-amazon.com/images/I/614IHHBjS4L._AC_UL320_.jpg",
        brand: "KINGDOM OF WHITE",
        title: "Replay Full Sleeves White Shirt with Regular Collar Casual/Formal Shirt | 100% Cotton Fabric, Full Sleeve, Regular Collar Shirt for Men, Regular Fit",
        rating: "3.9",
        badge: "Limited time deal",
        price: "₹1,177 M.R.P: ₹1,499 (21% off) Save ₹50 with coupon (limited sizes/colours)",
        category: "shirts",  

        color: "white"
      }
    },
    {
      card2: {
        image: "https://m.media-amazon.com/images/I/51JIlfNvLGL._AC_UL320_.jpg",
        brand: "Peter England",
        title: "Men's Regular Fit Shirt",
        rating: "4",
        price: "₹1,012 M.R.P: ₹1,199 (16% off) FREE Delivery by Amazon",
        category: "Shirts",
        color: "white"
      }
    },

    {
      card3: {
        image: "https://m.media-amazon.com/images/I/61MMzZFJbWL._AC_UL320_.jpg",
        brand: "Arrow",
        title: "Men's Shirt",
        rating: "4.2",
        price: "₹1,279 M.R.P: ₹2,199 (42% off) FREE Delivery by Amazon",
        category: "Shirts",
        color: "white"
      }
    },

    {
      card4: {
        image: "https://m.media-amazon.com/images/I/712CQewF59L._AC_UL320_.jpg",
        brand: "Arrow",
        title: "Men's Solid White Full Sleeve Slim Fit Cotton Formal Shirt",
        rating: "4",
        price: "₹1,139 M.R.P: ₹1,999 (43% off) FREE Delivery by Amazon",
        category: "Shirts",
        color: "white"
      }
    }, {
      card5: {
        image: "https://m.media-amazon.com/images/I/71hfutLZZ7L._AC_UL320_.jpg",
        brand: "Allen Solly",
        title: "Men's Slim Fit Shirt",
        rating: "3.7",
        price: "₹1,044 M.R.P: ₹1,599 (35% off)FREE Delivery by Amazon More Buying Choices ₹1,039(3 new offers)",
        category: "Shirts",
        color: "white"
      }
    }, {
      card6: {
        image: "https://m.media-amazon.com/images/I/51YWjChA95L._AC_UL320_.jpg",
        brand: "Peter England",
        title: "Men's Regular Fit Shirt",
        rating: "4.1",
        price: "₹1,067 M.R.P: ₹1,199 (11% off) FREE Delivery by Amazon",
        color: "white",
        category: "Shirts"
      }
    }, {
      card7: {
        image: "https://m.media-amazon.com/images/I/51ystSbVCQL._AC_UL320_.jpg",
        brand: "Peter England",
        title: "Men Shirt",
        rating: "4",
        price: "₹1,519 M.R.P: ₹1,599 (5% off) FREE Delivery by Amazon",
        category: "Shirts",
        color: "black"
      }
    }, {
      card8: {
        image: "https://m.media-amazon.com/images/I/71-oqCe5qZL._AC_UL320_.jpg",
        brand: "Arrow",
        title: "Men's Shirt",
        rating: "4.2",
        price: "₹1,249 M.R.P: ₹2,199 (43% off)FREE Delivery by Amazon",
        badge: "Deal of the Day",
        category: "Shirts",
        color: "black"
      }
    }, {
      card9: {
        image: "https://m.media-amazon.com/images/I/51IXgnpzkFL._AC_UL320_.jpg",
        brand: "Allen Solly",
        title: "Men's Regular Fit Shirt",
        rating: "3.8",
        price: "₹959 M.R.P: ₹1,599 (40% off) FREE Delivery by Amazon",
        category: "Shirts",
        color: "black"
      }
    }, {
      card10: {
        image: "https://m.media-amazon.com/images/I/51Q+EsI3-sL._AC_UL320_.jpg",
        brand: "Peter England",
        title: "Men's Shirt",
        rating: "5",
        price: "₹1,029 M.R.P: ₹1,799 (43% off) FREE Delivery by Amazon",
        category: "Shirts",
        color: "black"
      }
    }, {
      card11: {
        image: "https://m.media-amazon.com/images/I/61DC2+8DwML._AC_UL320_.jpg",
        brand: "Jack & Jones",
        title: "Men's Slim Fit Casual Shirt",
        rating: "4.2",
        price: "₹984 M.R.P: ₹2,299 (57% off) FREE Delivery by Amazon",
        category: "Shirts",
        color: "Blue denim"
      }
    }, {
      card12: {
        image: "https://m.media-amazon.com/images/I/71h-kTg6aSL._AC_UL320_.jpg",
        brand: "Dennis Lingo",
        title: "Men's Solid Denim Cotton Slim Fit Full Sleeve Casual Shirt",
        rating: "4.4",
        price: "₹449 M.R.P: ₹2,999 (85% off) FREE Delivery over ₹499. Fulfilled by Amazon",
        category: "Shirts",
        color: "Blue denim",
      }
    }, {
      card13: {
        image: "https://m.media-amazon.com/images/I/51onE1Y-5FL._AC_UL320_.jpg",
        brand: "Jack & Jones",
        title: "Men's Solid Regular Fit Spread-Collar Casual Shirt",
        price: "₹1,574 M.R.P: ₹4,499 (65% off)FREE Delivery by Amazon",
        color: "Blue denim",
        category: "Shirts"
      }
    }, {
      card14: {
        image: "https://m.media-amazon.com/images/I/71wZOJvHpOL._AC_UL320_.jpg",
        brand: "Lee",
        title: "Men Shirt",
        price: "₹1,700 M.R.P: ₹3,399 (50% off) FREE Delivery by Amazon",
        category: "Shirts",
        color: "Blue denim",
      }
    }, {
      card15: {
        image: "https://m.media-amazon.com/images/I/61yHbDFfkqL._AC_UL320_.jpg",
        brand: "Dennis Lingo",
        title: "Men's Solid Slim Fit Cotton Casual Shirt with Spread Collar & Full Sleeves",
        price: "₹549 M.R.P: ₹1,849 (70% off) FREE Delivery by Amazon",
        category: "Shirts",
        color: "Dark maroon",
      }
    }, {
      card16: {
        image: "https://m.media-amazon.com/images/I/71QCdHMAw0L._AC_UL320_.jpg",
        brand: "Park Avenue",
        title: "Men's Shirt",
        badge: "Deal of the day",
        price: "₹919 M.R.P: ₹2,099 (56% off) FREE Delivery by Amazon",
        color: "Dark maroon",
        category:"Shirts"
      }
    }, {
      card17: {
        image: "https://m.media-amazon.com/images/I/61z-e2gUkML._AC_UL320_.jpg",
        brand: "Peter England",
        title: "Men's Slim Fit 100% Cotton Shirt",
        price: "₹1,259 M.R.P: ₹1,599 (21% off)FREE Delivery by Amazon",
        category: "Shirts",
        rating: "3.8",
        color: "Dark maroon",
      }
    }, {
      card18: {
        image: "https://m.media-amazon.com/images/I/81wgDboGvbL._AC_UL320_.jpg",
        brand: "Park Avenue",
        title: "Men's Pure Cotton Oxford Pattern Slim Fit Semi Cutaway Collar Full Sleeve Formal Shirt",
        price: "₹1,009 M.R.P: ₹2,299 (56% off) FREE Delivery by Amazon",
        category: "Shirts",
        color: "Dark maroon",
      }
    }, {
      card19: {
        image: "https://m.media-amazon.com/images/I/51PUlZCbnzL._AC_UL320_.jpg",
        brand: "Dennis Lingo",
        title: "Men's Cotton Solid Slim Fit Casual Shirt with Pocket, Full Sleeve Shirt for Formal & Casual Wear",
        price: "₹460 M.R.P: ₹2,299 (80% off) Save 5% with coupon (limited sizes/colours) FREE Delivery over ₹499. Fulfilled by Amazon",
        category: "Shirts",
        color: "Dark maroon",
      }
    }, {
      card20: {
        image: "https://m.media-amazon.com/images/I/614rDqs5UyL._AC_UL320_.jpg",
        brand: "Dennis Lingo",
        title: "Men's Cotton Solid Slim Fit Casual Shirt with Pocket, Full Sleeve Shirt for Formal & Casual Wear",
        price: "₹460 M.R.P: ₹2,299 (80% off) FREE Delivery over ₹499.",
        category: "Shirts",
        rating: "3.9",
        color: "Navy blue",
      }
    }, {
      card21: {
        image: "https://m.media-amazon.com/images/I/71aFm7jdWbL._AC_UL320_.jpg",
        brand: "Allen Solly",
        title: "Men's Shirt",
        price: "₹1,044 M.R.P: ₹1,599 (35% off) FREE Delivery by Amazon",
        category: "Shirts",
        rating: "3.9",
        color: "Navy blue",
      }
    }, {
      card22: {
        image: "https://m.media-amazon.com/images/I/71kzEGfPyCL._AC_UL320_.jpg",
        brand: "Van Heusen",
        title: "Men Shirt",
        price: "₹1,356 M.R.P: ₹2,299 (41% off) FREE Delivery by Amazon",
        category: "Shirts",
        rating: "4.1",
        color: "Navy blue",
      }
    }, {
      card23: {
        image: "https://m.media-amazon.com/images/I/61G7lgwP2SL._AC_UL320_.jpg",
        brand: "Peter England",
        title: "Men's Slim Fit 100% Cotton Shirt",
        price: "₹959 M.R.P: ₹1,599 (40% off) FREE Delivery by Amazon",
        rating: "3.8",
        category: "Shirts",
        color: "Navy blue"
      }
    }, {
      card24: {
        image: "https://m.media-amazon.com/images/I/618B4LhlUxL._AC_UL320_.jpg",
        brand: "Pepe Jeans",
        title: "Men's Regular Fit Shirt",
        price: "₹1,009 M.R.P: ₹2,199 (54% off) FREE Delivery by Amazon",
        category: "Shirts",
        rating: "4.1",
        color: "Navy blue",
      }
    }, {
      card25: {
        image: "https://m.media-amazon.com/images/I/71QZ41xermL._AC_UL320_.jpg",
        brand: "Allen Solly",
        title: "Men's Shirt",
        price: "₹1,044 M.R.P: ₹1,599 (35% off) FREE Delivery by Amazon",
        rating: "3.9",
        category: "Shirts",
        color: "Sky blue",
      }
    }, {
      card26: {
        image: "https://m.media-amazon.com/images/I/61Hq5zUBWEL._AC_UL320_.jpg",
        brand: "Arrow",
        title: "Solid Manhattan Slim Fit Shirt",
        price: "₹1,319 M.R.P: ₹2,199 (40% off) FREE Delivery by Amazon",
        rating: "5",
        category: "Shirts",
        color: "Sky blue",
      }
    }, {
      card27: {
        image: "https://m.media-amazon.com/images/I/61yEm9ZddgL._AC_UL320_.jpg",
        brand: "Cantabil",
        title: "Cotton Blend Self Design Full Sleeve Regular Fit Formal Shirt for Men with Pocket | Formal Shirt for Men | Formal Wear Shirts for Men",
        price: "₹878 M.R.P: ₹2,199 (60% off) FREE Delivery by Amazon",
        category: "Shirts",
        rating: "5",
        color: "Sky blue",
      }
    }, {
      card28: {
        image: "https://m.media-amazon.com/images/I/61aGsNUU3sL._AC_UL320_.jpg",
        brand: "Peter England",
        title: "Men's Shirt",
        price: "₹840 M.R.P: ₹1,199 (30% off) FREE Delivery by Amazon",
        category: "Shirts",
        rating: "3.8",
        color: "Sky blue",
      }
    }, {
      card29: {
        image: "https://m.media-amazon.com/images/I/61GF+DnTfIL._AC_UL320_.jpg",
        brand: "Allen Cooper",
        title: "Solid Casual Shirts for Men",
        price: "₹919 M.R.P: ₹2,999 (69% off) FREE Delivery by Amazon",
        category: "Shirts",
        rating: "3.6",
        color: "Sky blue",
      }
    }, {
      card30: {
        image: "https://m.media-amazon.com/images/I/61vOh+WsVpL._AC_UL320_.jpg",
        brand: "Van Heusen",
        title: "Men's Slim Fit Formal Shirt",
        price: "₹1,179 M.R.P: ₹1,999 (41% off) FREE Delivery by Amazon",
        category: "Shirts",
        rating: "3.9",
        color: "Sky blue",
      }
    }

  ]
};



document.getElementById("searchicon").addEventListener("click", function(){

  let searchval= document.getElementById("search").value

  let searchdata=[]
  let flag= false;

  for (let i = 0; i < shirtdata.products.length; i++) {
    for (let key in shirtdata.products[i]) {
        if(searchval===shirtdata.products[i][key].category){
          flag= true;
          searchdata.push(shirtdata.products[i][key].category)
          break;
        }
    }
  }

  if(flag){
    let seacrhpage= document.createElement("a")
    seacrhpage.setAttribute("href", "../Homepage/search.html")
    seacrhpage.click()

  }

})


let pantData = {
  products: [
    {
      card1: {
        image: "https://m.media-amazon.com/images/I/61TIDpH-MXL._AC_UL320_.jpg",
        brand: "American Eagle",
        title: "Men's Slim Fit Jeans",
        rating: "3.7",
        price: "1669",
        badge: "Deal of the Day",
        delivery: "FREE Delivery by Amazon",
        category: "pants",
      }
    },
    {
      card2: {
        image: "https://m.media-amazon.com/images/I/412vVvO88BL._AC_UL320_.jpg",
        brand: "Alpha Array",
        title: "Comfort Slim Fit Jeans for Men",
        rating: "4.7",
        price: "1,799",
        delivery: "FREE Delivery by Amazon",
        category: "pants",
      }
    },

    {
      card3: {
        image: "https://m.media-amazon.com/images/I/71a3OycnGYL._AC_UL320_.jpg",
        brand: "Billford",
        title: "Billford Men's Comfortable Stretchable Casual Denim Jeans Slim Fit Mid Rise Flat Front Full Length Modern & Fashionable for Casual Wear Comfort and Flexibility",
        rating: "3.5",
        price: "699",
        badge: "Deal of the Day",
        delivery: "FREE Delivery by Amazon",
        cateogry: "pants",
      }
    },

    {
      card4: {
        image: "https://m.media-amazon.com/images/I/71pLByK+SFL._AC_UL320_.jpg",
        brand: "Wrangler",
        title:  "Men's Millard Blue Jeans (Regular)",
        rating: "4.2",
        price: "1,599",
        delivery: "FREE Delivery by Amazon",
        cateogry: "pants",
      }
    }, {
      card5: {
        image: "https://m.media-amazon.com/images/I/613hmtm815L._AC_UL320_.jpg",
        brand: "GRECIILOOKS",
        title: "Men Casual Pants",
        rating: "3.5",
        price: "799",
        delivery: "FREE Delivery by Amazon",
        cateogry: "pants",
      }
    }, {
      card6: {
        image: "https://m.media-amazon.com/images/I/61EJxytnV5L._AC_UL320_.jpg",
        brand: "Urbano Fashion",
        title: "Men's Slim Fit Washed Jeans Stretchable",
        rating: "3.6",
        price: "602",
        delivery: "FREE Delivery by Amazon",
      }
    }, {
      card7: {
        image: "https://m.media-amazon.com/images/I/51lHABOtmPL._AC_UL320_.jpg",
        brand: "The Indian Garage Co",
        title: "Men Jeans",
        rating: "4",
        price: "688",
        delivery: "FREE Delivery by Amazon",
        cateogry: "pants",
      }
    }, {
      card8: {
        image: "https://m.media-amazon.com/images/I/616alUQkWDL._AC_UL320_.jpg",
        brand: "Peter England",
        title: "Men's Comfort Skinny Jeans",
        rating: "4",
        price: "1,179",
        delivery: "FREE Delivery by Amazon",
        badge: "Deal of the Day",
        cateogry: "pants",
      }
    }, {
      card9: {
        image: "https://m.media-amazon.com/images/I/61nLsdHiCTL._AC_UL320_.jpg",
        brand: "Ben Martin",
        title: "Men's Casual Strechable Denim Tapered Fit Carrot Jeans",
        rating: "2.9",
        price: "699",
        delivery: "FREE Delivery by Amazon",
        cateogry: "pants"
      }
    }, {
      card10: {
        image: "https://m.media-amazon.com/images/I/51JDUyK3ouL._AC_UL320_.jpg",
        brand: "Urbano Fashion",
        title: "Men's Washed Jeans Stretchable",
        rating: "3",
        price: "499",
        delivery: "FREE Delivery by Amazon",
        cateogry: "pants",
      }
    }, {
      card11: {
        image: "https://m.media-amazon.com/images/I/51aWSQ0TpIL._AC_UL320_.jpg",
        brand: "Levi's",
        title: "Men's 512 Slim Tapered Fit Mid Rise Stretchable Jeans",
        rating: "3.9",
        price: "1649",
        delivery: "FREE Delivery by Amazon",
        cateogry: "pants",
      }
    }, {
      card12: {
        image: "https://m.media-amazon.com/images/I/8149YA4ku7L._AC_UL320_.jpg",
        brand: "Urbano Fashion",
        title: "Men's Slim Fit Denim Jeans Stretchable",
        rating: "3.5",
        price: "636",
        delivery: "FREE Delivery by Amazon",
        cateogry: "pants",
      }
    }, {
      card13: {
        image: "https://m.media-amazon.com/images/I/515olk-XS-L._AC_UL320_.jpg",
        brand: "Ben Martin",
        title: "Men's Denim Slim Fit Strechable Jeans",
        price: "549",
        delivery: "FREE Delivery by Amazon",
        rating: "3.6"
      }
    }, {
      card14: {
        image: "https://m.media-amazon.com/images/I/51PPTKJ1dRL._AC_UL320_.jpg",
        brand: "Peter England",
        title: "Men Regular Fit Pants",
        price: "929",
        cateogry: "pants",
        delivery: "FREE Delivery by Amazon",
        rating: "4"
      }
    }, {
      card15: {
        image: "https://m.media-amazon.com/images/I/61BwMlXsJzL._AC_UL320_.jpg",
        brand: "Peter England",
        title: "Men Jeans",
        price: "1179",
        delivery: "FREE Delivery by Amazon",
        cateogry: "pants",
        rating: "4.2"
      }
    }, {
      card16: {
        image: "https://m.media-amazon.com/images/I/71f441HDnaL._AC_UL320_.jpg",
        brand: "Supernova Inc.",
        title: "Men's Slim Fit Solid Jeans Stretchable",
        price: "499",
        delivery: "FREE Delivery by Amazon",
        rating: "3.6"
      }
    }, {
      card17: {
        image: "https://m.media-amazon.com/images/I/81o2b-qDKoL._AC_UL320_.jpg",
        brand: "Allen Solly",
        title: "Men's Slim Jeans Color Collections",
        price: "1,439",
        delivery: "FREE Delivery by Amazon",
        cateogry: "pants",
        rating: "3.6",
      }
    }, {
      card18: {
        image: "https://m.media-amazon.com/images/I/51auautCipL._AC_UL320_.jpg",
        brand: "Levi's",
        title: "Men's 511 Slim Fit Mid Rise Jeans",
        price: "1,649",
        delivery: "FREE Delivery by Amazon",
        cateogry: "pants",
        rating: "3.7",
        badge: "Deal of the Day",
      }
    }, {
      card19: {
        image: "https://m.media-amazon.com/images/I/61QoLs37KAL._AC_UL320_.jpg",
        brand: "Pepe Jeans",
        title: "Men's Slim Jeans",
        price: "1763",
        delivery: "FREE Delivery by Amazon",
        cateogry: "pants",
        rating: "4.1"
      }
    }, {
      card20: {
        image: "https://m.media-amazon.com/images/I/61c-oQQBjoL._AC_UL320_.jpg",
        brand: "Levi's",
        title: "Men's 511 Slim Fit Mid Rise Jeans",
        price: "1649",
        delivery: "FREE Delivery by Amazon",
        cateogry: "pants",
        rating: "4",
        badge: "Deal of the Day"
      }
    }, {
      card21: {
        image: "https://m.media-amazon.com/images/I/61boSZSvRsL._AC_UL320_.jpg",
        brand: "Allen Solly",
        title: "Men Jeans",
        price: "1,299",
        delivery: "FREE Delivery by Amazon",
        cateogry: "pants",
        rating: "3.5",
      }
    }, {
      card22: {
        image: "https://m.media-amazon.com/images/I/71kfMr9U0RL._AC_UL320_.jpg",
        brand: "Pepe Jeans",
        title: "Men's Regular Jeans",
        price: "2,339",
        delivery: "FREE Delivery by Amazon",
        cateogry: "pants",
        rating: "3.6",
      }
    }, {
      card23: {
        image: "https://m.media-amazon.com/images/I/61KGHTiK5sL._AC_UL320_.jpg",
        brand: "Billford",
        title: "Men Jeans",
        price: "699",
        delivery: "FREE Delivery by Amazon",
        rating: "3.6",
        cateogry: "pants",
        
      }
    }, {
      card24: {
        image: "https://m.media-amazon.com/images/I/51nW98RxOLL._AC_UL320_.jpg",
        brand: "Levi's",
        title: "Men's 511 Styled Slim Fit Jeans",
        price: "1,649",
        delivery: "FREE Delivery by Amazon",
        cateogry: "pants",
        rating: "3.9",
      }
    }, {
      card25: {
        image: "https://m.media-amazon.com/images/I/81c5cscWSAL._AC_UL320_.jpg",
        brand: "U.S. POLO ASSN.",
        title: "Men's Jeans",
        price: "1,349",
        delivery: "FREE Delivery by Amazon",
        rating: "4",
        cateogry: "pants",

      }
    }, {
      card26: {
        image: "https://m.media-amazon.com/images/I/51VY-VupBYL._AC_UL320_.jpg",
        brand: "Levi's",
        title: "Men's 512 Slim Tapered Fit Stretchable Jeans",
        price: "1,619",
        delivery: "FREE Delivery by Amazon",
        rating: "3.9",
        cateogry: "pants",
        badge: "Deal of the Day"
      }
    }, {
      card27: {
        image: "https://m.media-amazon.com/images/I/71xZHNDtdqL._AC_UL320_.jpg",
        brand: "Peter England",
        title: "Men Regular Fit Jeans",
        price: "949",
        cateogry: "pants",
        rating: "5",
      }
    }, {
      card28: {
        image: "https://m.media-amazon.com/images/I/81Jk3frRCML._AC_UL320_.jpg",
        brand: "Urbano Fashion",
        title: "Men's Slim Fit Washed Jeans Stretchable",
        price: "749",
        delivery: "FREE Delivery by Amazon",
        cateogry: "pants",
        rating: "3.5",
      }
    }, {
      card29: {
        image: "https://m.media-amazon.com/images/I/51dlhi2jZuL._AC_UL320_.jpg",
        brand: "Levi's",
        title: "Men's 512 Slim Tapered Fit High-Rise Jeans",
        price: "2,429",
        delivery: "FREE Delivery by Amazon",
        cateogry: "pants",
        rating: "3.6",
      }
    }, {
      card30: {
        image: "https://m.media-amazon.com/images/I/61MnQqLAVOL._AC_UL320_.jpg",
        brand: "Urbano Fashion",
        title: "Men's Slim Fit Black Stretch Jeans",
        price: "587",
        delivery: "FREE Delivery by Amazon",
        cateogry: "pants",
        rating: "3.9"
      }
    }

  ]
};





document.getElementById("searchicon").addEventListener("click", function(){

  let searchval= document.getElementById("search").value

  let searchdata=[]
  let flag= false;

  for (let i = 0; i < pantData.products.length; i++) {
    for (let key in pantData.products[i]) {
        if(searchval===pantData.products[i][key].category){
          flag= true;
          searchdata.push(pantData.products[i][key].category)
          break;
        }
    }
  }

  if(flag){
    let seacrhpage= document.createElement("a")
    seacrhpage.setAttribute("href", "../Homepage/search.html")
    seacrhpage.click()

  }

})
