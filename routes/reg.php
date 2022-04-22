<?php

require_once('../db/dbconfig.php');
require_once('../models/User.php');

$userDAO = new UserDAOSQL($pdo);

$email = filter_input(INPUT_POST, 'email-reg', FILTER_SANITIZE_EMAIL);
$pass = filter_input(INPUT_POST, 'pass-reg');
$pass_conf = filter_input(INPUT_POST, 'pass-conf-reg');
$hash = password_hash($pass, PASSWORD_DEFAULT);

if ($email && $pass && $pass == $pass_conf) {
    if ($userDAO->findByEmail($email) === false) {
        $newUser = new User();
        $newUser->setEmail($email);
        $newUser->setPass($hash);

        $userDAO->add($newUser);

        echo 'Adicionado';
    } else {
        echo 'Usuário já registrado';
    }
} else {
    header('Location: ../index.html');
    exit;
}
