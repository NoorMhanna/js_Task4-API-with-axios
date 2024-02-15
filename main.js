async function getProduct() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;
  //   console.log(products);

  const result = products.map(function (product) {

      return `
    <div class="product" >
      <h2> ${product.title} </h2>
      <img src= ${product.images[0]} />
      <p>${product.price}</p>
      <a href="details.html?product_id=${product.id}">details</a>
      </div>
      `;
    }).join("");
  //   console.log(products);
  document.querySelector(".products").innerHTML = result;
}

getProduct();
