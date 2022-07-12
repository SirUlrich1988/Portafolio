const navBar = document.getElementById('navBar')
const btnMenu = document.getElementById('btnMenu')
const heroMenu = document.getElementById('zovalMenu')
const sections = document.querySelectorAll('section[id]')
const form = document.getElementById('form')

/* Header agregar/quitar fondo */
window.addEventListener('scroll', function () {
  if (window.scrollY >= 60) {
    navBar.classList.add('nav-fixed')
  } else {
    navBar.classList.remove('nav-fixed')
  }
})

/* Menu Navbar */
btnMenu.addEventListener('click', function () {
  heroMenu.classList.toggle('active')
})

heroMenu.addEventListener('click', function (e) {
  if (e.target.matches('.zoval_nav-link')) {
    heroMenu.classList.remove('active')
  }
})

// navBar.addEventListener('scroll', )

/* Secciones con ID */
// window.addEventListener('scroll', function (e) {
//   const scrollY = window.pageYOffset

//   for (const section of sections) {
//     const sectionHeight = section.offsetHeight
//     const sectionTop = section.offsetTop - 58
//     const sectionId = section.getAttribute('id')

//     const current = document.querySelector('.hero__nav-link[href*=' + sectionId + ']')

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       current.classList.add('active')
//     } else {
//       current.classList.remove('active')
//     }
//   }
// })

/* Formulario */
form.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = 'luisern29@gmail.com'
  // alert ('Enviado')
  const URL_BASE = `https://formsubmit.co/ajax/${email}`

  const input = e.currentTarget.elements
  const formData = {
    name: input.name.value,
    email: input.email.value,
    message: input.message.value
  }

  fetch(URL_BASE, {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

  console.log(formData)
  e.currentTarget.reset()
})