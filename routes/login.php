<?php

require_once('../db/dbconfig.php');
require_once('../models/User.php');

$userDAO = new UserDAOSQL($pdo);

$email = filter_input(INPUT_POST, 'email-log', FILTER_SANITIZE_EMAIL);
$pass = filter_input(INPUT_POST, 'pass-log');

$userLog = $userDAO->findByEmail($email);

if ($email && $pass && $userLog !== false) {
    $pass_comp = password_verify($pass, $userLog->getPass());
    if ($pass_comp == true) {
        echo 'Logado';
    } else {
        echo 'Senha incorreta';
    }
} else {
    echo 'Ihh';
    // exit;
}
