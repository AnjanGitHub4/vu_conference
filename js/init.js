let upiWrapper = document.querySelector(".upi-qr-wrapper img");
let modalBody = document.querySelector(".modal-body");
let temp = '';

upiWrapper.addEventListener("click", (eArgs) => {
    temp += `<img src="./images/QR_Code.jpg" alt="payment-upi-qr-code">`;
    if(modalBody.innerHTML===""){
        upiWrapper.innerHTML = "";
        modalBody.innerHTML = temp;
    }else {
        upiWrapper.style.display="block";
        upiWrapper.innerHTML = temp;
    }
});


