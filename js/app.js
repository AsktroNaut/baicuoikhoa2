
// checkLogin
let isLogin



// hàm trượt thanh header bar
const headerBar = document.getElementById('header')
var lastScrollTop = 0

window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop < 88) {
        return
    } else if (scrollTop > lastScrollTop) {
        headerBar.style.top = "-88px"
    } else {
        headerBar.style.top = "0px"
    }
    lastScrollTop = scrollTop
})



let searchBtn = document.querySelector('.search-btn')

searchBtn.onclick = (e) => {
    e.preventDefault();
    let searchKey = document.querySelector('.search-textbox').value

    window.location.href = `search-list.html?search-data=${searchKey}`

}



let cartNumberNoti = document.querySelector('.header-cart-num')
console.log(cartNumberNoti);
showNumberOfProductInCart = () => {
    let currentAmountOfLocalProducts = JSON.parse(localStorage.getItem('localCart'))
    console.log(currentAmountOfLocalProducts);
    if (currentAmountOfLocalProducts == null) {
        cartNumberNoti.style.display = 'none'
    } else {
        cartNumberNoti.style.display = 'block'
        cartNumberNoti.innerHTML = `
        ${currentAmountOfLocalProducts.length}
        `
    }
}
showNumberOfProductInCart()














