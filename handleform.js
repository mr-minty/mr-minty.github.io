document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    const form = this;
    const formData = new FormData(this); // Collect form data
    let confirmation = document.createElement("div");
    let confirmationText = confirmation.appendChild(document.createElement("span"));
    confirmationText.textContent = "Success!";
    let formContainer = document.querySelector(".body-container-contact");
    confirmation.setAttribute("id", "success");
    fetch('formsubmit.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text()) // Parse the response as text
    .then(data => {
        formContainer.appendChild(confirmation);
        setTimeout(() => {
            confirmation.remove(); // Remove the confirmation after a delay
        }, 2000); 
        form.reset();
    })
    .catch(error => console.error('Error:', error)); // Handle errors
});
