

function run(){
const html = document.querySelector("#html").value;
const css  = document.querySelector("#css").value;
const javscript =  document.querySelector("#javascript").value;
const output = document.querySelector("#output");

    output.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
    output.contentWindow.eval(javscript);
}
