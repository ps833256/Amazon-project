

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


document.getElementById("baricon").addEventListener("click",function(){
    document.getElementById("allhoverdiv").style.display= "block";
})

document.getElementById("crossicon").addEventListener("click",function(event){
    event.stopPropagation()
    
    document.getElementById("allhoverdiv").style.display= "none";
})


let bannerdata = [
    { image: "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"},
    { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/augatf23/hsbcunrec/MA_2x._CB580708889_.jpg" },
    { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg" },
    { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg" },
    { image: "https://images-eu.ssl-images-amazon.com/images/G/31/saba/branddays/5300---Kitchen---Citi-bank-strip._CB580044345_.png" },
    { image: "https://images-eu.ssl-images-amazon.com/images/G/31/saba/branddays/5300---Kitchen---Citi-bank-strip._CB580044345_.png" },
    { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/jan2024/Bau/Unrec/BOB/SHOES/Frame_386_3000pc._CB581979262_.jpg" },
    { image: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/BAU/Hero/D91435399_WLA-BAU-Unrec-Hero_DesktopTallHero_3000x1200-bau._CB582195367_.jpg" }

  ];

  let currentIndex = 0;
  function changeImage() {
    document.getElementById("cont").innerHTML = ''; 

    let img = document.createElement("img");
    img.src = bannerdata[currentIndex].image;
    img.setAttribute("width", "100%")
    img.setAttribute("height", "500px")
    cont.append(img);

    currentIndex = (currentIndex + 1) % bannerdata.length; 
  }


  document.getElementById("righticon").addEventListener("click", changeImage);

  changeImage();

  document.getElementById("lefticon").addEventListener("click", changeImage);

  changeImage();

  //card-1 //

  let data1= [ 
    { card1: { heading: "Up to 60% off | Styles for men",
   image1: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg",
   title1: "Clothing",
   image2: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg",
   title2 : "Footwear",
   image3: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg",
   title3: "Watches",
   image4: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg",
   title4: "Bags & clothes",
   
   ending: "End of season sale"
   }}]

   
   
   for(let i = 0; i < data1.length; i++){
   
    let head= document.createElement("h1")
    head.innerText= data1[0].card1.heading
   
    let firstimgdiv= document.createElement("div")
    let secondimgdiv= document.createElement("div")
    let thirdimgdiv= document.createElement("div")
    thirdimgdiv.setAttribute("class", "thirdimgdiv")
    let forthimgdiv= document.createElement("div")
    forthimgdiv.setAttribute("class", "forthimgdiv")
   
    let firstsection= document.createElement("div")
    firstsection.setAttribute("class", "firstsection")
    let secondsection= document.createElement("div")
    secondsection.setAttribute("class", "secondsection")
   
   
    let card1img= document.createElement("img")
    card1img.setAttribute("src", data1[0].card1.image1)
   
    let img1titile= document.createElement("p")
    img1titile.innerText= data1[0].card1.title1
   
    firstimgdiv.append(card1img, img1titile)
    firstimgdiv.setAttribute("class", "firstimgdiv")
   
    let card2img= document.createElement("img")
    card2img.setAttribute("src", data1[0].card1.image2)
   
    let img2titile= document.createElement("p")
    img2titile.innerText= data1[0].card1.title2
   
    secondimgdiv.append(card2img, img2titile)
    secondimgdiv.setAttribute("class", "secondimgdiv")
   
   
    let card3img= document.createElement("img")
    card3img.setAttribute("src", data1[0].card1.image3)
   
    let img3titile= document.createElement("p")
    img3titile.innerText= data1[0].card1.title3
   
    thirdimgdiv.append(card3img,img3titile)
   
   
    let card4img= document.createElement("img")
    card4img.setAttribute("src", data1[0].card1.image4)
   
    let img4titile= document.createElement("p")
    img4titile.innerText= data1[0].card1.title4
   
   
    let endofseson= document.createElement("a")
    endofseson.innerText= data1[0].card1.ending
    endofseson.setAttribute("id", "endofseson")
    endofseson.setAttribute("href", "#")
   
    forthimgdiv.append(card4img, img4titile)
   
    secondsection.append(thirdimgdiv,forthimgdiv)
    firstsection.append(firstimgdiv,secondimgdiv)
   
    document.getElementById("card1").append(head, firstsection, secondsection, endofseson)
   document.querySelector(".cardcontainer").append(card1)
   
   
}
   
// card-2 //


let data2= [
    {card2:{ heading: "Appliances for your home | Up to 55% off",
image1: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
title1: "Air conditioners",
image2: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
title2 : "Refrigerator",
image3: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
title3: "Microwaves",
image4: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
title4: "Washing Machine",

ending: "See more" }}]


for(let i = 0; i < data2.length; i++){
   
    let head= document.createElement("h1")
    head.innerText= data2[0].card2.heading
   
    let firstimgdiv= document.createElement("div")
    let secondimgdiv= document.createElement("div")
    let thirdimgdiv= document.createElement("div")
    thirdimgdiv.setAttribute("class", "thirdimgdiv")
    let forthimgdiv= document.createElement("div")
    forthimgdiv.setAttribute("class", "forthimgdiv")
   
    let firstsection= document.createElement("div")
    firstsection.setAttribute("class", "firstsection")
    let secondsection= document.createElement("div")
    secondsection.setAttribute("class", "secondsection")
   
   
    let card1img= document.createElement("img")
    card1img.setAttribute("src", data2[0].card2.image1)
   
    let img1titile= document.createElement("p")
    img1titile.innerText= data2[0].card2.title1
   
    firstimgdiv.append(card1img, img1titile)
    firstimgdiv.setAttribute("class", "firstimgdiv")
   
    let card2img= document.createElement("img")
    card2img.setAttribute("src", data2[0].card2.image2)
   
    let img2titile= document.createElement("p")
    img2titile.innerText= data2[0].card2.title2
   
    secondimgdiv.append(card2img, img2titile)
    secondimgdiv.setAttribute("class", "secondimgdiv")
   
   
    let card3img= document.createElement("img")
    card3img.setAttribute("src", data2[0].card2.image3)
   
    let img3titile= document.createElement("p")
    img3titile.innerText= data2[0].card2.title3
   
    thirdimgdiv.append(card3img,img3titile)
   
   
    let card4img= document.createElement("img")
    card4img.setAttribute("src", data2[0].card2.image4)
   
    let img4titile= document.createElement("p")
    img4titile.innerText= data2[0].card2.title4
   
   
    let endofseson= document.createElement("a")
    endofseson.innerText= data2[0].card2.ending
    endofseson.setAttribute("id", "endofseson")
    endofseson.setAttribute("href", "#")
   
    forthimgdiv.append(card4img, img4titile)
   
    secondsection.append(thirdimgdiv,forthimgdiv)
    firstsection.append(firstimgdiv,secondimgdiv)
   
    document.getElementById("card2").append(head, firstsection, secondsection, endofseson)
   document.querySelector(".cardcontainer").append(card2)


}

// card-3


let data3= [
    {card3:{ heading: "Revamp your home in style",
image1: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_furnishings_2._SY116_CB584596691_.jpg",
title1: "Cushion covers, bedsheets & more",
image2: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg",
title2 : "Figurines, vases and more",
image3: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_storage_1._SY116_CB584596691_.jpg",
title3: "Home storage",
image4: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_lighting_2._SY116_CB584596691_.jpg",
title4: "Lighting solutions",

ending: "Explore all" }}]

for (let i = 0; i < data3.length; i++) {

   let head = document.createElement("h1")
   head.innerText = data3[0].card3.heading

   let firstimgdiv = document.createElement("div")
   firstimgdiv.setAttribute("class", "firstimgdiv")
   let secondimgdiv = document.createElement("div")
   secondimgdiv.setAttribute("class", "secondimgdiv")
   let thirdimgdiv = document.createElement("div")
   thirdimgdiv.setAttribute("class", "thirdimgdiv")
   let forthimgdiv = document.createElement("div")
   forthimgdiv.setAttribute("class", "forthimgdiv")

   let firstsection = document.createElement("div")
   firstsection.setAttribute("class", "firstsection")
   let secondsection = document.createElement("div")
   secondsection.setAttribute("class", "secondsection")


   let card1img = document.createElement("img")
   card1img.setAttribute("src", data3[0].card3.image1)

   let img1titile = document.createElement("p")
   img1titile.innerText = data3[0].card3.title1

   firstimgdiv.append(card1img, img1titile)

   let card2img = document.createElement("img")
   card2img.setAttribute("src", data3[0].card3.image2)

   let img2titile = document.createElement("p")
   img2titile.innerText = data3[0].card3.title2

   secondimgdiv.append(card2img, img2titile)


   let card3img = document.createElement("img")
   card3img.setAttribute("src", data3[0].card3.image3)

   let img3titile = document.createElement("p")
   img3titile.innerText = data3[0].card3.title3

   thirdimgdiv.append(card3img, img3titile)


   let card4img = document.createElement("img")
   card4img.setAttribute("src", data3[0].card3.image4)

   let img4titile = document.createElement("p")
   img4titile.innerText = data3[0].card3.title4


   let exploreall = document.createElement("a")
   exploreall.innerText = data3[0].card3.ending
   exploreall.setAttribute("id", "exploreall")
   exploreall.setAttribute("href", "#")

   forthimgdiv.append(card4img, img4titile)


   secondsection.append(thirdimgdiv, forthimgdiv)

   firstsection.append(firstimgdiv, secondimgdiv)


   document.getElementById("card3").append(head, firstsection, secondsection, exploreall)
   document.querySelector(".cardcontainer").append(card3)

}


// card-4//


let data4= [
    {card4:{ heading: "Up to 75% off | Headphones",
image1: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boat_Desktop_Qc_1x._SY116_CB577919562_.jpg",
title1: "Up to 75% off | boAt",
image2: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boult_Desktop_Qc_1x._SY116_CB577919562_.jpg",
title2 : "Up to 75% off | boult",
image3: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Noise_Desktop_Qc_1x._SY116_CB577919562_.jpg",
title3: "Up to 75% off | Noise",
image4: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Zebronics_Desktop_Qc_1x._SY116_CB577919562_.jpg",
title4: "Up to 75% off | Zebronics",

ending: "See all offers" }}]


for (let i = 0; i < data4.length; i++) {

    let head = document.createElement("h1")
    head.innerText = data4[0].card4.heading
 
    let firstimgdiv = document.createElement("div")
    firstimgdiv.setAttribute("class", "firstimgdiv")
    let secondimgdiv = document.createElement("div")
    secondimgdiv.setAttribute("class", "secondimgdiv")
    let thirdimgdiv = document.createElement("div")
    thirdimgdiv.setAttribute("class", "thirdimgdiv")
    let forthimgdiv = document.createElement("div")
    forthimgdiv.setAttribute("class", "forthimgdiv")
 
    let firstsection = document.createElement("div")
    firstsection.setAttribute("class", "firstsection")
    let secondsection = document.createElement("div")
    secondsection.setAttribute("class", "secondsection")
 
 
    let card1img = document.createElement("img")
    card1img.setAttribute("src", data4[0].card4.image1)
 
    let img1titile = document.createElement("p")
    img1titile.innerText = data4[0].card4.title1
 
    firstimgdiv.append(card1img, img1titile)
 
    let card2img = document.createElement("img")
    card2img.setAttribute("src", data4[0].card4.image2)
 
    let img2titile = document.createElement("p")
    img2titile.innerText = data4[0].card4.title2
 
    secondimgdiv.append(card2img, img2titile)
 
 
    let card3img = document.createElement("img")
    card3img.setAttribute("src", data4[0].card4.image3)
 
    let img3titile = document.createElement("p")
    img3titile.innerText = data4[0].card4.title3
 
    thirdimgdiv.append(card3img, img3titile)
 
 
    let card4img = document.createElement("img")
    card4img.setAttribute("src", data4[0].card4.image4)
 
    let img4titile = document.createElement("p")
    img4titile.innerText = data4[0].card4.title4
 
 
    let exploreall = document.createElement("a")
    exploreall.innerText = data4[0].card4.ending
    exploreall.setAttribute("id", "exploreall")
    exploreall.setAttribute("href", "#")
 
    forthimgdiv.append(card4img, img4titile)
 
 
    secondsection.append(thirdimgdiv, forthimgdiv)
 
    firstsection.append(firstimgdiv, secondimgdiv)
 
 
    document.getElementById("card4").append(head, firstsection, secondsection, exploreall)
    document.querySelector(".cardcontainer").append(card4)


}

//card= 5

let data5= [
    {card5:{ heading: "Starting ₹99 | All your home improvement needs",
image1: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_4._SY116_CB600489960_.jpg",
title1: "Spin mops, wipes & more",
image2: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_3._SY116_CB600489960_.jpg",
title2 : "Bathroom hardware & accessories",
image3: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_7._SY116_CB600489960_.jpg",
title3: "Hammers, screwdrivers & more",
image4: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_5._SY116_CB600489960_.jpg",
title4: "Extension boards, plugs & more",

ending: "Explore all" }}]


for (let i = 0; i < data5.length; i++) {

    let head = document.createElement("h1")
    head.innerText = data5[0].card5.heading
 
    let firstimgdiv = document.createElement("div")
    firstimgdiv.setAttribute("class", "firstimgdiv")
    let secondimgdiv = document.createElement("div")
    secondimgdiv.setAttribute("class", "secondimgdiv")
    let thirdimgdiv = document.createElement("div")
    thirdimgdiv.setAttribute("class", "thirdimgdiv")
    let forthimgdiv = document.createElement("div")
    forthimgdiv.setAttribute("class", "forthimgdiv")
 
    let firstsection = document.createElement("div")
    firstsection.setAttribute("class", "firstsection")
    let secondsection = document.createElement("div")
    secondsection.setAttribute("class", "secondsection")
 
 
    let card1img = document.createElement("img")
    card1img.setAttribute("src", data5[0].card5.image1)
 
    let img1titile = document.createElement("p")
    img1titile.innerText = data5[0].card5.title1
 
    firstimgdiv.append(card1img, img1titile)
 
    let card2img = document.createElement("img")
    card2img.setAttribute("src", data5[0].card5.image2)
 
    let img2titile = document.createElement("p")
    img2titile.innerText = data5[0].card5.title2
 
    secondimgdiv.append(card2img, img2titile)
 
 
    let card3img = document.createElement("img")
    card3img.setAttribute("src", data5[0].card5.image3)
 
    let img3titile = document.createElement("p")
    img3titile.innerText = data5[0].card5.title3
 
    thirdimgdiv.append(card3img, img3titile)
 
 
    let card4img = document.createElement("img")
    card4img.setAttribute("src", data5[0].card5.image4)
 
    let img4titile = document.createElement("p")
    img4titile.innerText = data5[0].card5.title4
 
 
    let exploreall = document.createElement("a")
    exploreall.innerText = data5[0].card5.ending
    exploreall.setAttribute("id", "exploreall")
    exploreall.setAttribute("href", "#")
 
    forthimgdiv.append(card4img, img4titile)
 
 
    secondsection.append(thirdimgdiv, forthimgdiv)
 
    firstsection.append(firstimgdiv, secondimgdiv)
 
 
    document.getElementById("card5").append(head, firstsection, secondsection, exploreall)
    document.querySelector(".cardcontainer2").append(card5)


}


// card-6//


let data6= [
    {card6:{ heading: "Up to 60% off | Styles for women",
image1: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg",
title1: "Women's Clothing",
image2: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg",
title2 : "Footwear+Handbags",
image3: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg",
title3: "Watches",
image4: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg",
title4: "Fashion jewellery",

ending: "End of season sale" }}]

for (let i = 0; i < data6.length; i++) {

    let head = document.createElement("h1")
    head.innerText = data6[0].card6.heading
 
    let firstimgdiv = document.createElement("div")
    firstimgdiv.setAttribute("class", "firstimgdiv")
    let secondimgdiv = document.createElement("div")
    secondimgdiv.setAttribute("class", "secondimgdiv")
    let thirdimgdiv = document.createElement("div")
    thirdimgdiv.setAttribute("class", "thirdimgdiv")
    let forthimgdiv = document.createElement("div")
    forthimgdiv.setAttribute("class", "forthimgdiv")
 
    let firstsection = document.createElement("div")
    firstsection.setAttribute("class", "firstsection")
    let secondsection = document.createElement("div")
    secondsection.setAttribute("class", "secondsection")
 
 
    let card1img = document.createElement("img")
    card1img.setAttribute("src", data6[0].card6.image1)
 
    let img1titile = document.createElement("p")
    img1titile.innerText = data6[0].card6.title1
 
    firstimgdiv.append(card1img, img1titile)
 
    let card2img = document.createElement("img")
    card2img.setAttribute("src", data6[0].card6.image2)
 
    let img2titile = document.createElement("p")
    img2titile.innerText = data6[0].card6.title2
 
    secondimgdiv.append(card2img, img2titile)
 
 
    let card3img = document.createElement("img")
    card3img.setAttribute("src", data6[0].card6.image3)
 
    let img3titile = document.createElement("p")
    img3titile.innerText = data6[0].card6.title3
 
    thirdimgdiv.append(card3img, img3titile)
 
 
    let card4img = document.createElement("img")
    card4img.setAttribute("src", data6[0].card6.image4)
 
    let img4titile = document.createElement("p")
    img4titile.innerText = data6[0].card6.title4
 
 
    let exploreall = document.createElement("a")
    exploreall.innerText = data6[0].card6.ending
    exploreall.setAttribute("id", "exploreall")
    exploreall.setAttribute("href", "#")
 
    forthimgdiv.append(card4img, img4titile)
 
 
    secondsection.append(thirdimgdiv, forthimgdiv)
 
    firstsection.append(firstimgdiv, secondimgdiv)
 
 
    document.getElementById("card6").append(head, firstsection, secondsection, exploreall)
    document.querySelector(".cardcontainer2").append(card6)


}


// card- 7//


let data7= [
    {card7:{ heading: "Discover TVs by your ideal size | Starting ₹6,999",
image1: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Manish/BAU/MARCH/pri/rev/revs/shop/32._SY116_CB578871436_.jpg",
title1: "Budget TVs | Save extra with No Cost EMI",
image2: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Manish/BAU/MARCH/pri/rev/revs/shop/43._SY116_CB578871436_.jpg",
title2 : "4K TVs | Up to 24 months No Cost EMI",
image3: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Manish/BAU/MARCH/pri/rev/revs/shop/55._SY116_CB578871436_.jpg",
title3: "Big Screens | Free installation",
image4: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Manish/BAU/MARCH/pri/rev/revs/shop/65._SY116_CB578871436_.jpg",
title4: "Ultra Premium TVs | Up to 50% off",

ending: "See all" }}]


for (let i = 0; i < data7.length; i++) {

    let head = document.createElement("h1")
    head.innerText = data7[0].card7.heading
 
    let firstimgdiv = document.createElement("div")
    firstimgdiv.setAttribute("class", "firstimgdiv")
    let secondimgdiv = document.createElement("div")
    secondimgdiv.setAttribute("class", "secondimgdiv")
    let thirdimgdiv = document.createElement("div")
    thirdimgdiv.setAttribute("class", "thirdimgdiv")
    let forthimgdiv = document.createElement("div")
    forthimgdiv.setAttribute("class", "forthimgdiv")
 
    let firstsection = document.createElement("div")
    firstsection.setAttribute("class", "firstsection")
    let secondsection = document.createElement("div")
    secondsection.setAttribute("class", "secondsection")
 
 
    let card1img = document.createElement("img")
    card1img.setAttribute("src", data7[0].card7.image1)
 
    let img1titile = document.createElement("p")
    img1titile.innerText = data7[0].card7.title1
 
    firstimgdiv.append(card1img, img1titile)
 
    let card2img = document.createElement("img")
    card2img.setAttribute("src", data7[0].card7.image2)
 
    let img2titile = document.createElement("p")
    img2titile.innerText = data7[0].card7.title2
 
    secondimgdiv.append(card2img, img2titile)
 
 
    let card3img = document.createElement("img")
    card3img.setAttribute("src", data7[0].card7.image3)
 
    let img3titile = document.createElement("p")
    img3titile.innerText = data7[0].card7.title3
 
    thirdimgdiv.append(card3img, img3titile)
 
 
    let card4img = document.createElement("img")
    card4img.setAttribute("src", data7[0].card7.image4)
 
    let img4titile = document.createElement("p")
    img4titile.innerText = data7[0].card7.title4
 
 
    let exploreall = document.createElement("a")
    exploreall.innerText = data7[0].card7.ending
    exploreall.setAttribute("id", "exploreall")
    exploreall.setAttribute("href", "#")
 
    forthimgdiv.append(card4img, img4titile)
 
 
    secondsection.append(thirdimgdiv, forthimgdiv)
 
    firstsection.append(firstimgdiv, secondimgdiv)
 
 
    document.getElementById("card7").append(head, firstsection, secondsection, exploreall)
    document.querySelector(".cardcontainer2").append(card7)


}


// Card- 8//

let data8= [
    {card8:{ heading: "Automotive essentials | Up to 60% off",
image1: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
title1: "Cleaning accessories",
image2: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
title2 : "Tyre & rim care",
image3: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
title3: "Helmets",
image4: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
title4: "Vacuum cleaner",

ending: "See more" }}]


for (let i = 0; i < data8.length; i++) {

    let head = document.createElement("h1")
    head.innerText = data8[0].card8.heading
 
    let firstimgdiv = document.createElement("div")
    firstimgdiv.setAttribute("class", "firstimgdiv")
    let secondimgdiv = document.createElement("div")
    secondimgdiv.setAttribute("class", "secondimgdiv")
    let thirdimgdiv = document.createElement("div")
    thirdimgdiv.setAttribute("class", "thirdimgdiv")
    let forthimgdiv = document.createElement("div")
    forthimgdiv.setAttribute("class", "forthimgdiv")
 
    let firstsection = document.createElement("div")
    firstsection.setAttribute("class", "firstsection")
    let secondsection = document.createElement("div")
    secondsection.setAttribute("class", "secondsection")
 
 
    let card1img = document.createElement("img")
    card1img.setAttribute("src", data8[0].card8.image1)
 
    let img1titile = document.createElement("p")
    img1titile.innerText = data8[0].card8.title1
 
    firstimgdiv.append(card1img, img1titile)
 
    let card2img = document.createElement("img")
    card2img.setAttribute("src", data8[0].card8.image2)
 
    let img2titile = document.createElement("p")
    img2titile.innerText = data8[0].card8.title2
 
    secondimgdiv.append(card2img, img2titile)
 
 
    let card3img = document.createElement("img")
    card3img.setAttribute("src", data8[0].card8.image3)
 
    let img3titile = document.createElement("p")
    img3titile.innerText = data8[0].card8.title3
 
    thirdimgdiv.append(card3img, img3titile)
 
 
    let card4img = document.createElement("img")
    card4img.setAttribute("src", data8[0].card8.image4)
 
    let img4titile = document.createElement("p")
    img4titile.innerText = data8[0].card8.title4
 
 
    let exploreall = document.createElement("a")
    exploreall.innerText = data8[0].card8.ending
    exploreall.setAttribute("id", "exploreall")
    exploreall.setAttribute("href", "#")
 
    forthimgdiv.append(card4img, img4titile)
 
 
    secondsection.append(thirdimgdiv, forthimgdiv)
 
    firstsection.append(firstimgdiv, secondimgdiv)
 
 
    document.getElementById("card8").append(head, firstsection, secondsection, exploreall)
    document.querySelector(".cardcontainer2").append(card8)


}



// today's deals section//

let todaydealsdata= [
    {mobdiv:{ heading: "Todays Deals",
    subanchor: "See all deals",
    limited: "Limited time deals",
image1: "https://m.media-amazon.com/images/I/41WnWm3IjiL._AC_SY200_.jpg",
title1: "Up to 20% off",
title2: "iQOO Z9 5G || Newly Launched @17999",
image2: "https://m.media-amazon.com/images/I/41m-C1HHkIL._AC_SY200_.jpg",
title3: "Up to 11% off",
title4: "iQOO Neo9 Pro | Starting 35999 Including add. offersiQOO Neo9 Pro | Starting 35999 Inclu…",
image3: "https://m.media-amazon.com/images/I/41yAce7gd4L._AC_SY200_.jpg",
title5: "11% off",
title6: "iQOO Z7 Pro | Most loved Smartphone @21999iQOO Z7 Pro | Most loved Smartphon…",
image4: "https://m.media-amazon.com/images/I/411gvmvNQzL._AC_SY200_.jpg",
title7: "Up to 12% off",
title8: "iQOO 12 5G | India's only Flagship with 50MP @ 50999iQOO 12 5G | India's only Flagship wit…",
image5: "https://m.media-amazon.com/images/I/411iWoJEJjL._AC_SY200_.jpg",
title9: "Up to 37% off",
title10: "Redmi 13C | Starting from 7799 including additional offersRedmi 13C | Starting from 7799 inclu…",
image6: "https://m.media-amazon.com/images/I/51JaSbauK3L._AC_SY200_.jpg",
title11: "30% off",
title12: "₹19,999.00M.R.P.: ₹28,499.00 Samsung Galaxy M34Samsung Galaxy M34",
image7: "https://m.media-amazon.com/images/I/41888-BWxKL._AC_SY200_.jpg",
title13: "45% off",
title14: "₹5,999.00M.R.P.: ₹10,999.00 POCO C51 | Starting from 5499 including additional offersPOCO C51 | Starting from 5499 includ…",
image8: "https://m.media-amazon.com/images/I/51o13K4h3-L._AC_SY200_.jpg",
title15: "Up to 23% off",
title16: "iQOO Neo 7 Pro | Powerful Smartphone @29999iQOO Neo 7 Pro | Powerful Smartpho…",
image9: "https://m.media-amazon.com/images/I/41ArHnIL7uL._AC_SY200_.jpg",
title17: "54% off",
title18: "₹6,499.00M.R.P.: ₹13,999.00 POCO C55 | Starting from 5999 including additional offersPOCO C55 | Starting from 5999 includ…",
image10: "https://m.media-amazon.com/images/I/41dEcQR7UnL._AC_SY200_.jpg",
title19: "36% off",
title20: "₹8,999.00M.R.P.: ₹13,999.00 Starting from 8999 including additional offersStarting from 8999 including addition…",
}}]



for(let i= 0; i< todaydealsdata.length; i++){

    let product1div= document.createElement("div")
    product1div.setAttribute("class", "product1")

    let product2div= document.createElement("div")
    product2div.setAttribute("class", "product1")

    let product3div= document.createElement("div")
    product3div.setAttribute("class", "product1")

    let product4div= document.createElement("div")
    product4div.setAttribute("class", "product1")

    let product5div= document.createElement("div")
    product5div.setAttribute("class", "product1")

    let product6div= document.createElement("div")
    product6div.setAttribute("class", "product1")

    let product7div= document.createElement("div")
    product7div.setAttribute("class", "product1")

    let product8div= document.createElement("div")
    product8div.setAttribute("class", "product1")

    let product9div= document.createElement("div")
    product9div.setAttribute("class", "product1")

    let product10div= document.createElement("div")
    product10div.setAttribute("class", "product1")


    let imgdiv1= document.createElement("div")
    imgdiv1.setAttribute("class", "imgdiv")

    let imgdiv2= document.createElement("div")
    imgdiv2.setAttribute("class", "imgdiv")

    let imgdiv3= document.createElement("div")
    imgdiv3.setAttribute("class", "imgdiv")

    let imgdiv4= document.createElement("div")
    imgdiv4.setAttribute("class", "imgdiv")

    let imgdiv5= document.createElement("div")
    imgdiv5.setAttribute("class", "imgdiv")

    let imgdiv6= document.createElement("div")
    imgdiv6.setAttribute("class", "imgdiv")

    let imgdiv7= document.createElement("div")
    imgdiv7.setAttribute("class", "imgdiv")

    let imgdiv8= document.createElement("div")
    imgdiv8.setAttribute("class", "imgdiv")

    let imgdiv9= document.createElement("div")
    imgdiv9.setAttribute("class", "imgdiv")

    let imgdiv10= document.createElement("div")
    imgdiv10.setAttribute("class", "imgdiv")
    
    let productimg1= document.createElement("img")
    productimg1.setAttribute("src", todaydealsdata[0].mobdiv.image1)
    productimg1.setAttribute("class","productimg")

    let productimg2= document.createElement("img")
    productimg2.setAttribute("src", todaydealsdata[0].mobdiv.image2)
    productimg2.setAttribute("class","productimg" )

    let productimg3= document.createElement("img")
    productimg3.setAttribute("src", todaydealsdata[0].mobdiv.image3)
    productimg3.setAttribute("class","productimg" )

    let productimg4= document.createElement("img")
    productimg4.setAttribute("src", todaydealsdata[0].mobdiv.image4)
    productimg4.setAttribute("class","productimg" )

    let productimg5= document.createElement("img")
    productimg5.setAttribute("src", todaydealsdata[0].mobdiv.image5)
    productimg5.setAttribute("class","productimg" )

    let productimg6= document.createElement("img")
    productimg6.setAttribute("src", todaydealsdata[0].mobdiv.image6)
    productimg6.setAttribute("class","productimg" )

    let productimg7= document.createElement("img")
    productimg7.setAttribute("src", todaydealsdata[0].mobdiv.image7)
    productimg7.setAttribute("class","productimg")

    let productimg8= document.createElement("img")
    productimg8.setAttribute("src", todaydealsdata[0].mobdiv.image8)
    productimg8.setAttribute("class","productimg")

    let productimg9= document.createElement("img")
    productimg9.setAttribute("src", todaydealsdata[0].mobdiv.image9)
    productimg9.setAttribute("class","productimg")

    let productimg10= document.createElement("img")
    productimg10.setAttribute("src", todaydealsdata[0].mobdiv.image10)
    productimg10.setAttribute("class","productimg")

    imgdiv1.append(productimg1)
    imgdiv2.append(productimg2)
    imgdiv3.append(productimg3)
    imgdiv4.append(productimg4)
    imgdiv5.append(productimg5)
    imgdiv6.append(productimg6)
    imgdiv7.append(productimg7)
    imgdiv8.append(productimg8)
    imgdiv9.append(productimg9)
    imgdiv10.append(productimg10)

    let title1div= document.createElement("div")
    title1div.setAttribute("class", "title1div")

    let title2div= document.createElement("div")
    title2div.setAttribute("class", "title1div")

    let title3div= document.createElement("div")
    title3div.setAttribute("class", "title1div")

    let title4div= document.createElement("div")
    title4div.setAttribute("class", "title1div")

    let title5div= document.createElement("div")
    title5div.setAttribute("class", "title1div")

    let title6div= document.createElement("div")
    title6div.setAttribute("class", "title1div")

    let title7div= document.createElement("div")
    title7div.setAttribute("class", "title1div")

    let title8div= document.createElement("div")
    title8div.setAttribute("class", "title1div")

    let title9div= document.createElement("div")
    title9div.setAttribute("class", "title1div")

    let title10div= document.createElement("div")
    title10div.setAttribute("class", "title1div")

    let title1= document.createElement("p")
    title1.setAttribute("class", "title1")
    title1.innerText= todaydealsdata[0].mobdiv.title1

    let title2= document.createElement("p")
    title2.setAttribute("class", "title1")
    title2.innerText= todaydealsdata[0].mobdiv.title3

    let title3= document.createElement("p")
    title3.setAttribute("class", "title1")
    title3.innerText= todaydealsdata[0].mobdiv.title5
    

    let title4= document.createElement("p")
    title4.setAttribute("class", "title1")
    title4.innerText= todaydealsdata[0].mobdiv.title7

    let title5= document.createElement("p")
    title5.setAttribute("class", "title1")
    title5.innerText= todaydealsdata[0].mobdiv.title9

    let title6= document.createElement("p")
    title6.setAttribute("class", "title1")
    title6.innerText= todaydealsdata[0].mobdiv.title11

    let title7= document.createElement("p")
    title7.setAttribute("class", "title1")
    title7.innerText= todaydealsdata[0].mobdiv.title13

    let title8= document.createElement("p")
    title8.setAttribute("class", "title1")
    title8.innerText= todaydealsdata[0].mobdiv.title15

    let title9= document.createElement("p")
    title9.setAttribute("class", "title1")
    title9.innerText= todaydealsdata[0].mobdiv.title17

    let title10= document.createElement("p")
    title10.setAttribute("class", "title1")
    title10.innerText= todaydealsdata[0].mobdiv.title19

    let limitedtitle1= document.createElement("p")
    limitedtitle1.setAttribute("class", "title2")
    limitedtitle1.innerText= todaydealsdata[0].mobdiv.limited

    let limitedtitle2= document.createElement("p")
    limitedtitle2.setAttribute("class", "title2")
    limitedtitle2.innerText= todaydealsdata[0].mobdiv.limited

    let limitedtitle3= document.createElement("p")
    limitedtitle3.setAttribute("class", "title2")
    limitedtitle3.innerText= todaydealsdata[0].mobdiv.limited

    let limitedtitle4= document.createElement("p")
    limitedtitle4.setAttribute("class", "title2")
    limitedtitle4.innerText= todaydealsdata[0].mobdiv.limited

    let limitedtitle5= document.createElement("p")
    limitedtitle5.setAttribute("class", "title2")
    limitedtitle5.innerText= todaydealsdata[0].mobdiv.limited

    let limitedtitle6= document.createElement("p")
    limitedtitle6.setAttribute("class", "title2")
    limitedtitle6.innerText= todaydealsdata[0].mobdiv.limited

    let limitedtitle7= document.createElement("p")
    limitedtitle7.setAttribute("class", "title2")
    limitedtitle7.innerText= todaydealsdata[0].mobdiv.limited

    let limitedtitle8= document.createElement("p")
    limitedtitle8.setAttribute("class", "title2")
    limitedtitle8.innerText= todaydealsdata[0].mobdiv.limited

    let limitedtitle9= document.createElement("p")
    limitedtitle9.setAttribute("class", "title2")
    limitedtitle9.innerText= todaydealsdata[0].mobdiv.limited

    let limitedtitle10= document.createElement("p")
    limitedtitle10.setAttribute("class", "title2")
    limitedtitle10.innerText= todaydealsdata[0].mobdiv.limited


    let des1= document.createElement("p")
    des1.innerText= todaydealsdata[0].mobdiv.title2
    let des2= document.createElement("p")
    des2.innerText= todaydealsdata[0].mobdiv.title4

    let des3= document.createElement("p")
    des3.innerText= todaydealsdata[0].mobdiv.title6

    let des4= document.createElement("p")
    des4.innerText= todaydealsdata[0].mobdiv.title8

    let des5= document.createElement("p")
    des5.innerText= todaydealsdata[0].mobdiv.title10

    let des6= document.createElement("p")
    des6.innerText= todaydealsdata[0].mobdiv.title12

    let des7= document.createElement("p")
    des7.innerText= todaydealsdata[0].mobdiv.title14

    let des8= document.createElement("p")
    des8.innerText= todaydealsdata[0].mobdiv.title16

    let des9= document.createElement("p")
    des9.innerText= todaydealsdata[0].mobdiv.title18

    let des10= document.createElement("p")
    des10.innerText= todaydealsdata[0].mobdiv.title20
   

    title1div.append(title1,limitedtitle1)
    title2div.append(title2,limitedtitle2)
    title3div.append(title3,limitedtitle3)
    title4div.append(title4,limitedtitle4)
    title5div.append(title5,limitedtitle5)
    title6div.append(title6,limitedtitle6)
    title7div.append(title7,limitedtitle7)
    title8div.append(title8,limitedtitle8)
    title9div.append(title9,limitedtitle9)
    title10div.append(title10,limitedtitle10)

    product1div.append(imgdiv1, title1div,des1)
    product2div.append(imgdiv2,title2div, des2)
    product3div.append(imgdiv3, title3div, des3)
    product4div.append(imgdiv4, title4div, des4)
    product5div.append(imgdiv5, title5div, des5)
    product6div.append(imgdiv6, title6div, des6)
    product7div.append(imgdiv7, title7div, des7)
    product8div.append(imgdiv8, title8div, des8)
    product9div.append(imgdiv9, title9div, des9)
    product10div.append(imgdiv10, title10div, des10)


    document.getElementById("cardcontainer").append( product1div, product2div,product3div, product4div, product5div, product6div, product7div, product8div, product9div, product10div)


}



let  dealsContainer = document.getElementById("cardcontainer")

dealsContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  dealsContainer.scrollLeft += event.deltaY;
});