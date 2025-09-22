const form = document.getElementById("myform");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;

      // Reset messages
      document.querySelectorAll("p").forEach(p => p.classList.add("hidden"));
      document.querySelectorAll("input").forEach(input => input.classList.remove("border-red-500", "border-green-500"));

      // Email validation
      const email = document.getElementById("email");
      const emailError = document.getElementById("emailError");
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (email.value.trim() === "" || !email.value.match(emailPattern)) {
        emailError.textContent = "Please enter a valid email.";
        emailError.classList.remove("hidden");
        email.classList.add("border-red-500");
        valid = false;
      } else {
        email.classList.add("border-green-500");
      }

      // Password validation
      const password = document.getElementById("password");
      const passwordError = document.getElementById("passwordError");
      if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        passwordError.classList.remove("hidden");
        password.classList.add("border-red-500");
        valid = false;
      } else {
        password.classList.add("border-green-500");
      }

      // Confirm password validation
      const confirmPassword = document.getElementById("confirmPassword");
      const confirmPasswordError = document.getElementById("confirmPasswordError");
      if (confirmPassword.value !== password.value || confirmPassword.value === "") {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordError.classList.remove("hidden");
        confirmPassword.classList.add("border-red-500");
        valid = false;
      } else {
        confirmPassword.classList.add("border-green-500");
      }

      // Number validation (Age)
      const age = document.getElementById("age");
      const ageError = document.getElementById("ageError");
      if (!/^\d+$/.test(age.value) || age.value === "") {
        ageError.textContent = "Please enter a valid number.";
        ageError.classList.remove("hidden");
        age.classList.add("border-red-500");
        valid = false;
      } else {
        age.classList.add("border-green-500");
      }

      // If valid show success
      if (valid) {
        successMessage.classList.remove("hidden");
        form.reset();
        document.querySelectorAll("input").forEach(input => input.classList.remove("border-green-500"));
      }
    });