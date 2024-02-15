async function getDetails() {
  const url = new URLSearchParams(window.location.search);
  // console.log(url.get('product_id'));

  const id = url.get("product_id");

  // using  fetch
  //   const response = await fetch(`https://dummyjson.com/products/${id}`);
  //   const data = await response.json();

  await axios.get(`https://dummyjson.com/products/${id}`).then((even) => {
    // const products = even.data.products;
    console.log(even.data);
    const data = even.data;

    const { title, description, price, stock, brand, images } = data;
    document.querySelector(".title").textContent = `the title is: ${title}`;
    document.querySelector(
      ".description"
    ).textContent = `the description is: ${description}`;
    document.querySelector(".price").textContent = `the price is: ${price}`;
    document.querySelector(".stock").textContent = `the stock is" ${stock}`;
    document.querySelector(".brand").textContent = `the brand is" ${brand}`;
    console.log(brand);

    const allImage = images
      .map(function (ele) {
        // console.log(ele);
        return `
              <img src= ${ele} />`;
      })
      .join("");
    document.querySelector(".images").innerHTML = allImage;
  });
}

getDetails();
