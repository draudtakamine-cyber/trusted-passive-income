// LANGUAGE SUPPORT DATA
const data = {
    en: [
        { name: "Honeygain", desc: "Earn money by simply sharing your internet bandwidth. Install and forget, multiple devices allowed. Usually earns 15-30 USD per month.", link: "https://join.honeygain.com/DRDUY5A38C" },
        { name: "EarnApp", desc: "Similar to Honeygain but offers extra ways to earn like surveys, games, tasks. Payout around 10-30 USD monthly.", link: "https://earnapp.com/i/KkHYQ2cz" }
    ],
    vi: [
        { name: "Honeygain", desc: "Kiếm tiền bằng cách chia sẻ băng thông internet. Cài đặt và để đó, có thể dùng nhiều thiết bị. Thu nhập khoảng 15-30 USD mỗi tháng.", link: "https://join.honeygain.com/DRDUY5A38C" },
        { name: "EarnApp", desc: "Tương tự Honeygain nhưng có thêm khảo sát và nhiệm vụ kiếm tiền. Thu nhập khoảng 10-30 USD mỗi tháng.", link: "https://earnapp.com/i/KkHYQ2cz" }
    ]
};

let currentLang = new URLSearchParams(window.location.search).get("lang") || "en";
loadSites(currentLang);

function loadSites(lang){
    document.getElementById("siteList").innerHTML = "";
    document.getElementById("pageTitle").textContent = lang === "vi" ? "Ứng dụng kiếm tiền" : "Earning Tools";
    document.getElementById("headerTitle").textContent = lang === "vi" ? "Danh sách kiếm tiền" : "Earning Sites";

    data[lang].forEach(site =>{
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `<h3>${site.name}</h3><p>${site.desc}</p><a href="${site.link}" target="_blank">Visit</a>`;
        document.getElementById("siteList").appendChild(div);
    });
}

// Search
document.getElementById("searchBox").addEventListener("keyup", function(){
    let value = this.value.toLowerCase();
    document.querySelectorAll(".card").forEach(card=>{
        card.style.display = card.innerText.toLowerCase().includes(value) ? "block" : "none";
    });
});

// Language switch
function switchLang(lang){
    window.location.search = "?lang=" + lang;
}
