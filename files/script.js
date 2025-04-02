/*=========Navbar Scroll===========*/
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("header");
    window.addEventListener("scroll", function() {
      if (window.scrollY > 50) { // Adjust the value to your preference
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
    });
});

/*========== scroll sections active link in navbar ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


/*========== Typing animation in home page ==========*/
var typed = new Typed(".text", {
    strings: ["Programming" , "Frontend Developer", "UI Designer"],
    typeSpeed:100,
    backSpeed:100,
    // backDelay:1000,
    loop:true
});


/*========== Go top icon in left bottom ==========*/
const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

/*========== Scroll Reveal script ==========*/
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.reveal');
    function checkScroll() {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight * 0.75) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
    }
    checkScroll();
    window.addEventListener('scroll', checkScroll);
});

// const form = document.querySelector("form");
// const fullName = document.getElementById("name");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const subject = document.getElementById("subject");
// const message = document.getElementById("message");

// function sendEmail() {
//     const bodyMessage = `Full Name: ${fullName.value}<br/> 
//     Email: ${email.value}<br/>
//     Phone Number: ${phone.value}<br/> 
//     Subject: ${subject.value}<br/> 
//     Message: ${message.value}`;

//     Email.send({
//         SecureToken: "bbeddc31-b519-414d-8ddf-d31ac8dd0b54",
//         To: "kathirviswa57@gmail.com",
//         From: "kathirviswa57@gmail.com",
//         Subject: subject.value,
//         Body: bodyMessage
//     }).then(response => {
//         if (response === "OK") {
//             Swal.fire({
//                 title: "Success!",
//                 text: "Message sent successfully!",
//                 icon: "success"
//             });
//         } else {
//             Swal.fire({
//                 title: "Error!",
//                 text: "Message could not be sent!",
//                 icon: "error"
//             });
//         }
//     });
// }

// function checkInputs() {
//     const items = document.querySelectorAll(".item");

//     items.forEach(item => {
//         if (item.value.trim() === "") {
//             item.classList.add("error");
//             item.parentElement.classList.add("error");
//         } else {
//             item.classList.remove("error");
//             item.parentElement.classList.remove("error");
//         }

//         item.addEventListener("keyup", () => {
//             if (item.value.trim() !== "") {
//                 item.classList.remove("error");
//                 item.parentElement.classList.remove("error");
//             } else {
//                 item.classList.add("error");
//                 item.parentElement.classList.add("error");
//             }
//         });
//     });

//     checkEmail();
// }

// function checkEmail() {
//     const emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const errorTextEmail = document.querySelector(".error-text .email");

//     if (!email.value.match(emailRegex)) {
//         email.classList.add("error");
//         email.parentElement.classList.add("error");
//         errorTextEmail.innerText = email.value.trim() === "" ? "Email address can't be blank" : "Please enter a valid email address";
//     } else {
//         email.classList.remove("error");
//         email.parentElement.classList.remove("error");
//         errorTextEmail.innerText = "";
//     }
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     checkInputs();

//     if (![fullName, email, phone, subject, message].some(input => input.classList.contains("error"))) {
//         sendEmail();
//         form.reset();
//     }
// });
