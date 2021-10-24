<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include_once('connection.php');

//Recieving Data from react and storing in variables 
$react_data1= $_REQUEST['username'];
$react_data2= $_REQUEST['password'];

$query="select count(*) as cnt,firstname,lastname from user where username ='$react_data1' and password = '$react_data2' ";
$result=mysqli_query($conn,$query);

$data = mysqli_fetch_assoc($result);

if($data['cnt']==1){
    //data found 
    $fname=$data['firstname'];
    $lname=$data['lastname'];
    $array = array(
        "fname" => $fname,
        "lname" => $lname,
        "msg" => "success"
    );
    
    //sending data to react 
    echo json_encode($array);
}
else{
    //not found
    //echo json_encode('response:fail');
    $array = array(
        "fname" => "",
        "lname" => "",
        "msg" => "fail"
    );

    //sending data to react 
    echo json_encode($array);
}

?>          