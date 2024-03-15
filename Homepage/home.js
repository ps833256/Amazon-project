

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

  

  let data= [ 
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
   
   
   for(let i = 0; i < data.length; i++){
   
    let head= document.createElement("h1")
    head.innerText= data[0].card1.heading
   
    let firstimgdiv= document.createElement("div")
    let secondimgdiv= document.createElement("div")
    let thirdimgdiv= document.createElement("div")
    thirdimgdiv.setAttribute("id", "thirdimgdiv")
    let forthimgdiv= document.createElement("div")
    forthimgdiv.setAttribute("id", "forthimgdiv")
   
    let firstsection= document.createElement("div")
    firstsection.setAttribute("id", "firstsection")
    let secondsection= document.createElement("div")
    secondsection.setAttribute("id", "secondsection")
   
   
    let card1img= document.createElement("img")
    card1img.setAttribute("src", data[0].card1.image1)
   
    let img1titile= document.createElement("p")
    img1titile.innerText= data[0].card1.title1
   
    firstimgdiv.append(card1img, img1titile)
    firstimgdiv.setAttribute("id", "firstimgdiv")
   
    let card2img= document.createElement("img")
    card2img.setAttribute("src", data[0].card1.image2)
   
    let img2titile= document.createElement("p")
    img2titile.innerText= data[0].card1.title2
   
    secondimgdiv.append(card2img, img2titile)
    secondimgdiv.setAttribute("id", "secondimgdiv")
   
   
    let card3img= document.createElement("img")
    card3img.setAttribute("src", data[0].card1.image3)
   
    let img3titile= document.createElement("p")
    img3titile.innerText= data[0].card1.title3
   
    thirdimgdiv.append(card3img,img3titile)
   
   
    let card4img= document.createElement("img")
    card4img.setAttribute("src", data[0].card1.image4)
   
    let img4titile= document.createElement("p")
    img4titile.innerText= data[0].card1.title4
   
   
    let endofseson= document.createElement("a")
    endofseson.innerText= data[0].card1.ending
    endofseson.setAttribute("id", "endofseson")
    endofseson.setAttribute("href", "#")
   
    forthimgdiv.append(card4img, img4titile)
   
   
    secondsection.append(thirdimgdiv,forthimgdiv)
    firstsection.append(firstimgdiv,secondimgdiv)
   
    document.getElementById("cardcontainer").append(head, firstsection, secondsection, endofseson)
   
   
}
   

