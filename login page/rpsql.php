<?php

$u=$_POST['username'];
$e=$_POST['email'];
$p=$_POST['pass'];
$pa=$_POST['passwordagain'];
$ss="localhost";

$name="root";
$pass="";
$dbname="myuser";

$conn=new mysqli($ss,$name,$pass,$dbname);

if($conn->connect_error)
{
    die("Connection to server has Failed: ". $conn->connect_error);

}

$sql_check="SELECT * FROM myregistertable1 WHERE username = ? OR email = ?";
$stmt_check=$conn->prepare($sql_check);
$stmt_check->bind_param("ss",$u,$e);
$stmt_check->execute();
$result_check=$stmt_check->get_result();

if($result_check->num_rows>0){
    echo"Username or Email already Exist. Try another Username or Email ID. Will redirect to Register page in few seconds....";
    echo "<meta http-equiv='refresh' content='7;url=rp.html'>";

    $stmt_check->close();
    $conn->close();
    exit();
}



$sql_insert="INSERT INTO myregistertable1 (username,email,password,confirm_password) VALUES (?,?,?,?)";
$stmt_insert=$conn->prepare($sql_insert);
$stmt_insert->bind_param("ssss",$u,$e,$p,$pa);

if($stmt_insert->execute()){

    echo "Details Registered Successfully, will redirect to Login Page in few seconds.....";
    echo "<meta http-equiv='refresh' content='5;url=lp.html'>";
}
else{
    echo "Registration Unsuccessful ";
    echo "<meta http-equiv='refresh' content='5;url=rp.html'>";

}
$stmt_insert->close();
$conn->close();

?>

