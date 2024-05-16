
let data = JSON.parse(localStorage.getItem("matchcarddata"));
if (data === null) {
    data = [];
}

forPrice(data);

function forPrice(data) {
    data.forEach(element => {
        let item = document.getElementById("itemsdiv");
        let preitem = document.createElement("pre");
        preitem.innerText = `Items:                                                                 ₹${element.price}`;

        let totalpricewithdelivery = document.getElementById("Totaldiv");
        let pretotal = document.createElement("pre");
        pretotal.innerText = `Total:                                                           ₹${parseFloat(element.price) + 40}.00`;

        let ordertotalpricefinal = document.getElementById("totalorderdiv");
        let totalfinalpre = document.createElement("pre");
        totalfinalpre.innerText = `Order Total:                          ₹${parseFloat(element.price - 40)}.00`;

        ordertotalpricefinal.append(totalfinalpre);
        totalpricewithdelivery.append(pretotal);
        item.append(preitem);
    });
}



document.getElementById("submitbtnaddress").addEventListener("click", function () {
    let addressValue = document.getElementById("cxaddress").value;
    console.log(addressValue);

    if (addressValue === "") {
        alert("Please type your delivery address");
    } else {
        document.getElementById("cxaddress").value = "";
        alert("Your delivery address has been saved. Please select your payment method.");
        orderPlaced(addressValue, null);
    }
});

document.getElementById("selectedpaymentbtn").addEventListener("click", function () {
    let selectedPaymentMethod = document.querySelector('input[name="paymentmethod"]:checked');

    if (selectedPaymentMethod) {
        let paymentMethod = selectedPaymentMethod.value;
        console.log("Selected Payment Method:", paymentMethod);
        orderPlaced(null, paymentMethod);
    } else {
        alert("Please select a payment method.");
    }
});

function orderPlaced(address, paymentMethod) {
    let orderPlacedBtn = document.getElementById("placeyourorderbtn");
    orderPlacedBtn.addEventListener("click", function () {
        let addressValue = address || "";
        let method = paymentMethod || "";

        setTimeout(() => {

            let orderPlaced= document.createElement("a")
            orderPlaced.setAttribute("href", "../OrderPlaced/orderplaced.html")
            orderPlaced.click()

            let orderplaceheading= document.createElement("h2")
            orderplaceheading.innerText= `Your Order has been placed and it will be delivered at ${addressValue} with ${method} payment method.`

            
            console.log(`Your Order has been placed and it will be delivered at ${addressValue} with ${method} payment method.`);
            
        }, 3000);
    });


}



