



let cartSection = document.querySelector('.cart-section')
console.log(cartSection);

let currentProductInCart = JSON.parse(localStorage.getItem('localCart'));
console.log(currentProductInCart);

let backToStoreBtn = document.querySelector('.cart-overview > a')
let cartSubtitle = document.querySelector('.cart-overview > p')

if (currentProductInCart.length == 0) {
    console.log(11111);
    cartSection.style.display = 'none'

    // cartOverview.style.display = 'block'
    
    console.log(backToStoreBtn);
    backToStoreBtn.style.display = 'block'
    cartSubtitle.style.display = 'block'

} else if (currentProductInCart.length !== 0) {
    backToStoreBtn.style.display = 'none'
    cartSubtitle.style.display = 'none'
}




// hàm render HTML cart    
renderProductsInCartToHTML = () => {
    
    if (currentProductInCart) {
        // Khởi tạo khung html của giỏ hàng
        let cartMainHTML = document.createElement('div')
        cartMainHTML.className = 'cart-content row'
        cartMainHTML.innerHTML = `
        <div class="product-item-line col l-8"></div>
        <div class="total-bill-calc-section col l-4"></div>
        `
        console.log(cartMainHTML);
        console.log(cartSection);
        cartSection.append(cartMainHTML)

        // render ra cart-list
        let productItemLine = document.querySelector('.product-item-line')
        let cartForm = document.createElement('form')
        cartForm.className = 'payment-form'
        cartForm.style.action = ''
        let tableCart = document.createElement('div');
        tableCart.className = 'table-cart'
        
        // lấy lại thông tin chi tiết sản phẩm 
        currentProductInCart = JSON.parse(localStorage.getItem('localCart'));
        

        // đẩy vào list 
        let infomationsOfProductsList = []
        getFullInfomationsOfProductInCart = () => {
            for (let i = 0; i < currentProductInCart.length; i++) {
                for (let j = 0; j < allProductsItem.length; j++) {
                    if (currentProductInCart[i].id == allProductsItem[j].id) {
                        let product = {
                        id: allProductsItem[j].id,
                        name: allProductsItem[j].name,
                        price: allProductsItem[j].price,
                        number: currentProductInCart[i].number,
                        size: allProductsItem[j].size,
                        image: allProductsItem[j].frontImage,
                        color: allProductsItem[j].color,
                        }
                        infomationsOfProductsList.push(product)
                    }
                }
            }
        }
        getFullInfomationsOfProductInCart()
        console.log(infomationsOfProductsList);

        // lấy tổng giá tiền của từng item trong cart
        let billPriceArray = [] 
        infomationsOfProductsList.forEach(i => {
            let result = i.price * i.number
            return billPriceArray.push(result)
        })
        console.log(billPriceArray);
        // tỉnh tổng giá trị đơn hàng
        let BillPrice = billPriceArray.reduce((total, currentItem) => {
            return total + currentItem
        })                                  
        BillPrice = formatter.format(BillPrice)
        // end hàm 


        for (let i = 0; i < infomationsOfProductsList.length; i++) {
            // let newinfomationsOfProductsList = _.find
            let item = _.find(allProductsItem, { 'id': infomationsOfProductsList[i].id});
            item.number = infomationsOfProductsList[i].number
            console.log(item);
            if (typeof(item) == 'object') {
                let cartChild = document.createElement('div')
                // tạo card con chứa line sản phẩm
                // console.log(cartChild);
                let itemPrice = formatter.format(infomationsOfProductsList[i].price) // chuyển về giá trị tiền tệ
                
                let itemTotalPrice =  (infomationsOfProductsList[i].price * infomationsOfProductsList[i].number)
                itemTotalPrice = formatter.format(itemTotalPrice)
                console.log();
                cartChild.innerHTML = `
                <div class="line-item row">
                    <div class="item-image col">
                        <img src="${infomationsOfProductsList[i].image}" alt="">
                    </div>
                    <div class="item-info col">
                        <h3>${infomationsOfProductsList[i].name}</h3>
                        <p class="price">${itemPrice}</p>
                        <p class="variant">Size: ${infomationsOfProductsList[i].size}</p>
                        <div class="item-quantity">
                            <div class="buttons_added">
                                <input class="minus is-form" type="button" value="-">
                                <input aria-label="quantity" class="input-qty" max="50" min="1"  name="${infomationsOfProductsList[i].id}" type="number" value="${infomationsOfProductsList[i].number}" onchange="console.log('thay đổi giá trị')">
                                <input class="plus is-form" type="button" value="+">
                            </div>
                        </div>
                    </div>
                    <div class="col" style="margin-left: auto">
                        <div class="item-remove">
                            <button class="remove-item-btn" data-productID="${infomationsOfProductsList[i].id}" data-productSize="${infomationsOfProductsList[i].size}"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        <div class="total-item-price">
                            <h2>${itemTotalPrice}</h2>
                        </div>
                    </div>
                </div>
                `
                tableCart.append(cartChild)
            }
            
        }
        cartForm.append(tableCart)
        productItemLine.append(cartForm)

        // render ra tổng bill 
        let totalBillCalcSection = document.querySelector('.total-bill-calc-section')
        let invoiceContent = document.createElement('div')
        invoiceContent.classList.add('sidebox-order')

        invoiceContent.innerHTML = `
            <h1 class="section underline">Thông tin đơn hàng</h1>
            <div class="section underline">
                <h3 class="">Tổng tiền:</h3>
                <h1 style="flex-item:end" class="">${BillPrice}</h1>
            </div>
            <p class="section">Phí vận chuyển sẽ được tính ở trang thanh toán.
                Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.
            </p>
            <div class="sidebox-order-action">
                <button class="order-pay-btn fluid">THANH TOÁN</button>
                <a class="fluid" href="storage.html">Tiếp tục mua hàng</a>
            </div>
        `
        totalBillCalcSection.append(invoiceContent) //hàm đẩy nội dung vào tổng bill
        console.log('chạy hàm if trong render');
    }
    
}
renderProductsInCartToHTML()


changeNumberOfProductsByJquery = () => {
    $('input.input-qty').each(function() {
        var $this = $(this),
          qty = $this.parent().find('.is-form'),
          min = Number($this.attr('min')),
          max = Number($this.attr('max'))
        if (min == 0) {
          var d = 0
        } else d = min
        $(qty).on('click', function() {
          if ($(this).hasClass('minus')) {
            if (d > min) d += -1
          } else if ($(this).hasClass('plus')) {
            var x = Number($this.val()) + 1
            if (x <= max) d += 1
          }
          $this.attr('value', d).val(d)
        })
    })
}
changeNumberOfProductsByJquery()


// hàm thay đổi số lượng sản phẩm trong cart
changeNumberOfProductsInCart = () => {
    $('input.input-qty').change(function() {
        console.log('ok nhé');
    })

}
changeNumberOfProductsInCart()


// hàm chuyển trang khi click thanh toán
payBillFunc = () => {
    let payBtn = document.querySelector('.order-pay-btn')
    payBtn.onclick = () => {
        window.location = 'payment.html'
    }
}    
payBillFunc()

// hàm remove sản phẩm trong cart




setRemoveBtnsAction = () => {
    let removeItemBtns = document.getElementsByClassName('remove-item-btn')
    console.log(removeItemBtns);
    for (let i = 0; i < removeItemBtns.length; i++) {
    
        removeItemBtns[i].addEventListener("click", (e) => {
            console.log(removeItemBtns[i]);
            e.preventDefault()
            let itemRemoveID = removeItemBtns[i].getAttribute("data-productID");
            let removeItem = _.find(currentProductInCart, { id: itemRemoveID },);
            console.log(removeItem);
            let localCurrentProduct = JSON.parse(localStorage.getItem('localCart'))
            console.log(localCurrentProduct);
            let newCart = _.reject(localCurrentProduct, function(o) { return o.id == itemRemoveID; });
            console.log('newCart: ', newCart); 
            localStorage.setItem("localCart", JSON.stringify(newCart));
            cartSection.innerHTML= ``
            renderProductsInCartToHTML()
            console.log(123);
            setRemoveBtnsAction()
        })
    }
    payBillFunc()
    changeNumberOfProductsByJquery()
    console.log('chạy hàm remove');
}
setRemoveBtnsAction()


// accumulation
















