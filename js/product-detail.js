


let urlProductId =  location.search.split('id=')[1]


//hàm lấy thông tin của sản phẩm hiện tại
const getProductInfomations = () => {
    for (let i = 0; i < allProducts.length; i++) {
        if (allProducts[i].id === urlProductId) {
            return allProducts[i]
        }
}}

let currentProductInfomations = getProductInfomations()



// hàm render nội dung thẻ sản phẩm
renderProductCardToHTML = () => {
    // tạo thẻ cha append
    const productRenderContainer = document.createElement('div')
    productRenderContainer.classList.add('row')
    
    // chuyển về tiền tệ
    let currentProductPrice = formatter.format(currentProductInfomations.price)

    // append nội dung
    productRenderContainer.innerHTML = `
        <div class="product-slide col l-5">
            <img class="product-img" src="${currentProductInfomations.frontImage}" alt="">
            <img class="product-img-back" src="${currentProductInfomations.backImage}" alt="">
            
        </div>
        <div class="product-infomation col l-7 underline">
            <div class="product-title">
                <h1>${currentProductInfomations.name}</h1>
            </div>
    
            <span style="color:rgb(122, 122, 122)" class="product-id">Mã sản phẩm: ${currentProductInfomations.id}</span>
            <div class="pro-price">
                <h3>${currentProductPrice}</h3>
            </div>
            <form id="add-item-form" name="variant-form" action="#">
                <div class="variant-swatch">
                    <h4>Chọn size</h4>
                    <div class="select-swatch">
                        <div data-value="S">
                            <input id="swatch-0-s" type="radio" name="checkbox" value="S" checked="checked" >
                            <label for="swatch-0-s">S</label>
                        </div>
                        <div data-value="M">
                            <input id="swatch-0-m" type="radio" name="checkbox" value="M" >
                            <label for="swatch-0-m">M</label>
                        </div>
                        <div data-value="L">
                            <input id="swatch-0-l" type="radio" name="checkbox" value="L">
                            <label for="swatch-0-l">L</label>
                        </div>
                    </div>
                </div>
    
                <div class="quantity-area row section">
                    <input id="reduce-quantity-btn" type='button' value='-' class="change-quantity-btn"/>
                    <input id='quantity' min='1' name='quantity' type='text' value='1' />
                    <input id="raise-quantity-btn"  type='button' value='+' class="change-quantity-btn"/>
    
    
                </div>
    
                <div class="underline">
                <button id="buy-product" class=" hero-btn-full" type="submit" onclick=addCartFunction()>MUA HÀNG</button>
                <button data-idproduct="${currentProductInfomations.id}" id="add-product-to-cart" class=" hero-btn-full" type="submit" onclick=addProductToCartFunction()>THÊM VÀO GIỎ</button>
                </div>
                
    
            </form>
    
            <div class="description-section section">
                <h3>Mô tả</h3>
                <ul>
                    <li>- Gồm 3 size: S / M / L </li>
                    <li><b>- Thông số áo: S : Dài 69 Rộng 52.5 | M : Dài 73 Rộng 55 | L: Dài : 76.5 Rộng: 57.5</b></li>
                    <li>- Chất liệu vải :100% Cotton '' Chất lượng vải đánh dấu sự ra đời của Tammy''</li>
                    <li>- Công nghệ in: In lụa cao cấp, bảo quản tốt khi giặt máy , không bong tróc phai màu</li>
                    <li>- Tammy xuất hiện mang đến làn gió mới, xuất hiện từ đầu năm 2022 đầy biến động nhưng những gì Tammy thực hiện đem tới một chất lượng và giá thành tốt nhất đến cho các bạn nha.</li>
                </ul>
            </div>
        
        </div>
    `
    const productDetailSection = document.querySelector('.product-detail')
    productDetailSection.append(productRenderContainer)
}
renderProductCardToHTML()



// tạo cart và đẩy vào localStorage
let addToCartBtn = document.querySelector('#add-product-to-cart')







let addProductToCartBtn = document.getElementById('add-product-to-cart')

addProductToCartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    Swal.fire(
        'THÀNH CÔNG!',
        'Đã thêm sản phẩm vào giỏ hàng!',
        'success'
    )
    
})



// hàm ẩn popup
// for (let i = 0; i < closePopUpBtns.length; i++) {
//     closePopUpBtns[i].onclick = function(e) {
//         e.preventDefault();
//         modal.classList.add('non-display')
//     }
// }

// modal.addEventListener('click', (e) => {
//     modal.classList.add('non-display')
    
// })
// modalContent.addEventListener('click', (e) => {
//     e.stopImmediatePropagation()
    
// })






let swatchForm = document.querySelector('form#add-item-form')
    console.log(swatchForm);
// hàm thêm sản phẩm vào cart
addProductToCartFunction = () => {
    let numberOfProduct = parseInt(document.forms["variant-form"]["quantity"].value)
    let sizeOfProduct = document.forms["variant-form"]["checkbox"].value
    let idOfProduct = currentProductInfomations.id
    let newProduct = {
        id: idOfProduct,
        number: numberOfProduct,
    }
    if (sizeOfProduct == 'S') {
        newProduct.id += '1'
    } else if (sizeOfProduct == 'M') {
        newProduct.id += '2'
    } else if (sizeOfProduct == 'L') {
        newProduct.id += '3'
    }
    let currentLocalCart = JSON.parse(localStorage.getItem('localCart'))
    if (currentLocalCart === null) {
        let cart = [newProduct]
        localStorage.setItem("localCart", JSON.stringify(cart));
    } else {
        let matchIdProduct = _.filter(currentLocalCart, function(o) { return o.id === newProduct.id });
        
        if (matchIdProduct) {
            for (let i = 0; i < matchIdProduct.length; i++) {
                if (matchIdProduct[i].size === newProduct.size) {
                    matchIdProduct[i].number = newProduct.number + matchIdProduct[i].number
                    localStorage.setItem("localCart", JSON.stringify(currentLocalCart));
                    return
                } 
            }
            currentLocalCart.push(newProduct)
            localStorage.setItem("localCart", JSON.stringify(currentLocalCart));
        } else {
        currentLocalCart.push(newProduct)
        localStorage.setItem("localCart", JSON.stringify(currentLocalCart));
        return
        }
    }
}

console.log(JSON.parse(localStorage.getItem('localCart')));


// hàm click mua sản phẩm
const buyProductBtn = document.querySelector('#buy-product')
buyProductBtn.onclick = (e) => {
    e.preventDefault()
    addProductToCartFunction()
    window.location = 'payment.html'

}













































































































