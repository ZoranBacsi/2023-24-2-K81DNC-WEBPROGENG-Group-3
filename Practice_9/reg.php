<?php
    $regdate = $_POST['regdate'] ?? date('Y-m-d');
    $fullname = $_POST['fullname'] ?? '';
    $img = $_POST['img'] ?? 'default.svg';
    $email = $_POST['email'] ?? '';
    $id = $_POST['id'] ?? '';
    $age = $_POST['age'] ?? '';
    $gender = $_POST['gender'] ?? '';
    $accept = $_POST['accept'] ?? false;
    $accept = filter_var($accept, FILTER_VALIDATE_BOOLEAN);
    $notes = $_POST['notes'] ?? '';

    if(count($_POST) > 0) {
        $errors = [];
        if(trim($fullname) === '')
            $errors['fullname'] = 'Name field is required!';
        else if(count(explode(' ', trim($fullname))) < 2)
            $errors['fullname'] = 'The name should contain at least two words!';

        if (!filter_var($email, FILTER_VALIDATE_EMAIL))
            $errors['email'] = 'The e-mail address is not valid';

        if(strlen($id) != 9)
            $errors['id'] = 'The ID must be 9 digit long!';
        else{
            if(count(array_filter(str_split($id),fn($char) => $char >= '0' && $char <= '9')) != 9)
                $errors['id'] = 'The ID must contain only numbers!';
        }

        if(filter_var($age, FILTER_VALIDATE_INT) === false){
            $errors['age'] = 'Age must be an integer';
        }else{
            $age = intval($age);
            if( $age < 1) $errors['age'] = 'Age must be positive';
        }

        if(trim($gender) === ''){
            $errors['gender'] = 'Gender field is required';
        }else if($gender !== 'm' && $gender !== 'f'){
            $errors['gender'] = 'The gender could be only Male or Female';
        }

        if(!$accept) 
            $errors['accept'] = 'Please Accept the EULA';
        
        $errors = array_map(fn($e) => "<span style='color: red'> $e </span>", $errors);
        
        if(count($errors) == 0){
            $reg = json_decode(file_get_contents("data.json"),true);
            $reg[$id] = [
                'fullname' => $fullname,
                'id' => $id,
                'email' => $email,
                'img' => $img,
                'age' => $age,
                'gender'=> $gender,
                'regdate' => $regdate,
                'notes' => $notes
            ];
            file_put_contents('data.json',json_encode($reg,JSON_PRETTY_PRINT));
        }
    }
?>

<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
</head>
    <?php if(count($_POST) > 0 && count($errors) == 0): ?>
        <span style="color: green;">Successfully saved!</span><br>
    <?php endif; ?>
    <form action="reg.php" method="post">
        Full name: <input type="text" name="fullname" value="<?= $fullname ?>"> <?= $errors['fullname'] ?? '' ?> <br>
        E-mail: <input type="text" name="email" value="<?= $email ?>"> <?= $errors['email'] ?? '' ?><br>
        Profile picture: <input type="file" name="img" value="<?= $profile ?? 'default.svg' ?>" accept="image/svg"><br>
        Healthcare ID: <input type="text" name="id" value="<?= $id ?>"> <?= $errors['id'] ?? '' ?><br>
        Age: <input type="text" name="age" value="<?= $age ?>"> <?= $errors['id'] ?? '' ?><br>
        Gender:
            <input type="radio" name="gender" value="m" <?= $gender == "m" ? 'checked' : '' ?>>Male
            <input type="radio" name="gender" value="f" <?= $gender == "f" ? 'checked' : '' ?>>Female
            <?= $errors['gender'] ?? '' ?><br>
        <input type="checkbox" name="accept" <?= $accept ? 'checked' : '' ?>> Accept EULA: <?= $errors['accept'] ?? '' ?> <br>
        Registration date: <input type="date" name="regdate" value=" <?= $regdate ?>"><br>
        Note: <br><textarea name="notes"><?= $notes ?></textarea><br>
        <button type="submit">Registration</button>
    </form>
    <a href="index.php">Back to Home</a>
</body>
</html>