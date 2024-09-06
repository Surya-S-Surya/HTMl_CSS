<?php


$ss="localhost";
$name="root";
$pass="";
$dbname="myuser";

$conn=new mysqli($ss,$name,$pass,$dbname);

$u=$_POST['loginusername'];
$p=$_POST['loginpass'];

$condition="SELECT * FROM myregistertable1 WHERE username='$u' AND password='$p'";
$result=mysqli_query($conn,$condition);
if(mysqli_num_rows($result)==1)
{
    echo"Successfully Logged in.  ";
    echo"Will redirect you in few sec...";
    echo "<meta http-equiv='refresh' content='5;url=welcome.html'>";
}
else{
    echo"Invalid entry of Username or Password. Try again!!";
    echo "<meta http-equiv='refresh' content='4;url=rp.html'>";
}
?>
