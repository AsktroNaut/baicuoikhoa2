
let currentProducts = productsData.topProducts.tshirt


// hàm render gốc

// let newList = [];
// productsData.topProducts.hoodie.forEach(i=>{
//     let temporaryId = i.id.toString().slice(0,4);
//     if(!newList.find(i=>i.id==temporaryId)){
        
//         let tempProduct = JSON.parse(JSON.stringify(i));
//         tempProduct.id = temporaryId;
//         newList.push(tempProduct);
//     }
// })
// console.log(newList);



// hàm Load thêm sản phẩm vào mảng tạm thời
displayOnStoreProductList = [];
loadProductIntoTemporaryList = () => {

}


let productsDisplaySection = document.querySelector('.product-display')
console.log(productsDisplaySection);


let productsContainer = document.querySelector('.product-area')

console.log(productsContainer); // cái này là <div class="product-area row">
let typeOfProduct = document.querySelector('.product-header')



// hàm render tất cả sản phẩm
renderAllProducts = () => {
    typeOfProduct.innerHTML = `TẤT CẢ SẢN PHẨM`
    for (let i = 0; i < allProducts.length; i++) {
        let currentProductsContent = allProducts[i]
        let childItem = document.createElement("div")
        childItem.classList.add('product-card')
        childItem.classList.add('col')
        childItem.classList.add('l-2-4')
     
        childItem.innerHTML =`
            <a title="${currentProductsContent.id}" href="product-detail.html">
                <div class="product-frame">
                    <img src="${currentProductsContent.frontImage}" class="product-img" alt="">
                    <img src="${currentProductsContent.backImage}" class="product-img-back" alt="">
                </div>
    
                <div class="product-action">
                    <button><i class="fa-solid fa-cart-plus"></i></button>
                    <button>BUY</button>
                </div>
    
                <div class="product-caption">
                    <h3 class="product-name">${currentProductsContent.name}</h3>
                    <p class="product-price">${currentProductsContent.price}đ</p>
    
                </div>
    
            </a>
        `
        productsContainer.appendChild(childItem)
    }
    productsDisplaySection.appendChild(productsContainer)
}
renderAllProducts()


renderTshirtProducts = () => {
    productsContainer.innerHTML = ''

    typeOfProduct.innerHTML = `TOP / TSHIRT`
    for (let i = 0; i < tShirtList.length; i++) {
        let currentProductsContent = tShirtList[i]
        let childItem = document.createElement("div")
        childItem.classList.add('product-card')
        childItem.classList.add('col')
        childItem.classList.add('l-2-4')
     
        childItem.innerHTML =`
            <a title="${currentProductsContent.id}" href="product-detail.html">
                <div class="product-frame">
                    <img src="${currentProductsContent.frontImage}" class="product-img" alt="">
                    <img src="${currentProductsContent.backImage}" class="product-img-back" alt="">
                </div>
    
                <div class="product-action">
                    <button><i class="fa-solid fa-cart-plus"></i></button>
                    <button>BUY</button>
                </div>
    
                <div class="product-caption">
                    <h3 class="product-name">${currentProductsContent.name}</h3>
                    <p class="product-price">${currentProductsContent.price}đ</p>
    
                </div>
    
            </a>
        `
        productsContainer.appendChild(childItem)
    }
    productsDisplaySection.appendChild(productsContainer)
}
// renderTshirtProducts()


renderSweaterProducts = () => {
    productsContainer.innerHTML = ''

    typeOfProduct.innerHTML = `TOP / SWEATER`
    for (let i = 0; i < sweaterList.length; i++) {
        let currentProductsContent = sweaterList[i]
        let childItem = document.createElement("div")
        childItem.classList.add('product-card')
        childItem.classList.add('col')
        childItem.classList.add('l-2-4')
     
        childItem.innerHTML =`
            <a title="${currentProductsContent.id}" href="product-detail.html">
                <div class="product-frame">
                    <img src="${currentProductsContent.frontImage}" class="product-img" alt="">
                    <img src="${currentProductsContent.backImage}" class="product-img-back" alt="">
                </div>
    
                <div class="product-action">
                    <button><i class="fa-solid fa-cart-plus"></i></button>
                    <button>BUY</button>
                </div>
    
                <div class="product-caption">
                    <h3 class="product-name">${currentProductsContent.name}</h3>
                    <p class="product-price">${currentProductsContent.price}đ</p>
    
                </div>
    
            </a>
        `
        productsContainer.appendChild(childItem)
    }
    productsDisplaySection.appendChild(productsContainer)
}

// renderSweaterProducts()

renderHoodieProducts = () => {
    productsContainer.innerHTML = ''

    typeOfProduct.innerHTML = `TOP / HOODIE`
    for (let i = 0; i < hoodieList.length; i++) {
        let currentProductsContent = hoodieList[i]
        let childItem = document.createElement("div")
        childItem.classList.add('product-card')
        childItem.classList.add('col')
        childItem.classList.add('l-2-4')
     
        childItem.innerHTML =`
            <a title="${currentProductsContent.id}" href="product-detail.html">
                <div class="product-frame">
                    <img src="${currentProductsContent.frontImage}" class="product-img" alt="">
                    <img src="${currentProductsContent.backImage}" class="product-img-back" alt="">
                </div>
    
                <div class="product-action">
                    <button><i class="fa-solid fa-cart-plus"></i></button>
                    <button>BUY</button>
                </div>
    
                <div class="product-caption">
                    <h3 class="product-name">${currentProductsContent.name}</h3>
                    <p class="product-price">${currentProductsContent.price}đ</p>
    
                </div>
    
            </a>
        `
        productsContainer.appendChild(childItem)
    }
    productsDisplaySection.appendChild(productsContainer)
}
// renderHoodieProducts()

renderShortProducts = () => {
    productsContainer.innerHTML = ''

    typeOfProduct.innerHTML = `BOTTOM / SHORT`
    for (let i = 0; i < shortList.length; i++) {
        let currentProductsContent = shortList[i]
        let childItem = document.createElement("div")
        childItem.classList.add('product-card')
        childItem.classList.add('col')
        childItem.classList.add('l-2-4')
     
        childItem.innerHTML =`
            <a title="${currentProductsContent.id}" href="product-detail.html">
                <div class="product-frame">
                    <img src="${currentProductsContent.frontImage}" class="product-img" alt="">
                    <img src="${currentProductsContent.backImage}" class="product-img-back" alt="">
                </div>
    
                <div class="product-action">
                    <button><i class="fa-solid fa-cart-plus"></i></button>
                    <button>BUY</button>
                </div>
    
                <div class="product-caption">
                    <h3 class="product-name">${currentProductsContent.name}</h3>
                    <p class="product-price">${currentProductsContent.price}đ</p>
    
                </div>
    
            </a>
        `
        productsContainer.appendChild(childItem)
    }
    productsDisplaySection.appendChild(productsContainer)
}
// renderShortProducts()

renderPantsProducts = () => {
    productsContainer.innerHTML = ''

    typeOfProduct.innerHTML = `BOTTOM / PANTS`
    for (let i = 0; i < pantsList.length; i++) {
        let currentProductsContent = pantsList[i]
        let childItem = document.createElement("div")
        childItem.classList.add('product-card')
        childItem.classList.add('col')
        childItem.classList.add('l-2-4')
     
        childItem.innerHTML =`
            <a title="${currentProductsContent.id}" href="product-detail.html">
                <div class="product-frame">
                    <img src="${currentProductsContent.frontImage}" class="product-img" alt="">
                    <img src="${currentProductsContent.backImage}" class="product-img-back" alt="">
                </div>
    
                <div class="product-action">
                    <button><i class="fa-solid fa-cart-plus"></i></button>
                    <button>BUY</button>
                </div>
    
                <div class="product-caption">
                    <h3 class="product-name">${currentProductsContent.name}</h3>
                    <p class="product-price">${currentProductsContent.price}đ</p>
    
                </div>
    
            </a>
        `
        productsContainer.appendChild(childItem)
    }
    productsDisplaySection.appendChild(productsContainer)
}
// renderPantsProducts()

renderAccessoryProducts = () => {
    productsContainer.innerHTML = ''

    typeOfProduct.innerHTML = `ACCESSORY / BAG`
    for (let i = 0; i < bagList.length; i++) {
        let currentProductsContent = bagList[i]
        let childItem = document.createElement("div")
        childItem.classList.add('product-card')
        childItem.classList.add('col')
        childItem.classList.add('l-2-4')
     
        childItem.innerHTML =`
            <a title="${currentProductsContent.id}" href="product-detail.html">
                <div class="product-frame">
                    <img src="${currentProductsContent.frontImage}" class="product-img" alt="">
                    <img src="${currentProductsContent.backImage}" class="product-img-back" alt="">
                </div>
    
                <div class="product-action">
                    <button><i class="fa-solid fa-cart-plus"></i></button>
                    <button>BUY</button>
                </div>
    
                <div class="product-caption">
                    <h3 class="product-name">${currentProductsContent.name}</h3>
                    <p class="product-price">${currentProductsContent.price}đ</p>
    
                </div>
    
            </a>
        `
        productsContainer.appendChild(childItem)
    }
    productsDisplaySection.appendChild(productsContainer)
}
// renderAccessoryProducts()




































































