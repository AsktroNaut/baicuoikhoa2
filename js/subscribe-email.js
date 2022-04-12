

let subscribeSection = document.querySelector('.new-letter-form') 
console.log(subscribeSection);


subscribeSection.onsubmit = (e) => {
    e.preventDefault();

    let userEmailSub = e.srcElement[0].value
    let userEmailSubscribeList = JSON.parse(localStorage.getItem('userEmailSubscribeList'))

    if (userEmailSubscribeList === null) {
        let userEmailStorage = []
        userEmailStorage.push(userEmailSub)
        localStorage.setItem('userEmailSubscribeList', JSON.stringify(userEmailStorage))
        Swal.fire(
            'THÀNH CÔNG!',
            'Bạn đã đăng kí nhận thông báo mới nhất từ TAMMY qua email!',
            'success',
            
        )
    } else {
        userEmailSubscribeList.push(userEmailSub)
        localStorage.setItem('userEmailSubscribeList', JSON.stringify(userEmailSubscribeList))
        Swal.fire(
            'THÀNH CÔNG!',
            'Bạn đã đăng kí nhận thông báo mới nhất từ TAMMY qua email!',
            'success',
            
        )
    }
}



























