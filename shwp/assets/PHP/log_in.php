<?php
session_start();

// Check if the user has exceeded the maximum login attempts
if (isset($_SESSION['login_attempts']) && $_SESSION['login_attempts'] >= 3) {
    echo "Your account is locked. Please contact support to unlock it or try again after one minutes.";
    exit;
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate username and password (you should sanitize and validate input properly)
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Check if username and password are correct (you should verify credentials against a database)
    if ($username === "username" && $password === "password") {
        // Successful login
        $_SESSION['user_id'] = $user_id; // Store user ID in session
        $_SESSION['login_attempts'] = 0; // Reset login attempts on successful login
        // Redirect to the profile page or dashboard
        header("Location: profile.php");
        exit;
    } else {
        // Incorrect username or password
        if (isset($_SESSION['login_attempts'])) {
            $_SESSION['login_attempts']++;
        } else {
            $_SESSION['login_attempts'] = 1;
        }
        echo "Invalid username or password. Please try again.";
    }
}

// Check if the profile is locked
if (isset($_SESSION["profile_locked"]) && $_SESSION["profile_locked"]) {
    // Unlock the profile after a certain period (e.g., 5 minutes)
    $lockDuration = 1 * 60; // 5 minutes in seconds
    if (isset($_SESSION["lock_time"]) && time() - $_SESSION["lock_time"] >= $lockDuration) {
        $_SESSION["profile_locked"] = false; // Unlock the profile
        $_SESSION["login_attempts"] = 0; // Reset login attempts
    }
}
?>
