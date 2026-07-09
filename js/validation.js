const contactForm = document.getElementById('contactForm');
const errorMessage = document.getElementById('errorMessage');

contactForm.addEventListener('submit', function(event) {
    // Stop direct browser execution handling
    event.preventDefault();
    
    // Clear existing validation messages
    errorMessage.style.display = "none";
    errorMessage.innerHTML = "";

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // 1. Completeness validation check
    if (!fullName || !email || !phone || !message) {
        displayError("All form input entry fields are mandatory.");
        return;
    }

    // 2. Email structural evaluation via Regular Expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError("Please supply a structurally valid email reference address.");
        return;
    }

    // 3. Numeric constraints validation evaluation on phone digits string
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
        displayError("The telephone contact block must exclusively contain numerical digits.");
        return;
    }

    // If validation checks pass successfully
    alert("Form entries processed and validated smoothly! Form submitted successfully.");
    contactForm.reset();
});

function displayError(messageText) {
    errorMessage.innerHTML = messageText;
    errorMessage.style.display = "block";
}


