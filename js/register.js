console.log("ok");
let userNameInput = document.querySelector('[name="username"]')
let userName = document.querySelector('[name="username"]').value;
console.log(userName);
let userPassword = document.querySelector('[name="userPassword"]').value;
console.log(userPassword);
let userPasswordCheck = document.querySelector('[name="userPasswordCheck"]').value;
console.log(userPasswordCheck);

// query các lỗi
const dupicateError = document.querySelector('.duplicate-error')
console.log(dupicateError);
const usernameError = document.querySelector('.username-error')
console.log(usernameError);
const passwordError = document.querySelector('.password-error')
console.log(passwordError);
const checkedPasswordError = document.querySelector('.checked-password-error')
console.log(checkedPasswordError);

const errorList = document.querySelectorAll('.error-notification')
// hàm ẩn lỗi
hideErrorList = () => {
    userNameInput.addEventListener('input', () => {
        errorList.forEach(err => {
            err.style.display = 'none'
        })
    })
}

// đặt regex cho điều kiện mật khẩu
const regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// hàm check đăng kí
registerFunction = () => {
    let userName = document.querySelector('[name="username"]').value;
    let userPassword = document.querySelector('[name="userPassword"]').value;
    let userPasswordCheck = document.querySelector('[name="userPasswordCheck"]').value;
    let userDateOfBirth = document.querySelector('[name="dateOfBirth"]').value;
    let userPhoneNumber = parseInt(document.querySelector('[name="userPhoneNumber"]').value);
    let userEmail = document.querySelector('[name="userEmail"]').value;

    let localAccountsList = JSON.parse(localStorage.getItem('localAccounts'))
    console.log(localAccountsList);
    // hàm đăng kí tài khoản đầu tiên lên local
    if (localAccountsList === null) {
        console.log(userName, userPassword, userPasswordCheck, userDateOfBirth, userPhoneNumber, userEmail);
        let acc = []
        acc.push(
            {
                username: userName,
                password: userPassword,
                dateOfBirth: userDateOfBirth,
                phone: userPhoneNumber,
                email: userEmail
            }
        )  
        localStorage.setItem('localAccounts', JSON.stringify(acc))
        Swal.fire(
            'THÀNH CÔNG!',
            'Đăng kí tài khoản mới thành công!',
            'success',
            "#DD6B55",
        )
        return
    } else {
        let duplicateAccount = _.find(localAccountsList, function(o) { return o.username === userName; });
        console.log(duplicateAccount);
        // nếu tên đăng nhập đã được sử dụng
        if (duplicateAccount) {
            console.log(duplicateAccount);
            dupicateError.style.display = 'block'
            return
        } else {
            if (userName.length < 6) {
                usernameError.style.display = 'block'
                console.log('6 kí tự user');
            } else if (userPassword == "" || userPassword.length <= 8 || !regExp.test(userPassword)) {
                passwordError.style.display = 'block'
            } else if (userPassword !== userPasswordCheck) {
                checkedPasswordError.style.display = 'block'
            } else {
                let newAccount = {
                    username: userName,
                    password: userPassword,
                    dateOfBirth: userDateOfBirth,
                    phone: userPhoneNumber,
                    email: userEmail
                }
                localAccountsList.push(newAccount)
                localStorage.setItem("localAccounts", JSON.stringify(localAccountsList));
                Swal.fire(
                    'THÀNH CÔNG!',
                    'Đăng kí tài khoản mới thành công!',
                    'success',
                    "#DD6B55",
                )
                return
            }
        }
    }
}

// hàm click đăng kí
const registerForm = document.querySelector('.register-form')
registerForm.onsubmit = (event) => {
    event.preventDefault();
    hideErrorList()
    registerFunction()
}














































