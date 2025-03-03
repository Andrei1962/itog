let registrs = document.querySelector('#registr')     /* выбор вход-регистрация */
let title = document.getElementById('title')          /* title вход-регистрация */
let submit = document.getElementById('submit')        /* кнопка вход */
let email = document.querySelector('#email') 
let emailblock = document.querySelector('#emailblock')       /* ввод email */
let password = document.querySelector('#password')  /* ввод пароля */
let checked = document.querySelector('#agree') 
console.log('checked:', checked)           /* ввод чекбокса */
let emailError = document.querySelector('#emailError')  /* ошибка ввода email */
let passwordError = document.querySelector('#passwordError')  /* ошибка ввода паспорта */
let arreeError = document.querySelector('#arreeError')    /* ошибка чекбокса */
let arreement = document.getElementById('arreeSpan')
let checkmark = document.querySelector('.custom-checkbox')
let inputemail = document.getElementById('inputemail')  
let hidind = document.querySelector('#hiding')  
let auth = true                   /* false--вход или true--регистрация */
console.log('auth:', auth)
console.log('checked:', checked)
let user = {email: '', password: ''}

registrs.addEventListener('click', (event)=> {   /* переключатель по клику, выбор страницы вход или авторизация */
  event.preventDefault()  
  auth = !auth
  console.log('auth:',auth )
  if(!auth) {  
  registracia()           /* функция регистрация на сайте */
  } else  {
    starsssss.style.color = ' #787878' 
    starsssss.style.top = '1px'
    avtorizacia()          /* функция авторизация на сайте */
  }
})

function registracia() {     /* страница вход */
  console.log('auth:',auth )
  document.querySelector('#email').placeholder = 'Введите email'
  email.value = ''
  password.value = ''
  emailError.textContent = ''
  passwordError.textContent = ''
  title.innerHTML = "Регистрация"  
  arreement.innerHTML = "Я согласен получать обновления на почту"
  submit.innerHTML = "Регистрация"
  title.style.left = "200px"
  registrs.innerHTML = "Авторизоваться" 
  password.style.display = 'block'
  hidingpassword.style.display = 'none'
  resetErrorEmail()
  resetErrorPasword()
  resetErrorAgree()
}

function avtorizacia() {      /* страница авторизация */
  console.log('auth:',auth )
  document.querySelector('#email').placeholder = 'johndoe@email.com'
  email.value = ''
  password.value = ''
  emailError.textContent = ''
  passwordError.textContent = ''
  title.innerHTML = "Вход"
  arreement.innerHTML = "Я согласен с Правилами пользования приложением"
  submit.innerHTML = "Вход"
  title.style.left = "270px"
  /*errorBefore.style.color = '  #787878'*/
  registrs.innerHTML = "Зарегистрироваться" 
  password.style.display = 'block' 
  hidingpassword.style.display = 'none'
  resetErrorEmail()
  resetErrorPasword()
  resetErrorAgree()
}  
function errorEmail() {                              /* ошибка email красный */
  emailError.style.display = 'block' 
  stars.style.color = ' #CB2424'
  emailblock.style.color = ' #CB2424'
  inputemail.style.border = '2px solid #CB2424' 
}

function resetErrorEmail() {                            /* сброс ошибки  email черный */
  emailError.style.display = 'none' 
  stars.style.color = ' #787878'
  emailblock.style.color = ' #787878'
  inputemail.style.border = '2px solid #787878' 
}

function errorPasword() {                           /* ошибка пароль красный */
  passwordError.style.display = 'block'   
  starss.style.color = ' #CB2424'
  passwordblock.style.color = ' #CB2424'
  inputpassword.style.border = '2px solid #CB2424' 
}

function resetErrorPasword() {                     /* сброс ошибки  пароль черный */ 
  passwordError.style.display = 'none'  
  hiding.style.display = 'none'
  starss.style.color = ' #787878'
  passwordblock.style.color = ' #787878'
  inputpassword.style.border = '2px solid #787878' 
}

function errorAgree() {                         /* ошибка чекбокса красный */      
  arreeError.style.display = 'block'   
  starssss.style.border = '2px solid #cb2424'
  starsssss.style.color = ' #cb2424' 
  starssss.style.marginTop = '-18px'  
  starsss.style.top = '240px'
}

function resetErrorAgree() {                      /* сброс ошибки  чекбокса черный */
  arreeError.style.display = 'none'    
  starssss.style.border = '2px solid #787878'
  starssss.style.marginTop = '0px' 
  starsssss.style.color = ' #787878' 
  starsss.style.top = '258px'
}

submit.addEventListener('click', (event)=>{  /* функция по клику кнопки вход */
  event.preventDefault()
  let emailValue = email.value.trim()
  let passwordValue = password.value.trim()
  console.log('achecked:', checked)
  let agreeChecked = agree.checked
  console.log('agreeChecked:', agreeChecked )
  console.log('emailValue:', emailValue)
  console.log('passwordValue:', passwordValue)
  let regexp =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/   
  let isValid = true 
  console.log('isValid:', isValid )
  console.log('auth:',auth )

  if (emailValue === '') {         /* значение емейл пусто */
    console.log('emailValue:', emailValue)
    document.querySelector('#email').placeholder = 'Введите email'
    emailError.textContent = 'Поле обязательно для заполнения'
    emailError.style.top = '153px'
    passwordError.textContent = 'Поле обязательно для заполнения'
    passwordError.style.top = '236px'
    arreeError.textContent = "Поле обязательно для заполнения"
    arreeError.style.top = '243px'    
    errorEmail()
    errorPasword()
    errorAgree() 
    document.querySelector('#email').placeholder = 'Введите email'
    isValid = false
    console.log('isValid:', isValid )
    return
    
  } else (emailValue != ''); {             /* значение емейл  не пусто */
    resetErrorEmail()
    resetErrorPasword()
    resetErrorAgree()    
  }

  if (!regexp.test(emailValue)) {              /* значение емейл  не валидно */
    console.log('!regexp.test(emailValue):', !regexp.test(emailValue));  
    emailError.textContent = 'Email невалидный' 
    document.querySelector('#email').placeholder = 'johndoe$email'
    password.style.display = 'none' /* убрать слово введитете email */
    hiding.style.color = 'black'  
    hiding.style.display = 'block'  
    emailError.style.top = '153px' 
    email.value = ''
    errorEmail()  
    isValid = false
    console.log('isValid:', isValid )
    return

  } else (regexp.test(emailValue)); {               /* значение емейл   валидно */
    resetErrorEmail()     
  }

  if (passwordValue.length < 8) {      
    passwordError.textContent = 'Пароль должен содержать как минимум 8 символов'
    email.value = ''
    document.querySelector('#email').placeholder = 'johndoe@email.com'
    passwordError.style.top = '247px'
    /*hiding.style.display = 'block'*/
    hiding.style.color = 'black'  
    password.style.display = 'none' /* убрать слово введитете пароль*/
    hidingpassword.style.display = 'block'
    errorPasword()
    resetErrorEmail()
    isValid = false
    console.log('isValid:', isValid )
    return

  } else (passwordValue.length >= 8); {
    resetErrorPasword()
  }

  if (agreeChecked === false) {                    /* галочки нет */
    errorAgree() 
    arreeError.textContent = "Поле обязательно для заполнения"
    arreeError.style.top = '263px'
    starsss.style.top = '260px'
    isValid = false
    console.log('isValid:', isValid )
    return

  } else (agreeChecked === true); {                /* галочки есть */
    resetErrorAgree() 
    arreeError.style.display = 'none'    
    arreeError.textContent = ''
  }

  if (!isValid) {                             /* если не валидный в начало */
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
      errorEmail()
      errorPasword()      
      passwordError.textContent = 'Логин или Пароль невереный '
      document.querySelector('#email').placeholder = 'johndoe$email'
      passwordError.style.display = 'block' 
      passwordError.style.top = '246px'
      password.style.display = 'none' /* убрать слово введитете пароль*/      
      hiding.style.display = 'block'
      hiding.style.color = ' #cb2424'
      email.value = ''
      password.value = ''
    }

  } else {
    let users = JSON.parse(localStorage.getItem('users')) || [] /* JSON.parse(localStorage.getItem('users')) преобразует строку, полученную из localStorage по ключу «users», в объект. */
    let userExists = users.some(item => item.email === emailValue) /* Метод массива some() позволяет узнать, есть ли в массиве хотя бы один элемент, удовлетворяющий условию в функции-колбэке. */

    if (userExists) {/* Функция user_exists проверяет, существует ли пользователь в системе.  */
      email.value = ''
      password.value = ''
      emailError.textContent = 'пользователь с таким email уже зарегистрирован'
      emailError.style.display = 'block' 
      emailError.style.top = '152px'
      /*alert('пользователь с таким email уже зарегистрирован')*/
      
    } else {
      users.push({email: emailValue, password: passwordValue})
      localStorage.setItem('users', JSON.stringify(users))
      email.value = ''
      password.value = ''
      console.log(email.value, password.value)
      alert('Регистрация прошла успешно')
    }  
  }  
})
