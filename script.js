const languages = {
    en: {
        title: "Trusted Earning Sites",
        intro: "A hand-picked list of trusted platforms where you can earn extra income. Safe, real and verified.",
        footer: "Made to help people earn safely",
        meta: "Trusted ways to earn extra money online",
        sites: [
            { 
                name: "Honeygain", 
                desc: "Earn passively by sharing internet bandwidth. Low income, usually 15-30 USD per month depending on traffic. Good for beginners.", 
                link: "https://join.honeygain.com/DRDUY5A38C" 
            },
            { 
                name: "EarnApp", 
                desc: "Similar to Honeygain but has extra earning options such as surveys and tasks. Average earnings 10-30 USD per month.", 
                link: "https://earnapp.com/i/KkHYQ2cz" 
            }
        ]
    },

    vi: {
        title: "Trang web kiếm tiền uy tín",
        intro: "Danh sách các trang kiếm tiền uy tín được chọn lọc. An toàn, minh bạch và không lừa đảo.",
        footer: "Giúp mọi người kiếm tiền an toàn",
        meta: "Tổng hợp web kiếm tiền thụ động uy tín tại Việt Nam",
        sites: [
            { 
                name: "Honeygain", 
                desc: "Kiếm tiền bằng cách chia sẻ băng thông Internet. Thu nhập thấp khoảng 15-30 USD mỗi tháng. Dễ dùng và phù hợp cho người mới.", 
                link: "https://join.honeygain.com/DRDUY5A38C" 
            },
            { 
                name: "EarnApp", 
                desc: "Tương tự Honeygain nhưng có thể kiếm thêm qua khảo sát và nhiệm vụ nhỏ. Thu nhập trung bình 10-30 USD mỗi tháng.", 
                link: "https://earnapp.com/i/KkHYQ2cz" 
            }
        ]
    }
};

function detectLanguage(){
    const urlLang=new URLSearchParams(location.search).get("lang");
    if(urlLang && languages[urlLang]) return urlLang;
    if(navigator.language.startsWith("vi")) return "vi";
    return "en";
}

function render(){
    const lang=detectLanguage();
    const data=languages[lang];

    document.getElementById("pageTitle").innerText = data.title;
    document.getElementById("metaDescription").content = data.meta;

    document.getElementById("langSelector").innerHTML =
        Object.keys(languages).map(l =>
            `<option value="${l}" ${l===lang?'selected':''}>
                ${l=='en'?'English':'Tiếng Việt'}
            </option>`).join('');

    document.getElementById("title").innerText = data.title;
    document.getElementById("intro").innerText = data.intro;
    document.getElementById("footer").innerText = data.footer;

    let html="";
    data.sites.forEach(s => {
        html+=`
        <div class="card">
            <div>
                <div class="card-title">${s.name}</div>
                <div class="card-desc">${s.desc}</div>
            </div>
            <a href="${s.link}" target="_blank"><button>Visit</button></a>
        </div>`;
    });
    document.getElementById("siteList").innerHTML=html;

    document.getElementById("langSelector").onchange = e => {
        location.search="?lang="+e.target.value;
    };
}
