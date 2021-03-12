const contactForm = document.querySelector('.contact-form')
let name = document.getElementById('contact-name')
let email = document.getElementById('contact-email')
let subject = document.getElementById('contact-phone')
let message = document.getElementById('contact-message')


contactForm.addEventListener('submit', (e) => {
  e.preventDefault()

  let formData = {
    name: name.value,
    email: email.value,
    message: message.value,
    subject: subject.value
  }
  
  let xhr = new XMLHttpRequest()
  xhr.open('POST', '/')
  xhr.setRequestHeader('content-type', 'application/json')
  xhr.onload = function() {
    console.log(xhr.responseText)
    if (xhr.responseText == 'success') {
      alert('Email sent')
      name.value = '' 
      email.value = ''
      subject.value = ''
      message.value = ''
    } else {
      alert('something went wrong!')
    }
  }

  xhr.send(JSON.stringify(formData))
})
