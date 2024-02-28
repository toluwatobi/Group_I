<?php
$servername = "localhost:8889";
$username = "student";
$password = "password1";
$dbname = "Group_I1";



$conn = new mysqli($servername, $username, $password, $dbname);



if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
