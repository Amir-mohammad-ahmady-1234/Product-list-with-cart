const $ = document;
const productContainer = $.querySelector(".product-container");
const cartContainer = $.querySelector(".cart_container");
const ulElem = $.querySelector(".ulElem");
const cartContainerWhenAddToCartClicked = $.querySelector(
  ".cartContainerWhenAddToCartClicked"
);
const beforeAddToCatClocked = $.querySelector(".beforeAddToCatClocked");

const products = [
  {
    id: 1,
    count: 1,
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
    desktop: "./assets/images/image-waffle-desktop.jpg",
    thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
  },

  {
    id: 2,
    count: 1,
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
    desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
  },

  {
    id: 3,
    count: 1,
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
    desktop: "./assets/images/image-macaron-desktop.jpg",
    thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
  },

  {
    id: 4,
    count: 1,
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
    desktop: "./assets/images/image-tiramisu-desktop.jpg",
    thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
  },

  {
    id: 5,
    count: 1,
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
    desktop: "./assets/images/image-baklava-desktop.jpg",
    thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
  },

  {
    id: 6,
    count: 1,
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
    desktop: "./assets/images/image-meringue-desktop.jpg",
    thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
  },

  {
    id: 7,
    count: 1,
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
    desktop: "./assets/images/image-cake-desktop.jpg",
    thumbnail: "./assets/images/image-cake-thumbnail.jpg",
  },

  {
    id: 8,
    count: 1,
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
    desktop: "./assets/images/image-brownie-desktop.jpg",
    thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
  },

  {
    id: 9,
    count: 1,
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
    desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
  },
];

let cartProduct = [];

products.forEach((product) => {
  add_products_T0_dom(product);
});

function add_products_T0_dom(product) {
  let thisProduct = $.createElement("div");
  thisProduct.className =
    "thisProduct flex flex-col items-center justify-center";

  let cover = $.createElement("div");
  cover.className = "cover flex flex-col justify-center items-center";

  let productImage = $.createElement("img");
  productImage.className = "rounded-md min-h-[200px] w-2/3";
  productImage.setAttribute("src", product.desktop);

  let btn = $.createElement("button");
  btn.className =
    "btn flex items-center justify-center bg-white border-2 border-Rose400 rounded-full px-7 py-1 -translate-y-1/2 hover:text-RedColor hover:border-RedColor duration-[0.3s]";

  let addIcon = $.createElement("img");
  addIcon.setAttribute("src", "assets/images/icon-add-to-cart.svg");

  let span = $.createElement("span");
  span.addEventListener("click", () => {
    addToCart(product.id, btn);
  });
  span.innerHTML = "Add to Cart";
  span.className = "font-Red_Hat_Text2";

  let details = $.createElement("div");
  details.className =
    "details flex flex-col items-strat justify-center mb-[30px]";

  let product_category = $.createElement("p");
  product_category.className = "text-Rose400 font-Red_Hat_Text3 capitalize";
  product_category.innerHTML = product.category;

  let product_name = $.createElement("p");
  product_name.className = "text-Rose900 capitalize font-Red_Hat_Text2";
  product_name.innerHTML = product.name;

  let productPrice = $.createElement("p");
  productPrice.className = "text-RedColor font-Red_Hat_Text";
  productPrice.innerHTML = product.price;

  btn.append(addIcon, span);
  cover.append(productImage, btn);
  details.append(product_category, product_name, productPrice);
  thisProduct.append(cover, details);
  productContainer.append(thisProduct);
}

function addToCart(productId, btn) {
  let mainProduct = products.find((product) => {
    return productId === product.id;
  });

  cartProduct.push(mainProduct);

  calcTotalPrice(cartProduct);
  cartProductGenerator(cartProduct);
  changeButtonStyle(mainProduct, btn);
}

function cartProductGenerator(userBasketProduct) {
  ulElem.innerHTML = "";

  cartContainer.style.maxHeight = "500px";
  cartContainer.style.overflowY = "scroll";
  cartContainerWhenAddToCartClicked.style.display = "block";
  beforeAddToCatClocked.style.display = "none";

  userBasketProduct.forEach((mainProduct) => {
    ulElem.insertAdjacentHTML(
      "afterbegin",
      `
    <li class="product-booking mb-[10px]">
    <div class="product-info space-x-[10px]">
    <p class="font-Red_Hat_Text">${mainProduct.name}</p>
    <span class="text-RedColor font-Red_Hat_Text">${mainProduct.count}x</span>
    <span class="text-Rose400 font-Red_Hat_Text3">@ $${mainProduct.price}</span>
      <span class="font-Red_Hat_Text3 font-[600] text-gray-500">$${
        mainProduct.price * mainProduct.count
      }</span>
      </div>
      <div class="removeIconParent flex items-center">
      <div onclick="removeProduct('${
        mainProduct.name
      }')" class="remove-product border-[1px] text-gray-300 text-center leading-[14px] size-[18px] border-gray-300 rounded-full hover:border-black hover:text-black cursor-pointer">×</div>
      </div>
      </li><hr>   
      `
    );
  });
  if (ulElem.childElementCount < 2) {
    beforeAddToCatClocked.style.display = "block";
    cartContainerWhenAddToCartClicked.style.display = "none";
    cartContainer.style.maxHeight = "300px";
    cartContainer.style.overflowY = "hidden";
  }
}

function changeButtonStyle(mainProduct, btn) {
  btnStyleChangeToProceccing(mainProduct, btn)
  // btn.innerHTML = "";
  // btn.className =
  //   "flex items-center justify-center min-w-[140px] min-h-[40px] bg-RedColor rounded-full px-7 py-1 -translate-y-1/2 text-white duration-[0.3s]";
  // btn.insertAdjacentHTML(
  //   "afterbegin",
  //   `
  //   <button class="mines hover:bg-white hover:text-black text-[20px] mr-[30px] border-[1px] border-white rounded-full leading-[17px] size-[20px]">-</button>
  //   <span class="spanElem">${mainProduct.count}</span>
  //   <button class="plus hover:bg-white hover:text-black text-[20px] ml-[30px] border-[1px] border-white rounded-full leading-[17px] size-[20px]">+</button>
  //   `
  // );

  btn.children[2].addEventListener("click", () => {
    mainProduct.count++;
    btn.children[1].innerHTML = mainProduct.count;
    cartProductGenerator(cartProduct);
    calcTotalPrice(cartProduct)
  });
  btn.children[0].addEventListener("click", () => {
    // if (mainProduct.count > 0) {
    mainProduct.count--;
    btn.children[1].innerHTML = mainProduct.count;
    cartProductGenerator(cartProduct);
    calcTotalPrice(cartProduct)
    // }
    if (mainProduct.count < 1) {
      removeProduct(mainProduct.name);
      // console.log(mainProduct.count);

      btn.innerHTML = "";
      btn.className =
        "flex items-center justify-center bg-white border-2 border-Rose400 rounded-full px-7 py-1 -translate-y-1/2 hover:text-RedColor hover:border-RedColor duration-[0.3s]";
      btn.insertAdjacentHTML(
        "afterbegin",
        `
        <img src="assets/images/icon-add-to-cart.svg"></img>
        <span class="font-Red_Hat_Text2">Add to Cart</span>
      `
      );
    }
  });
}

function calcTotalPrice(userCartProducts) {

  if (userCartProducts.length > 0) {

    
    let prices = userCartProducts.map(product => {
      
      return product.price * product.count  
    })
    

    let calcTotalBasketPrice = prices.reduce((prevPrice, currentPrice) => {
      
      return prevPrice + currentPrice
    })
    
    showTotalPriceInDom(calcTotalBasketPrice)
    
    return calcTotalBasketPrice
    
  }
}


function btnStyleChangeToProceccing (mainProduct, btn) {
  btn.innerHTML = "";
  btn.className =
    "flex items-center justify-center min-w-[140px] min-h-[40px] bg-RedColor rounded-full px-7 py-1 -translate-y-1/2 text-white duration-[0.3s]";
  btn.insertAdjacentHTML(
    "afterbegin",
    `
    <button class="mines hover:bg-white hover:text-black text-[20px] mr-[30px] border-[1px] border-white rounded-full leading-[17px] size-[20px]">-</button>
    <span class="spanElem">${mainProduct.count}</span>
    <button class="plus hover:bg-white hover:text-black text-[20px] ml-[30px] border-[1px] border-white rounded-full leading-[17px] size-[20px]">+</button>
    `
  );
}



function removeProduct(productName) {
  let forRemovingPro = cartProduct.findIndex((product) => {
    return product.name === productName;
  });

  cartProduct.splice(forRemovingPro, 1);
  console.log(cartProduct);
  cartProductGenerator(cartProduct);
  calcTotalPrice(cartProduct)
}

function showTotalPriceInDom (totalPrice) {
  $.querySelector('.totalPrices').innerHTML = '$' + totalPrice
}