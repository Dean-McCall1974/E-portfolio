// template_c88lx9q
// service_o9u0w7m 
// uAPy9xI5FIduex09c (public key)
let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList.add("dark-theme")
    } 
    else {
        document.body.classList.remove("dark-theme")
    }
}



function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList.add("modal__overlay--visible");
    emailjs
    .sendForm(
        'service_o9u0w7m',
        'template_c88lx9q',
        event.target,
        'uAPy9xI5FIduex09c'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList.add("modal__overlay--visible");
     }) .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me at mccall.dean.dev@gmail.com"
        );
     })
    }

    function toggleModal() {
        if (isModalOpen) {
            isModalOpen = false;
            return document.body.classList.remove("modal--open");
        }
        isModalOpen = true;
         document.body.classList.add("modal--open");
    }

   