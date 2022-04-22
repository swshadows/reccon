<?php

class User {
    private $id;
    private $email;
    private $pass;

    public function getId() {
        return $this->id;
    }
    public function getEmail() {
        return $this->email;
    }
    public function getPass() {
        return $this->pass;
    }

    public function setId($id) {
        $this->id = $id;
    }
    public function setEmail($email) {
        $this->email = $email;
    }
    public function setPass($pass) {
        $this->pass = $pass;
    }
}

class UserDAOSQL {
    private $pdo;

    public function __construct(PDO $driver) {
        $this->pdo = $driver;
    }

    public function add(User $u) {
        $sql = $this->pdo->prepare('INSERT INTO users(email, password) VALUES (:email, :password)');
        $sql->bindValue(':email', $u->getEmail());
        $sql->bindValue(':password', $u->getPass());
        $sql->execute();

        $u->setId($this->pdo->lastInsertId());
        return $u;
    }

    public function findByEmail($email) {
        $sql = $this->pdo->prepare('SELECT * FROM users WHERE email = :email');
        $sql->bindValue(':email', $email);
        $sql->execute();

        if ($sql->rowCount() > 0) {
            $data = $sql->fetch();

            $u = new User();
            $u->setId($data['id']);
            $u->setEmail($data['email']);
            $u->setPass($data['password']);
            return $u;
        } else {
            return false;
        }
    }
}
