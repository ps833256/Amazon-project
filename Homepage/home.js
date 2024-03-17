

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