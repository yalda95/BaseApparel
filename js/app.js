const mediaQuery = window.matchMedia('(min-width: 1100px)')
const picture = document.querySelector('.main-picture')
const email = document.querySelector('#email')
const submitBtn = document.querySelector('.btn')


const handelDeviceChange = (mediaQuery) =>{
    if (mediaQuery.matches) {
        // Then trigger an alert
        // alert('Media Query Matched!')
        picture.src = "/images/hero-desktop.jpg"
      }else {
        picture.src = "/images/hero-mobile.jpg"

      }
}

const validateEmail = () => {
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if(email.value.match(mailFormat)) {
    alert("We Will Send Updates About Our new Products To Your Email Soon!")
  }else if(email.value === ""){
    alert('please fill the email section')
  }else {
    alert('You have entered an invalid Email address!')

  }
}


mediaQuery.addEventListener('change',handelDeviceChange)
handelDeviceChange(mediaQuery)
submitBtn.addEventListener('click',validateEmail)
