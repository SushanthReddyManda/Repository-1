<?php

    $host = "localhost";
    $dbUsername = "sush_1";
    $dbPassword = "5589@SUSH";
    $dbname = "sush_1";
    //create connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

    
// define variables and set to empty values
$name = $email = $phonenumber = $address = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["email"]);
  $phonenumber = test_input($_POST["phonenumber"]);
  $address = test_input($_POST["address"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

if(!$conn){
  echo 'database connection problem';
}else{
$INSERT = "INSERT Into sushtable_1 (name, email, phonenumber, address) VALUES(?, ?, ?, ?)";

$stmt = $conn->prepare($INSERT);
}


if ($stmt = $conn->prepare($INSERT)) {
 
 $stmt->bind_param("ssss", $name, $email,$phonenumber,$address);
 $stmt->execute();


    echo "New record inserted sucessfully";
    echo "<br>";
    echo "Check your details properly";
    echo "<h2>Your Input:</h2>";
    echo $name;
    echo "<br>";
    echo $email;
    echo "<br>";
    echo $phonenumber;
    echo "<br>";
    echo $address;

    
    $stmt->close();
    $conn->close();



     }

?>
