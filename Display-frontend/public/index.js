// console.log('Hello World!');
const button = [...document.querySelectorAll('cart')]
const container = document.querySelector('.traverse')
const count = document.querySelector('.count')
async function fetchProduct() {
  const response = await fetch("https://lade-api.herokuapp.com/api");
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const products = await response.json();
  return products
}
fetchProduct()
  .then((res) => {
    const products = res.data;
    products.map((product) => {
      const productName = product.productName;
      const productDescription = product.productDescription;
      const color = product.color;
      const size = product.size;
      const price = product.price;
      const images = product.images;
      const productDetails = `
            <div class="w3-third">
                <div class="w3-card w3-container" style="min-height:460px">
                <h1>${productName}</h1>
                <img src='${images}.png' alt="Denim Jeans" style="width:100; height:35rem">
                <h6> Color: ${color} </h6>
                <h6> Size: ${size} </h6>
                <h6> Price: ₦ ${price} </h6>
                <h6>${productDescription}</h6>
                <h1><button class="cart">Add to Cart</button></h1>
                </div> <br><br><br>
        `;
      document.getElementById("grid").innerHTML += productDetails;
    });
  })
  .catch((error) => {
    console.log(error);
    // throw new Error(message);// 'An error has occurred: 404'
  });
console.log(button)

let counter = 0;
container.addEventListener('click', (e) => {
  let target = e.target;
  let match = 'button'


  if (target.matches(match)) {
    counter += 1;
    count.textContent = counter;
    console.log(counter)
  }
})

