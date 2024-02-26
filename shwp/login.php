
<!DOCTYPE html>
<html lang="en">
    <!--HEADER START-->
    <head>
            <meta charset="UTF-8">
            <title>Log In</title>
            <meta name="viewport" contenteditable="widdth=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="assets/CSS/styles.css">
            <link rel="stylesheet" href="assets/CSS/unsemantic-grid-responsive-tablet">
    </head>
    <!--HEADER END-->

        <style>
            /* CSS styles for header */
            header
            {
                background-image: url('assets/images/backgroundimage.png'); /* Background image for the header */
                background-size: cover; /* Cover the entire header area */
                background-position: center; /* Center the background image */
                color: green; /* Text color for the header */
                padding: 5px; /* Add padding to create space inside the header */
                display: flex; /* Use flexbox layout */
                justify-content: space-between; /* Align items with space between */
               align-items: center; /* Align items vertically in the center */
            }
        </style>

    <!--BODY START-->
    <body>
        <!--HEADER START-->
        <?php
            include_once 'header.php';
        ?>

        <!--MAIN START-->
        <main class="grid-container">
            <section class="grid-50">
                <form action="#" method="POST" >
                    <fieldset>
                        <legend><strong>Log In</strong></legend>
                        <table>
                            <tr>
                                <td><label for= "user_name"> Username </label></td>
                                <td><input type="text" id="text" name="user_name" placeholder="Username" required></td>
                            </tr>                                
                            <tr>
                                <td><label for="password"> Password </label></td>
                                <td><input type="password" id="text" name="password" placeholder="password" required></td>
                            </tr>
                            <tr>
                                <td><br></td>
                                <td><a href="reset.php">forgot your password/username?<a></td>
                            </tr>
                            <tr>
                                <td><button type = "Submit" name = "Submit" > Log in </button></td>
                                <td><a href="index.php">Cancel</a></td>
                            </tr>
                        </table>
                        <h3>Don't have an account yet? <a href="signup.php">Sign up</a></h3>
                    </fieldset>
                </form>
            </section>
        </main>           
        <!--MAIN END-->

        
<?php
include_once 'footer.php';
?> 





