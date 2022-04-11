
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



const searchingText = document.querySelector('.search-textbox')
searchingText.oninput = (e) => {
    console.log(searchingText.value);
}


let getUserEmailForm = document.querySelector('.new-letter-form')
console.log(getUserEmailForm);
getUserEmailForm.onsubmit = (e) => {
    e.preventDefault()
    
}




// storage

// CHUYỂN TRANG VÀ TỰ ĐỘNG LOAD SẢN PHẨM TOP, BOTTOM, ACC
// var searchingTopProductFromHeader = document.querySelector("[data-name='MAIN-TOP']")
// console.log(searchingTopProductFromHeader);
// searchingTopProductFromHeader.addEventListener("click", (event) => {
//     // event.preventDefault()
//     window.location = "storage.html"
//     renderTopProducts()
// })













