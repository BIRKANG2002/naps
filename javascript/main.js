/*=========================== Toggle Icon Navbar ===========================*/
let menuIcon = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
} ;

/*=========================== Scroll Section Active Link ===========================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(link => {
                navLinks.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

/*=========================== Sticky Navbar===========================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

/*=========================== Remove Toggle Icon And Navbar ===========================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*=========================== Scroll Reveal ===========================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-contain,heading', { origin: 'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',);
ScrollReveal().reveal('.home-contact h1,.about-img', { origin:'left'});
ScrollReveal().reveal('.home-contact p,.about-contact', { origin: 'right'});

/*=========================== Type Js ===========================*/
const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer','Web Designer','Mechanical Engineer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

/*=========================== SMTP MAIL ===========================*/
const subject = document.getElementById("email-subject");
const message = document.getElementById("Message"); // Assuming your message textarea has this ID
const form = document.querySelector("form"); // Get the form element

function sendEmail() {
    // Get the *value* of the subject and message elements
    const subjectValue = subject.value;
    const messageValue = message.value;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "birkangpuri123@gmail.com",
        Password: "D2AC35333F5C3F853EB9A07C8B4511E470BB", // Consider storing this more securely
        To: 'birkangpuri123@gmail.com',
        From: "birkangpuri123@gmail.com",
        Subject: subjectValue,  // Use the value, not the element itself
        Body: messageValue      // Use the value, not an undefined variable
    }).then(
        message => {
            if (message === "OK") { // Use strict equality (===) for better comparison
                Swal.fire({
                    title: "Success!", // More descriptive title
                    text: "Email sent successfully!", // Clearer message
                    icon: "success"
                });
            } else {
                // Handle errors gracefully
                Swal.fire({
                    title: "Error!",
                    text: "Failed to send email. Please try again later.",
                    icon: "error"
                });
                console.error("Email sending failed:", message); // Log the error for debugging
            }
        }
    ).catch(error => {
          // Handle promise rejections
          console.error("Email sending failed:", error);
          Swal.fire({
              title: "Error!",
              text: "An unexpected error occurred.",
              icon: "error"
          });
    });
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});

/*=========================== img slider ===========================*/
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
/*=========================== RESPONSHIP ===========================*/
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  
 
  });

  

















