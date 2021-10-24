<?php
    $host="localhost";
    $user="root";
    $password="";
     
    $conn=mysqli_connect($host,$user,$password,'testing');
    if(!$conn)
     { 
         echo "database error".mysqli_error();
     }
     else{
        // echo "sucess";
     }
    
?>
