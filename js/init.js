let upiWrapper = document.querySelector(".upi-qr-wrapper img");
let modalBody = document.querySelector(".modal-body");
let preLoader = document.querySelector(".preloader");
let temp = '';
// preloader animation start-up
const loader = () => {
    console.log("loading....");
    document.body.style.overflow = "hidden";
    setTimeout(() => {
        preLoader.style.display="none";
    document.body.style.overflow = "auto";
    }, 5000)
}
window.addEventListener('DOMContentLoaded', () => {
    loader();
});
// set qr-code image to modal-body
upiWrapper.addEventListener("click", (eArgs) => {
    temp += `<img src="./images/QR_Code.jpg" alt="payment-upi-qr-code">`;
    if (modalBody.innerHTML === "" || modalBody.innerHTML === " " || modalBody.innerHTML === "\n") {
        upiWrapper.innerHTML = "";
        modalBody.innerHTML = temp;
    } else {
        upiWrapper.style.display = "block";
        upiWrapper.innerHTML = temp;
    }
});



