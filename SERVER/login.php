<?php
include(__DIR__ . '/../SHARED/header.php');
include("database.php");
include("generalData.php");
include('/translations/load_translations.php');
$translations = loadTranslations();

?>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZMEJELOV</title>
    <link rel="stylesheet" href="/SERVER/server.css">
    <link rel="stylesheet" href="/CSS/common.css">

</head>

<body>
    <div id="loginForm">
        <form action="/login" method="POST">
            <div class="username"> 🧛‍♀️<input type="text" name="username" placeholder=<?php echo $translations["username"] ?>><br>
            </div>
            <div class="password">
                &#128274;<input type="password" name="password" placeholder=<?php echo $translations["password"] ?>><br>
            </div>
            <div class="submitAbove">
                <input type="submit" name="submit" value=<?php echo $translations["login"] ?> class="submitData"><br>
            </div>
            <div class="textForm">
                <p><?php echo $translations["not_yet_user"] ?></p>
            </div>
        </form>

</body>

</html>





<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
    $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);

    $check_user_query = "SELECT * FROM users WHERE username='$username'";
    $check_user_result = mysqli_query($conn, $check_user_query);



    if ($check_user_result && mysqli_num_rows($check_user_result) > 0) {
        $user_data = mysqli_fetch_assoc($check_user_result);
        $hashed_password = $user_data['password'];

        if (password_verify($password, $hashed_password)) {
            if (session_status() == PHP_SESSION_NONE) {
                session_start();
            }
            $_SESSION["username"] = $username;
            $getLastLevel = "SELECT lastLevel, dificulty, DATE, achievements  FROM users WHERE username='$username'";
            $getLastLevel_result = mysqli_query($conn, $getLastLevel);

            // Fetch a row from the result set as an associative array
            $row = mysqli_fetch_assoc($getLastLevel_result);
            // Access the column containing the integer value 
            $_SESSION["lastLevel"] = $row['lastLevel'];
            $_SESSION["dificulty"] = $row['dificulty'];
            $_SESSION["DATE"] = $row['DATE'];
            $_SESSION["achievements"] = $row['achievements'];


            echo "<p class='response'>" . $translations['login_succ'] . "</p>";
            echo "<meta http-equiv=Refresh content=2;url=/>";
        } else {
            echo  $translations["incorect_pass"];
        }
    } else {
        echo $translations["user_not"];
    }
}
mysqli_close($conn);


?>


<?php echo $translations["user_not"] ?>


</div>
<?php
include(__DIR__ . '/../SHARED/footer.php');

?>