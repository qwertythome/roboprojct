const bodylist = document.querySelector('.grid');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:3000/api/allproducts', true);

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        try {
            const res = JSON.parse(xhr.responseText);
            if (res && res.products && Array.isArray(res.products)) {
                bild(res.products);
            } else {
                console.error("Некорректные данные от сервера:", res);
            }
        } catch (error) {
            console.error("Ошибка парсинга JSON:", error);
        }
    } else {
        console.error("Ошибка запроса:", xhr.statusText);
    }
};

xhr.onerror = function () {
    console.error("Ошибка сети");
};

xhr.send();

function bild(res) {
    console.log(res.length);
    var html = "";
    for (var i = 0; i < res.length; i++) {
        html += `
            <div class="card">
                <div class="text">
                    name:${res[i].title}
                    price:${res[i].price}
                </div>
                <div class="fal">
                    <span class="activ material-symbols-outlined activ">favorite</span> 
                    <span class="activdis material-symbols-outlined">thumb_down</span>          
                </div>
            </div>`;
    }
    bodylist.innerHTML = html;
}
