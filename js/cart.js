



let cartSection = document.querySelector('.cart-section')


let currentProductInCart = JSON.parse(localStorage.getItem('localCart'));


let backToStoreBtn = document.querySelector('.cart-overview > a')
let cartSubtitle = document.querySelector('.cart-overview > p')

if (currentProductInCart.length == 0) {
    
    cartSection.style.display = 'none'
    // cartOverview.style.display = 'block'
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
        

        // lấy tổng giá tiền của từng item trong cart
        let billPriceArray = [] 
        infomationsOfProductsList.forEach(i => {
            let result = i.price * i.number
            return billPriceArray.push(result)
        })
        
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
            
            if (typeof(item) == 'object') {
                let cartChild = document.createElement('div')
                // tạo card con chứa line sản phẩm
                
                let itemPrice = formatter.format(infomationsOfProductsList[i].price) // chuyển về giá trị tiền tệ
                
                let itemTotalPrice =  (infomationsOfProductsList[i].price * infomationsOfProductsList[i].number)
                itemTotalPrice = formatter.format(itemTotalPrice)
                
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
                                <input aria-label="quantity" class="input-qty" max="100" min="1"  name="${infomationsOfProductsList[i].id}" type="number" value="${infomationsOfProductsList[i].number}" >
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
        
    }
    
}
renderProductsInCartToHTML()

reloadBillCalcSection = () => {
    
}





// hàm thay đổi số lượng sản phẩm trong cart
// changeNumberOfProductsInCart = () => {
//     let numberOfProductList = document.querySelectorAll('.input-qty')
//     console.log(numberOfProductList);
//     for (let i = 0; i < numberOfProductList.length; i++) {
//         console.log(numberOfProductList[i].value);
//         // numberOfProductList[i].value.onchange = () => {
//         //     console.log(numberOfProductList[i].value);
//         // }
        
//     }
// }
// changeNumberOfProductsInCart()
changeNumberOfProductsByJquery = () => {
    $('input.input-qty').each(function() {
        var $this = $(this),
        qty = $this.parent().find('.is-form'),
        min = Number($this.attr('min')),
        max = Number($this.attr('max'))
        
        if (min == 0) {
        var d = 0
        } else d = Number($this.attr('value'))
        
        $(qty).on('click', function(e) {
            // e.preventDefault()
            
            if ($(this).hasClass('minus')) {
                if (d > min) {
                    
                    d += -1
                    
                    let idChangedItem = $this.attr('name')
                    let numberChanged = d
                    
                    let changedItem = _.find(currentProductInCart, { id: idChangedItem },);
                    
                    let localCurrentProductNow = JSON.parse(localStorage.getItem('localCart'));
                    
                    let newCart = _.reject(localCurrentProductNow, function(o) { return o.id == idChangedItem; });
                    
                    let newProductAfterNumberChanging = {
                        id: idChangedItem,
                        number: numberChanged
                    }
                    
                    newCart.unshift(newProductAfterNumberChanging);
                    
                    
                    cartSection.innerHTML= ``;
                    localStorage.setItem("localCart", JSON.stringify(newCart));
                    renderProductsInCartToHTML();
                    changeNumberOfProductsByJquery()
                    
                    setRemoveBtnsAction()
                    payBillFunc()
                } 
                
            } else if ($(this).hasClass('plus')) {
                var x = Number($this.val()) + 1
                
                if (x <= max) {
                    d += 1

                    let idChangedItem = $this.attr('name')
                    let numberChanged = x
                    
                    let changedItem = _.find(currentProductInCart, { id: idChangedItem },);
                    
                    let localCurrentProductNow = JSON.parse(localStorage.getItem('localCart'));
                    
                    let newCart = _.reject(localCurrentProductNow, function(o) { return o.id == idChangedItem; });
                    
                    let newProductAfterNumberChanging = {
                        id: idChangedItem,
                        number: numberChanged
                    }
                    
                    newCart.unshift(newProductAfterNumberChanging);
                    
                    localStorage.setItem("localCart", JSON.stringify(newCart));
                    cartSection.innerHTML= ``;
                    renderProductsInCartToHTML();
                    changeNumberOfProductsByJquery()
                    
                    setRemoveBtnsAction()
                    payBillFunc()
                    
                }
                

            }
        
        $this.attr('value', d).val(d)

        
        })
    })
}
changeNumberOfProductsByJquery()

changeNumberOfProductsByInput = () => {
    let inputNumberSection = document.querySelectorAll('.input-qty')
    for (let i = 0; i < inputNumberSection.length; i++) {
        let currentNumberOfItem = inputNumberSection[i].value
        console.log('currentNumberOfItem)' ,currentNumberOfItem);
        inputNumberSection[i].onchange = (event) => {
            

            let idChangedItem = inputNumberSection[i].getAttribute('name')
            let numberChanged = inputNumberSection[i].value
            // if (condition) {
                
            // }
            
            let changedItem = _.find(currentProductInCart, { id: idChangedItem },);
            
            let localCurrentProductNow = JSON.parse(localStorage.getItem('localCart'));
            
            let newCart = _.reject(localCurrentProductNow, function(o) { return o.id == idChangedItem; });
            
            let newProductAfterNumberChanging = {
                id: idChangedItem,
                number: numberChanged
            }
            
            newCart.unshift(newProductAfterNumberChanging);
            
            localStorage.setItem("localCart", JSON.stringify(newCart));
            cartSection.innerHTML= ``;
            renderProductsInCartToHTML();
            changeNumberOfProductsByJquery()
            
            setRemoveBtnsAction()
            payBillFunc()
            changeNumberOfProductsByInput()
            
        }
        
    }
}
changeNumberOfProductsByInput()

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
    for (let i = 0; i < removeItemBtns.length; i++) {
        removeItemBtns[i].addEventListener("click", (e) => {
            e.preventDefault()
            let itemRemoveID = removeItemBtns[i].getAttribute("data-productID");
            let removeItem = _.find(currentProductInCart, { id: itemRemoveID },);
            
            let localCurrentProduct = JSON.parse(localStorage.getItem('localCart'))
            
            let newCart = _.reject(localCurrentProduct, function(o) { return o.id == itemRemoveID; });
            
            localStorage.setItem("localCart", JSON.stringify(newCart));
            cartSection.innerHTML= ``
            renderProductsInCartToHTML()
            
            setRemoveBtnsAction()
            changeNumberOfProductsByJquery()
            payBillFunc()
            changeNumberOfProductsByInput()
            
        })
    }
    
}
setRemoveBtnsAction()


// thay đổi số lượng sản phẩm

















