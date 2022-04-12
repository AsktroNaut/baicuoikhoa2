let loginForm = document.querySelector('.login-form')


const wrongPasswordError = document.querySelector('.wrong-password-error')
const nonExistAccountError = document.querySelector('.non-exist-acc-error')


const usernameSection = document.querySelector('.login-username')
const passwordSection = document.querySelector('.login-password')



// ẩn lỗi khi nhập trường
usernameSection.oninput = () => {
    wrongPasswordError.style.display = 'none'
    nonExistAccountError.style.display = 'none'
}
passwordSection.oninput = () => {
    wrongPasswordError.style.display = 'none'
    nonExistAccountError.style.display = 'none'
}

// hàm check tài khoản đăng nhập
loginForm.onsubmit = (event) => {
    event.preventDefault();
    let username = event.target[0].value
    let pswd = event.target[1].value
    let currentAccountsOnLocal = JSON.parse(localStorage.getItem('localAccounts'))
    let checkUserNameResult = currentAccountsOnLocal.find(account => account.username === username)

    if (checkUserNameResult) {
        if (checkUserNameResult.password === pswd) {
            let isLogin = true
                localStorage.setItem('loginStatus', JSON.stringify(isLogin))
                Swal.fire(
                    'THÀNH CÔNG!',
                    'Đăng nhập thành công! Bạn sẽ được chuyển về trang chủ trong 3s',
                    
                    'success',
                    
                )
                return setTimeout(function() {window.location.href = 'index.html'}, 2500) 
        } else {
            return wrongPasswordError.style.display = 'block'
        }
    } else {
        return nonExistAccountError.style.display = 'block'
    }
}



































































































