const bodylist = document.querySelector(".grid");

fetch("http://localhost:3000/api/allproducts")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((res) => {
    console.log("Відповідь:", res);
    build(res.products);
  });

function build(products) {
  let html = "";
  for (let i = 0; i < products.length; i++) {
    html += `
      <div class="card">
        <div class="text">
          name:${products[i].title}
          price:${products[i].price}
        </div>
        <div class="fal">
          <span class="activ material-symbols-outlined activ">favorite</span> 
          <span class="activdis material-symbols-outlined">thumb_down</span>          
        </div>
      </div>`;
  }
  bodylist.innerHTML = html;
}
