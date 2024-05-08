<?php 
    require_once("Storage.php");
    function new_storage($filename){
        return new Storage(new JsonIO("$filename.json"), false);
    }

    $store = new_storage('storage');

    $store->add([
        "Name" => $_POST['name'],
        "Email" => $_POST['email'],
        "EULA" => $_POST['accept'],
    ]);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Storage PHP practice</title>
</head>
<body>
    <form action="submit" method="post">
        Name: <input type="text" name="name" id="name" required><br>
        E-mail: <input type="email" name="email" id="email" required><br>
        <input type="checkbox" name="accept" id="accept" required> Accept the EULA <br>
        <button type="submit">Submit</button>
    </form>
</body>
</html>