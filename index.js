// template_c88lx9q
// service_o9u0w7m 
// uAPy9xI5FIduex09c (public key)

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
    .sendForm(
        'service_o9u0w7m',
        'template_c88lx9q',
        event.target,
        'uAPy9xI5FIduex09c'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
     }) .catch(() => {
        loading.catchList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me at mccall.dean.dev@gmail.com"
        );
     })
    }