// JavaScript Functions for Banking System

// Show Home Page
function showHome() {
    document.getElementById("homePage").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("bankingPage").style.display = "none";
}

// Show Registration Form
function showRegister() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("bankingPage").style.display = "none";
}

// Show Login Form
function showLogin() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("bankingPage").style.display = "none";
}

// Show Banking Page (Deposit & Withdraw)
function showBankingPage() {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("bankingPage").style.display = "block";
}

// Register Functionality (Placeholder)
function register() {
    const accountNumber = document.getElementById("regAccount").value;
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    // Registration Logic (Placeholder)
    if (accountNumber && username && password) {
        document.getElementById("regMessage").innerText = "Registration successful!";
        // Add logic to save user data
    } else {
        document.getElementById("regMessage").innerText = "Please fill in all fields.";
    }
}

// Login Functionality (Placeholder)
function login() {
    const accountNumber = document.getElementById("loginAccount").value;
    const password = document.getElementById("loginPassword").value;

    // Login Logic (Placeholder)
    if (accountNumber && password) {
        document.getElementById("loginMessage").innerText = "Login successful!";
        // Redirect to banking page or load user data
        showBankingPage();
    } else {
        document.getElementById("loginMessage").innerText = "Please fill in all fields.";
    }
}

// Deposit Functionality (Placeholder)
function deposit() {
    const amount = document.getElementById("depositAmount").value;
    const password = document.getElementById("depositPassword").value;

    // Deposit Logic (Placeholder)
    if (amount && password) {
        document.getElementById("depositMessage").innerText = `Deposited $${amount}.`;
        // Add logic to update account balance
    } else {
        document.getElementById("depositMessage").innerText = "Please fill in all fields.";
    }
}

// Withdraw Functionality (Placeholder)
function withdraw() {
    const amount = document.getElementById("withdrawAmount").value;
    const password = document.getElementById("withdrawPassword").value;

    // Withdraw Logic (Placeholder)
    if (amount && password) {
        document.getElementById("withdrawMessage").innerText = `Withdrew $${amount}.`;
        // Add logic to update account balance
    } else {
        document.getElementById("withdrawMessage").innerText = "Please fill in all fields.";
    }
}



// Initialize Home Page on Load
window.onload = function() {
    showHome();
};
