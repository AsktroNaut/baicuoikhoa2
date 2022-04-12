
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
console.log(searchBtn);
searchBtn.onclick = (e) => {
    e.preventDefault();
    let searchKey = document.querySelector('.search-textbox').value
    console.log(searchKey);
    window.location.href = `search-list.html?search-data=${searchKey}`

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













