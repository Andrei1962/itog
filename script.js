let registrs = document.querySelector('#registr')     /* выбор вход-регистрация */
let title = document.getElementById('title')          /* title вход-регистрация */
let submit = document.getElementById('submit')        /* кнопка вход */
let email = document.querySelector('#email')          /* ввод email */
let password = document.querySelector('#password')     /* ввод пароля */
let agree = document.querySelector('#agree')           /* ввод чекбокса */
let emailError = document.querySelector('#emailError')  /* ошибка ввода email */
let passwordError = document.querySelector('#passwordError')  /* ошибка ввода паспорта */
let arreeError = document.querySelector('#arreeError')    /* ошибка чекбокса */
let arreement = document.getElementById('arreeSpan')
let checkmark = document.querySelector('.custom-checkbox')
let auth = true                   /* false--вход или true--регистрация */
console.log('auth:', auth)
console.log('agree:', agree)
let user = {email: '', password: ''}

registrs.addEventListener('click', (event)=> {   /* переключатель по клику, выбор страницы вход или авторизация */
  event.preventDefault()                         
  auth = !auth
  console.log('auth:',auth )
  if(!auth)
  registracia()           /* функция регистрация на сайте */
  else {
    avtorizacia()          /* функция авторизация на сайте */
  }
})

function registracia() {     /* страница вход */
  console.log('auth:',auth )
  title.innerHTML = "Регистрация"
  arreement.innerHTML = "Я согласен получать обновления на почту"
  submit.innerHTML = "Регистрация"
  document.getElementById('title').style.left = "120px" /* центрируем регистрацию */
  registrs.innerHTML = "Авторизоваться" 
}

function avtorizacia() {      /* страница авторизация */
  console.log('auth:',auth )
  title.innerHTML = "Вход"
  arreement.innerHTML = "Я согласен с Правилами пользования приложением"
  submit.innerHTML = "Вход"
  document.getElementById('title').style.left = "190px" /* возвращаем исходное значение после регистрации */
  registrs.innerHTML = "Зарегистрироваться" 
}

function redEmail() {                              /* ошибка email красный */
  document.getElementById('emailError').style.display = 'block'  
  stars.style.color = ' #CB2424'
  enail.style.color = ' #CB2424'
  inputemail.style.border = '2px solid #CB2424' 
}
function blackEmail() {                            /* сброс ошибки  email черный */
  document.getElementById('emailError').style.display = 'none'  
  stars.style.color = ' #787878'
  enail.style.color = ' #787878'
  inputemail.style.border = '2px solid #787878' 
}
function redPasword() {                           /* ошибка пароль красный */
  document.getElementById('passwordError').style.display = 'block'  
  starss.style.color = ' #CB2424'
  Password.style.color = ' #CB2424'
  Password.style.marginTop = '-5px'
  inputpassword.style.border = '2px solid #CB2424' 
}
function blackPasword() {                           /* сброс ошибки  пароль черный */ 
  document.getElementById('passwordError').style.display = 'none'  
  starss.style.color = ' #787878'
  Password.style.color = ' #787878'
  inputpassword.style.border = '2px solid #787878' 
}
function redAgree() {                              /* ошибка чекбокса красный */     
  checkmark.classList.add('error')
  document.getElementById('arreeError').style.display = 'block' 
  starssss.style.border = '2px solid #cb2424'
  starssss.style.marginTop = '-10px'
  .customCheckboxBefore.style.top = '-9px'
  .customCheckbox.style.marginTop = '0px'
  
}
function blackAgree() {                               /* сброс ошибки  чекбокса черный */
  document.getElementById('arreeError').style.display = 'none'    
  starssss.style.border = '2px solid #787878'
  starssss.style.marginTop = '10px'  
}

submit.addEventListener('click', (event)=>{  /* функция по клику кнопки вход */
  event.preventDefault()
  let emailValue = email.value.trim()
  let passwordValue = password.value.trim()
  let checked = document.querySelector('#agree')  
  let agreeChecked = agree.checked
  console.log('agreeChecked:', agreeChecked )
  console.log('emailValue:', emailValue)
  console.log('passwordValue:', passwordValue)
  let inputTypeEmail = document.getElementById('Email')
  let regexp =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/   
  let isValid = true 
  console.log('isValid:', isValid )
  console.log('auth:',auth )

  if (emailValue === '') {         /* значение емейл пусто */
    console.log('emailValue:', emailValue)
    let enail = document.querySelector('#enail')
    let inputEmail = document.getElementById('inputemail')    
    emailError.textContent = 'Поле обязательно для заполнения'
    passwordError.textContent = 'Поле обязательно для заполнения'
    arreeError.textContent = "Поле обязательно для заполнения"
    redEmail()
    redPasword()
    redAgree() 
    isValid = false
    console.log('isValid:', isValid )
    return
    
  } else (emailValue != ''); {             /* значение емейл  не пусто */
    blackEmail()
    blackPasword()
    blackAgree()
  }

  if (!regexp.test(emailValue)) {              /* значение емейл  не валидно */
    console.log('!regexp.test(emailValue):', !regexp.test(emailValue));  
    emailError.textContent = 'Email невалидный'  
    redEmail()  
    isValid = false
    console.log('isValid:', isValid )
    return
  } else (regexp.test(emailValue)); {               /* значение емейл   валидно */
    blackEmail()     
  }

  if (passwordValue.length < 8) {      
    passwordError.textContent = 'Пароль должен содержать как минимум 8 символов'
    redPasword()
    isValid = false
    console.log('isValid:', isValid )
    return
  } else (passwordValue.length >= 8); {
    blackPasword()
  }

  if (agreeChecked === false) {                      /* галочки нет */
    redAgree() 
    console.log(checkmark)
    arreeError.textContent = "Поле обязательно для заполнения"
    isValid = false
    console.log('isValid:', isValid )
    return
  } else (agreeChecked === true); {                  /* галочки есть */
    blackAgree() 
    arreeError.textContent = ''
  }
  if (!isValid) {                                      /* если не волидный в начало */
    console.log('isValid:', isValid )
    return
  }

  if (auth) {
    let users = JSON.parse(localStorage.getItem('users')) || [] /* JSON.parse(localStorage.getItem('users')) преобразует извлечённое из localStorage значение в объект.  или создаем пустой массив*/
    let user = users.find(item => item.email === emailValue && item.password === passwordValue)  /* Метод find часто используется в случаях, когда нужно найти первый элемент, соответствующий определенному условию */
    

    if (user) {
      console.log(user)
      alert('Вход выполнен успешно')
      email.value = ''
      password.value = ''
      emailError.textContent = ''
      passwordError.textContent = ''
      window.location.href = 'main.html'
    } else  {
      /*alert('неверный пароль и логан')*/
      redEmail()
      redPasword()      
      passwordError.textContent = 'Логин и пароль введены неверно'
    }
  } else {
    let users = JSON.parse(localStorage.getItem('users')) || [] /* JSON.parse(localStorage.getItem('users')) преобразует строку, полученную из localStorage по ключу «users», в объект. */
    let userExists = users.some(item => item.email === emailvalue) /* Метод массива some() позволяет узнать, есть ли в массиве хотя бы один элемент, удовлетворяющий условию в функции-колбэке. */

    if (userExists) {/* Функция user_exists проверяет, существует ли пользователь в системе.  */
      alert('пользователь с таким email уже зарегистрирован')
    } else {
      users.push({email: emailValue, password: passwordValue})
      localStorage.setItem('users', JSON.stringify(users))
      alert('Регистрация прошла успешно')
    }  
  }  
})  
