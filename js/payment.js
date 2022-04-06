

const billingList = document.querySelector('.billing-list')
console.log(billingList);

console.log(currentProductInCart);
// hàm lấy tất cả thông tin list item 
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



renderPaymentListProduct = () => {
    // tính tổng giá trị bill
    // render từng item
    infomationsOfProductsList.forEach((item) => {
        let totalItemPrice = item.number * item.price
        totalItemPrice = formatter.format(totalItemPrice)
        console.log(totalItemPrice);
        let childRenderItem = document.createElement('div')
        childRenderItem.className = 'billing-item row'
        childRenderItem.innerHTML = `
            <img src="${item.image}" alt="">
            <div class="col l-7">
                <h4>${item.name}</h4>
                <p>${item.size} / ${item.color}</p>
                <p>Số lượng: ${item.number}</p>
            </div>
            <h3>${totalItemPrice}</h3>
        `
        // billingList.innerHTML = ''
        billingList.append(childRenderItem)
    })
} 

renderPaymentListProduct()



// render các loại phí và tổng tiền 
let currentDiscountAmount = 0
const discountApplyButton = document.querySelector('.btn-apply')
console.log(discountApplyButton);
discountApplyButton.onclick = (e) => {
    e.preventDefault();
    let userDiscountValue = document.querySelector('.discount-section > input').value
    console.log(userDiscountValue);
    for (let i = 0; i < discountCode.length; i++) {
        if(discountCode[i].id == userDiscountValue) {
            currentDiscountAmount = discountCode[i].discountAmount
        } 
    }
    console.log(currentDiscountAmount);
    renderTotalBillPrice()
}

let deliveryAmount = 0
// hàm tính giá trị deliveryAmount
const shippingProvinceSection = document.getElementsByName('calc_shipping_provinces')[0]
const shippingDistrictSection = document.getElementsByName('calc_shipping_district')[0]

shippingProvinceSection.onchange = () => {
    console.log(shippingProvinceSection.value);
    if (shippingProvinceSection.value == "24" || shippingProvinceSection.value == "31" || shippingProvinceSection.value == "15") {
        deliveryAmount = 20000
    } else {
        deliveryAmount = 30000
    }
    renderTotalBillPrice()
}


console.log(shippingProvinceSection);
const amountSection = document.querySelector('.billing-amount-section')
console.log(amountSection);


// hàm render giá đơn hàng
renderTotalBillPrice = () => {
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
    
    console.log(BillPrice);
    
    // giá trị discount
    let discountAmount = (BillPrice * currentDiscountAmount)
    console.log(currentDiscountAmount);
    console.log(discountAmount);
    let totalBillNumber = (BillPrice - discountAmount + deliveryAmount)
    console.log(deliveryAmount);

    
    let children = document.createElement('div')
    children.innerHTML = `
    <div class="billing-amount row underline">
        <div class="billing-cost row">
            <h3>Tạm tính:</h3>
            <span class="billing-temporary-amount">${BillPrice}đ</span>
        </div>
        <div class="billing-cost row">
            <h3>Giảm giá:</h3>
            <span class="billing-discount-amount">${discountAmount}đ</span>
        </div>
        <div class="billing-cost row">
            <h3>Phí vận chuyển:</h3>
            <span class="billing-discount-amount">${deliveryAmount}đ</span>
        </div>
    </div>

    <div class="billing-total-amount section">
        
        <h1>Tổng cộng:</h1>
        <span class="billing-final-amount">${totalBillNumber}đ</span>
    </div>
`
    amountSection.innerHTML = ''
    amountSection.append(children)
    
}
renderTotalBillPrice()





























































































































