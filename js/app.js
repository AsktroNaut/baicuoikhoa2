
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


// swiper 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});





// storage

// CHUYỂN TRANG VÀ TỰ ĐỘNG LOAD SẢN PHẨM TOP, BOTTOM, ACC
// var searchingTopProductFromHeader = document.querySelector("[data-name='MAIN-TOP']")
// console.log(searchingTopProductFromHeader);
// searchingTopProductFromHeader.addEventListener("click", (event) => {
//     // event.preventDefault()
//     window.location = "storage.html"
//     renderTopProducts()
// })













