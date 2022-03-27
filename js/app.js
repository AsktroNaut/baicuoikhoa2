
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





// storage

// render sản phẩm của storage
















