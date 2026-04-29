const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick =function()
{
    navbar.classList.toggle("active");
     menuIcon.classList.toggle("bx-menu");
    menuIcon.classList.toggle("bx-x");
    
}
/*  card -count*/ 
const addToCartBtns = document.querySelectorAll(".add-to-cart");
const cartCount = document.querySelector("#cart-count");

let count = 0;
let cartItems = [];
addToCartBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {

        const card = btn.closest(".card")
        const productName = card.querySelector("h3").innerText;
        cartItems.push(productName);
        count++;
        cartCount.textContent = count;

          console.log(cartItems);
    });
});
