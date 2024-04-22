<?php
    if(isset($_GET['id'])){
        $id = $_GET['id'];
        $reg = json_decode(file_get_contents('data.json'),true);
        if(isset($reg[$id])){
            unset($reg[$id]);
            file_put_contents('data.json',json_encode($reg,JSON_PRETTY_PRINT));
        }   
    }

    header('location:index.php');
