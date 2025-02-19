document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const handLeft = document.querySelector(".hand-1");
    const handRight = document.querySelector(".hand-r");

    // Event for focusing on username
    usernameInput.addEventListener("focus", () => {
        handLeft.style.transform = "translateY(-20px)";
        handRight.style.transform = "translateY(-20px)";
    });

    // Event for focusing on password
    passwordInput.addEventListener("focus", () => {
        handLeft.style.transform = "translateY(0)";
        handRight.style.transform = "translateY(0)";
    });

    // Event for losing focus
    [usernameInput, passwordInput].forEach(input => {
        input.addEventListener("blur", () => {
            handLeft.style.transform = "translateY(0)";
            handRight.style.transform = "translateY(0)";
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginButton = document.querySelector("form button");
    const handLeft = document.querySelector(".hand-1");
    const handRight = document.querySelector(".hand-r");

    // Event for focusing on username
    usernameInput.addEventListener("focus", () => {
        handLeft.style.transform = "translateY(-20px)";
        handRight.style.transform = "translateY(-20px)";
    });

    // Event for focusing on password
    passwordInput.addEventListener("focus", () => {
        handLeft.style.transform = "translateY(0)";
        handRight.style.transform = "translateY(0)";
    });

    // Event for losing focus
    [usernameInput, passwordInput].forEach(input => {
        input.addEventListener("blur", () => {
            handLeft.style.transform = "translateY(0)";
            handRight.style.transform = "translateY(0)";
        });
    });

    // Event for clicking the login button
    loginButton.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent form submission

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            alert("Please enter both username and password!");
            return;
        }

        if (username === "admin" && password === "1234") {
            alert("Login Successful!");
            // Redirect or perform any desired action
            window.location.href = "dashboard.html"; // Example redirection
        } else {
            alert("Invalid username or password. Try again!");
        }
    });
});
