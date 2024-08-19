 function validateForm(event) {
            // Prevent form submission
            event.preventDefault();

            // Get form elements
            const username = document.querySelector('input[name="username"]').value;
            const password = document.querySelector('input[name="password"]').value;

            // Check if fields are empty
            if (username.trim() === "" || password.trim() === "") {
                alert("Please enter both username and password.");
                return false;
            }

            // For demonstration purposes, we'll log the values and alert success
            console.log("Username:", username);
            console.log("Password:", password);

            alert("Login successful!");
            // Here you would normally submit the form or handle the login process
            // document.querySelector('form').submit();
        }

        document.addEventListener('DOMContentLoaded', () => {
            // Attach event listener to the form
            document.querySelector('form').addEventListener('submit', validateForm);
        });