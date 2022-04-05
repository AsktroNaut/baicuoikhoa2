



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



// hàm load best sellerProducts


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
            <a title="${currentProductsContent.id}" href="product-detail.html?id=${currentProductsContent.id}">
                <div class="product-frame">
                    <img src="${currentProductsContent.frontImage}" class="product-img" alt="">
                    <img src="${currentProductsContent.backImage}" class="product-img-back" alt="">
                </div>
    
                <div class="product-action">
                    <span data-idproduct="${currentProductsContent.id}" class="add-to-cart-btn"><i class="fa-solid fa-cart-plus"></i></span>
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


renderTopProducts = () => {
    productsContainer.innerHTML = ''

    typeOfProduct.innerHTML = `TOP`
    for (let i = 0; i < topProducts.length; i++) {
        let currentProductsContent = topProducts[i]
        let childItem = document.createElement("div")
        childItem.classList.add('product-card')
        childItem.classList.add('col')
        childItem.classList.add('l-2-4')
     
        childItem.innerHTML =`
            <a title="${currentProductsContent.id}" href="product-detail.html?id=${currentProductsContent.id}"">
                <div class="product-frame">
                    <img src="${currentProductsContent.frontImage}" class="product-img" alt="">
                    <img src="${currentProductsContent.backImage}" class="product-img-back" alt="">
                </div>
    
                <div class="product-action">
                    <span data-idproduct="${currentProductsContent.id}" class="add-to-cart-btn"><i class="fa-solid fa-cart-plus"></i></span>
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
// renderTopProducts()

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
            <a title="${currentProductsContent.id}" href="product-detail.html?id=${currentProductsContent.id}"">
                <div class="product-frame">
                    <img src="${currentProductsContent.frontImage}" class="product-img" alt="">
                    <img src="${currentProductsContent.backImage}" class="product-img-back" alt="">
                </div>
    
                <div class="product-action">
                    <span data-idproduct="${currentProductsContent.id}" class="add-to-cart-btn"><i class="fa-solid fa-cart-plus"></i></span>
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
            <a title="${currentProductsContent.id}" href="product-detail.html?id=${currentProductsContent.id}"">
                <div class="product-frame">
                    <img src="${currentProductsContent.frontImage}" class="product-img" alt="">
                    <img src="${currentProductsContent.backImage}" class="product-img-back" alt="">
                </div>
    
                <div class="product-action">
                    <span data-idproduct="${currentProductsContent.id}" class="add-to-cart-btn"><i class="fa-solid fa-cart-plus"></i></span>
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
            <a title="${currentProductsContent.id}" href="product-detail.html?id=${currentProductsContent.id}"">
                <div class="product-frame">
                    <img src="${currentProductsContent.frontImage}" class="product-img" alt="">
                    <img src="${currentProductsContent.backImage}" class="product-img-back" alt="">
                </div>
    
                <div class="product-action">
                    <span data-idproduct="${currentProductsContent.id}" class="add-to-cart-btn"><i class="fa-solid fa-cart-plus"></i></span>
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


renderBottomProducts = () => {
    productsContainer.innerHTML = ''

    typeOfProduct.innerHTML = `BOTTOM`
    for (let i = 0; i < bottomProducts.length; i++) {
        let currentProductsContent = bottomProducts[i]
        let childItem = document.createElement("div")
        childItem.classList.add('product-card')
        childItem.classList.add('col')
        childItem.classList.add('l-2-4')
     
        childItem.innerHTML =`
            <a title="${currentProductsContent.id}" href="product-detail.html?id=${currentProductsContent.id}"">
                <div class="product-frame">
                    <img src="${currentProductsContent.frontImage}" class="product-img" alt="">
                    <img src="${currentProductsContent.backImage}" class="product-img-back" alt="">
                </div>
    
                <div class="product-action">
                    <span data-idproduct="${currentProductsContent.id}" class="add-to-cart-btn"><i class="fa-solid fa-cart-plus"></i></span>
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
            <a title="${currentProductsContent.id}" href="product-detail.html?id=${currentProductsContent.id}"">
                <div class="product-frame">
                    <img src="${currentProductsContent.frontImage}" class="product-img" alt="">
                    <img src="${currentProductsContent.backImage}" class="product-img-back" alt="">
                </div>
    
                <div class="product-action">
                    <span data-idproduct="${currentProductsContent.id}" class="add-to-cart-btn"><i class="fa-solid fa-cart-plus"></i></span>
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
            <a title="${currentProductsContent.id}" href="product-detail.html?id=${currentProductsContent.id}"">
                <div class="product-frame">
                    <img src="${currentProductsContent.frontImage}" class="product-img" alt="">
                    <img src="${currentProductsContent.backImage}" class="product-img-back" alt="">
                </div>
    
                <div class="product-action">
                    <span data-idproduct="${currentProductsContent.id}" class="add-to-cart-btn"><i class="fa-solid fa-cart-plus"></i></span>
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
            <a title="${currentProductsContent.id}" href="product-detail.html?id=${currentProductsContent.id}"">
                <div class="product-frame">
                    <img src="${currentProductsContent.frontImage}" class="product-img" alt="">
                    <img src="${currentProductsContent.backImage}" class="product-img-back" alt="">
                </div>
    
                <div class="product-action">
                    <span data-idproduct="${currentProductsContent.id}" class="add-to-cart-btn"><i class="fa-solid fa-cart-plus"></i></span>
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



// load danh mục
var topProductsLoading = document.querySelector("[data-name='TOP']")
var tshirtProductsLoading = document.querySelector("[data-name='TShirt']")

var sweaterProductsLoading = document.querySelector("[data-name='Sweater']")
var hoodieProductsLoading = document.querySelector("[data-name='Hoodie']")

var bottomProductsLoading = document.querySelector("[data-name='BOTTOM']")
var shortProductsLoading = document.querySelector("[data-name='Short']")
var paintsProductsLoading = document.querySelector("[data-name='Paints']")

var accessoryProductsLoading = document.querySelector("[data-name='ACCESSORIES']")
var bagProductsLoading = document.querySelector("[data-name='Bag']")

topProductsLoading.addEventListener("click", (event) => {
    event.preventDefault()
    renderTopProducts()
})
tshirtProductsLoading.addEventListener("click", (event) => {
    event.preventDefault()
    renderTshirtProducts()
})

sweaterProductsLoading.addEventListener("click", (event) => {
    event.preventDefault()
    renderSweaterProducts()
})

hoodieProductsLoading.addEventListener("click", (event) => {
    event.preventDefault()
    renderHoodieProducts()
})


bottomProductsLoading.addEventListener("click", (event) => {
    event.preventDefault()
    renderBottomProducts()
})
shortProductsLoading.addEventListener("click", (event) => {
    event.preventDefault()
    renderShortProducts()
})
paintsProductsLoading.addEventListener("click", (event) => {
    event.preventDefault()
    renderPantsProducts()
})


accessoryProductsLoading.addEventListener("click", (event) => {
    event.preventDefault()
    renderAccessoryProducts()
})
bagProductsLoading.addEventListener("click", (event) => {
    event.preventDefault()
    renderAccessoryProducts()
})


// hàm render chi tiết sản phẩm

// let buyProductBtns = document.querySelectorAll('.buy-product-btn')
// console.log(buyProductBtns);

// buyProductBtns.forEach(buyProductBtn => {
//     buyProductBtn.addEventListener("click", (event) => {
//         event.preventDefault()
//         window.location = "product-detail.html"
        
//     })
// })
    












































