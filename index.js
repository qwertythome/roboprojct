const bodylist=document.querySelector(".grid")
fetch("http://localhost:3000/api/allproducts")
.then(data=>data.json()
.then(res=>bild(res.products)))
function bild(res){
    let html = "";
    res.forEach((i)=>{ 

      html +=`
   <div class="card">
                <div class="text">
                    name:${i.title}
                    price:${i.price}
                </div>
                <div class="fal">
                    <span class="activ material-symbols-outlined activ">favorite</span> 
                    <span class="activdis material-symbols-outlined">thumb_down</span>          
                </div>
            </div>`
    })
    bodylist.innerHTML = html;
}
