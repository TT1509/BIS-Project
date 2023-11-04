document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const loginUsername = document.getElementById("loginUsername").value;
        const loginPassword = document.getElementById("loginPassword").value;

        // Send a POST request to the login route
        fetch("/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: loginUsername, password: loginPassword }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server
                message.innerText = data.message;
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });

    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const registerUsername = document.getElementById("registerUsername").value;
        const registerPassword = document.getElementById("registerPassword").value;

        // Send a POST request to the register route
        fetch("/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: registerUsername, password: registerPassword }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server
                message.innerText = data.message;
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
});
