const accessKey = "tYNfn1sY3nlVi2AgcoNfotl3QmdFZLGOMlQu6T_HINI";

const searchbox = document.querySelector("#search-form");
const searchinput = document.querySelector("#search-box");
const searchresult = document.querySelector("#search-result");
const showbtn = document.querySelector("#show-more-btn"); // Fix: Add # before the ID

let keyword = "";
let page = 1;

async function getimg() {
    keyword = searchinput.value; // Fix: Use searchinput.value instead of searchbox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const results = data.results;

    if (page === 1) {
        searchresult.innerHTML = "";
    }

    results.map((result) => {
        const img = document.createElement("img");
        img.src = result.urls.small;

        searchresult.appendChild(img);
        showbtn.style.display = "block";
    });
}

searchbox.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    getimg();
});

showbtn.addEventListener("click", () => {
    page++;
    getimg();
});
