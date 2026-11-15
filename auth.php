<?php
// Include this at the top of every page that needs a logged-in user.
require_once __DIR__ . '/helpers.php';
if (empty($_SESSION['user'])) {
    header('Location: login.php');
    exit;
}
