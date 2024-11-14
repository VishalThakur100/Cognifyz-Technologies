document.addEventListener("DOMContentLoaded", () => {
  console.log("Page Loaded!");
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (event) => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      event.preventDefault();
      alert("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      event.preventDefault();
      alert("Please enter a valid email address.");
      return;
    }
    alert("Form submitted successfully!");
  });

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }
});
