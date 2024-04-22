<?php
    if(isset($_GET['id'])){
        $id = $_GET['id'];
        $reg = json_decode(file_get_contents('data.json'),true);
        if(isset($reg[$id])){
            $r = $reg[$id];
        }else{
            header('location:index.php',);
        }    
    }else{
        header('location:index.php');
    }
?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Details</title>
</head>
<body>
    <img src="img/<?= $r['img'] ?>"><br>
    Full name: <?= $r['fullname'] ?><br>
    E-mail: <?= $r['email'] ?> <br>
    Healthcare ID: <?= $r['id'] ?><br>
    Age: <?= $r['age'] ?> <br>
    Gender:<?= $r['gender'] == 'm' ? 'Male' : 'Female' ?> <br>
    Date of registration:<?= $r['regdate'] ?> <br>
    Notes:<?= $r['notes'] ?>  <br>
    <a href="delete.php?id=<?= $id ?>">Delete</a> <br>
    <a href="index.php">Back to Home</a>
</body>
</html>
