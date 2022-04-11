
changingHtmlWhenLoginFunction = () => {
    let loginStatus = JSON.parse(localStorage.getItem('loginStatus'))
    console.log('loginStatus ở store', loginStatus);
    let registerObject = document.querySelector('.register-section')
    console.log(registerObject);
    let loginObject = document.querySelector('.login-section')
    console.log(loginObject);
    let logoutObject = document.querySelector('.logout-section')
    console.log(logoutObject);
    if (loginStatus === true) {
        console.log('login true rồi');
        registerObject.style.display = 'none'
        loginObject.style.display = 'none'
        logoutObject.style.display = 'block'
    } else if (loginStatus === false) {
        console.log('login falsse rồi');

        registerObject.style.display = 'block'
        loginObject.style.display = 'block'
        logoutObject.style.display = ''
    }

    
}
changingHtmlWhenLoginFunction() 

logoutAction = () => {
    let logoutBtn = document.querySelector('.logout-section')
    console.log(logoutBtn);
    logoutBtn.onclick = () => {
        loginStatus = false
        localStorage.setItem('loginStatus', JSON.stringify(loginStatus))
        location.reload()
        changingHtmlWhenLoginFunction()

    }
}
logoutAction()




































