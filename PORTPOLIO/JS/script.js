document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const address = document.getElementById("address");
    const phone = document.getElementById("phone");

    let isValid = true;

    // Helper function to show a floating message near the field
    function showFieldPopup(inputElement, message, type = "error") {
        const popup = document.createElement("div");
        popup.className = `field-popup ${type}`;
        popup.textContent = message;

        // Position it near the field
        const rect = inputElement.getBoundingClientRect();
        popup.style.top = `${rect.top + window.scrollY - 40}px`;
        popup.style.left = `${rect.left + rect.width + 15}px`;

        document.body.appendChild(popup);

        setTimeout(() => {
            popup.classList.add("fade-out");
            setTimeout(() => popup.remove(), 400);
        }, 2500);
    }

    // clear existing popups
    document.querySelectorAll(".field-popup").forEach(el => el.remove());

    // name validation
    if (name.value.trim() === "") {
        showFieldPopup(name, "Please enter your name.");
        isValid = false;
    } else if (name.value.trim().length <= 3) {
        showFieldPopup(name, "Name must be at least 3 characters.");
        isValid = false;
    }

    // email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === "") {
        showFieldPopup(email, "Please enter your email.");
        isValid = false;
    } else if (!email.value.match(emailPattern)) {
        showFieldPopup(email, "Please enter a valid email.");
        isValid = false;
    }

    // phone validation
    if (phone.value.trim() === "") {
        showFieldPopup(phone, "Please enter your phone number.");
        isValid = false;
    } else if (!phone.value.match(/^\d{10}$/)) {
        showFieldPopup(phone, "Invalid 10-digit number.");
        isValid = false;
    }

    // address validation
    if (address.value.trim() === "") {
        showFieldPopup(address, "Please enter your address.");
        isValid = false;
    }

    // message validation
    if (message.value.trim() === "") {
        showFieldPopup(message, "Please enter your message.");
        isValid = false;
    }

    // success
    if (isValid) {
        const popup = document.createElement("div");
        popup.className = "field-popup success";
        popup.textContent = "Form submitted successfully!";
        document.body.appendChild(popup);
        popup.style.top = "20px";
        popup.style.left = "50%";
        popup.style.transform = "translateX(-50%)";

        setTimeout(() => {
            popup.classList.add("fade-out");
            setTimeout(() => popup.remove(), 400);
        }, 2500);

        document.getElementById("contactForm").reset();
    }
});

// Add shadow when scroll
window.onscroll = function() {
  let header = document.querySelector('.header');
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Toggle menu
let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = function() {
  navbar.classList.toggle('open');
}

