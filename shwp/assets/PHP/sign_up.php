<?php

include_once 'db_connection.php';


$prefix_title = $_POST['prefix_title'];
$first_name = $_POST['first_name'];
$surname = $_POST['surname'];
$phone = $_POST['phone'];
$email = $_POST['email_add'];
$dob = $_POST['birthdate'];
$gender = $_POST['gender'];
$address = $_POST['addressbook'];
$username = $_POST['username'];
$password = $_POST['password'];



$sql = "INSERT INTO student_profile (prefix_title, first_name, surname, phone, email, dob, gender, address, username, password ) 
        VALUES ('$prefix_title', '$first_name', '$surname', '$phone', '$email', '$dob', '$gender', '$address', '$username', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully, please proceed sign in</a>. ";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
?>
