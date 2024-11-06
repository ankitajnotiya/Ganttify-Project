document.querySelectorAll('.day').forEach(day => {
    day.addEventListener('click', function() {
        document.querySelectorAll('.day').forEach(d => d.classList.remove('selected'));
        day.classList.add('selected');
    });
});

const statusElements = document.querySelectorAll('.status');
statusElements.forEach(status => {
    status.addEventListener('click', function() {
        if (status.textContent === "On Track") {
            status.textContent = "Completed";
            status.style.color = "#008000";
        } else {
            status.textContent = "On Track";
            status.style.color = "#2e8b57";
        }
    });
});

const getStartedButtons = document.querySelectorAll('.get-started-btn');

getStartedButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirecting to sign-up page...');
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (firstName && lastName && email && message) {
        document.getElementById('response-message').textContent = "Thank you for reaching out, we will get back to you shortly!";
        document.getElementById('contact-form').reset(); 
    } else {
        document.getElementById('response-message').textContent = "Please fill out all fields before submitting.";
        document.getElementById('response-message').style.color = "red";
    }
});