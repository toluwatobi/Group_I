<!DOCTYPE html>
<html lang="en">
    <!--HEADER START-->
    <head>
            <meta charset="UTF-8">
            <title>Sign Up</title>
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
        <div>
            <?php
            include_once 'header.php';
            ?>
        </div>
    
    
        <!--MAIN START-->
        <main class= "grid-container">
            <section class="grid-50">
                    <form action="assets/PHP/sign_up.php" method="POST" >
                        <fieldset>
                            <legend><strong>Sign Up</strong></legend>
                            <a><em>those marked (<font color="red">*</font>) are important</em></a>
                            <table>
                                <tr>
                                    <td><label for="title">Title:</label></td>
                                    <td><select name="prefix_title">
                                        <option value="">Select how we can best address you</option>
                                        <option value="">Mr</option>
                                        <option value="">Mrs</option>
                                        <option value="">Ms</option>
                                        <option value="">Miss</option>       
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label for="first_name">FirstName<font color="red">*</font>:</label></td>
                                    <td><input type="first_name" name="first_name" value="" max-length="20" placeholder="FirstName" required/></td>
                                </tr>
                                <tr>
                                    <td><label for="surname">Surname<font color="red">*</font>:</label></td>
                                    <td><input type="surname" name="surname" value="" max-length="20" placeholder="Surname" required/></td>
                                </tr>
                                <tr>
                                    <td><label for="phone">Phone No<font color="red">*</font>:</label></td>
                                    <td><input type="phone" name="phone" value="" placeholder="Phone No" required></td>
                                </tr>
                                <tr>
                                    <td><label for="email">Email<font color="red">*</font>:</label></td>
                                    <td><input type="email" name="email_add" value="" placeholder="user@domain.com" required></td>
                                </tr>
                                <tr>
                                    <td><label for="email">Retype Email<font color="red">*</font>:</label></td>
                                    <td><input type="email" name="email_add" value="" placeholder="user@domain.com" required></td>
                                </tr>
                                <tr>
                                    <td><label for="dob">Date of Birth<font color="red">*</font>:</label></td>
                                    <td><input type="date" name="birthdate" value="" required/></td>
                                </tr>
                                <tr>
                                    <td><label for="gender">Gender<font color="red">*</font>:</label></td>
                                    <td><input type="radio" name="gender" value="Female" required>Female
                                        <input type="radio" name="gender" value="Male" required>Male
                                        <input type="radio" name="gender" value="Others" required>Others
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td><label for="address">Address<font color="red">*</font>:</label></td>
                                    <td><input type="address" name="addressbook" value="" placeholder="Address" required></td>
                                </tr>
                                <tr>
                                    <td><label>Username<font color="red">*</font>:</label></td>
                                    <td><input type="username" name="username" id="user_id" min-lenght="4" max-length="10" value="" placeholder="choose your Username" required></td>
                                </tr>
                                <tr>
                                    <td><label>Password<font color="red">*</font>:</label></td>
                                    <td><input type="password" pattern=".{5,10}" name="password" id="password" value="" placeholder="Password" required></td>
                                </tr>
                                <tr>
                                    <td><label>Retype Password<font color="red">*</font>:</label></td>
                                    <td><input type="password" name="password" id="password" value="" placeholder="Retype Password" required></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="terms" name="terms" required></td>
                                    <td><label for="terms"><font color="red">*</font>I agree to the <a href="terms_and_conditions.html" target="_blank">Terms and Conditions</a></label></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" id="notifications" name="notification"></td>
                                    <td><label for="notofication">I agree to receive notifications</label></td>
                                </tr>
                                <tr>
                                    <td><input type="submit" value="Sign Up"></td>
                                </tr>
                            </table>
                            <h3>Already have an account before? <a href="signin.php">Sign In</a>!</h3>
                        </fieldset>
                    </form>
                </section>
        </main>
        <!--MAIN END-->

        <!--FOOTER START-->
        <footer>

        </footer>
        <!--FOOTER END-->
    </body>
    <!--BODY END-->
<?php
include_once 'footer.php';
?> 
</html>