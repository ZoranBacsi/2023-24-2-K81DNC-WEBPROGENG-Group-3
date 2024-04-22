<?php
$reg = json_decode(file_get_contents("data.json"), true);
usort($reg, fn ($a, $b) => strcmp($a['fullname'], $b['fullname']));
?>

<!DOCTYPE html>
<html lang="hu">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>List</title>
</head>

<body>
    <a href="reg.php">New registration</a>
    <h1>List of registered patients:</h1>
    <table>
        <?php foreach ($reg as $r) : ?>
            <tr>
                <td><a href="show.php?id=<?= $r['id'] ?>"><?= $r['fullname'] ?></a></td>
                <td><?= $r['age'] ?></td>
                <td><?= $r['gender'] == 'm' ? 'Male' : 'Female' ?></td>
            </tr>
        <?php endforeach ?>
    </table>
</body>

</html>