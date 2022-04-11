let loginForm = document.querySelector('.login-form')
console.log(loginForm);

const wrongPasswordError = document.querySelector('.wrong-password-error')
const nonExistAccountError = document.querySelector('.non-exist-acc-error')
console.log(wrongPasswordError, nonExistAccountError);

const usernameSection = document.querySelector('.login-username')
const passwordSection = document.querySelector('.login-password')
console.log(usernameSection, passwordSection);


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
    console.log(username, pswd);
    let currentAccountsOnLocal = JSON.parse(localStorage.getItem('localAccounts'))
    console.log(currentAccountsOnLocal);

    for (let i = 0; i < currentAccountsOnLocal.length; i++) {
        if (currentAccountsOnLocal[i].username === username) {
            if (currentAccountsOnLocal[i].password === pswd) {
                let isLogin = true
                localStorage.setItem('loginStatus', JSON.stringify(isLogin))
                Swal.fire(
                    'THÀNH CÔNG!',
                    'Đăng nhập thành công! Bạn sẽ được chuyển về trang chủ trong 3s',
                    
                    'success',
                    
                )
                return setTimeout(function() {window.location.href = 'index.html'}, 3000) 
            } else {
                wrongPasswordError.style.display = 'block'
                return

            }
        } else {
            nonExistAccountError.style.display = 'block'
            return
        }
        
    }
    
        
console.log(isLogin);
    
    
}



































































































