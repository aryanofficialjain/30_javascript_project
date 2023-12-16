const img = document.querySelector("img");
const input = document.querySelector("input");


function qrcode(){
    let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ";
    url += input.value;
    img.src = url;
     
}

