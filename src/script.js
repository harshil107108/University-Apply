// Form Validation
document.getElementById("leadForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const country = document.getElementById("country").value;

  if (!name || !email || !phone || !country) {
    alert("Please fill out all fields.");
    return;
  }

  // Simulate form submission
  console.log("Form Submitted:", { name, email, phone, country });
  alert("Thank you! We will contact you shortly.");
  document.getElementById("leadForm").reset();
});
