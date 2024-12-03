<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "MysteryShack-DB";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Получение информации о товарах
$sql = "SELECT * FROM products";
$result = $conn->query($sql);

$products = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
}

$conn->close();

// Вывод информации о товарах в формате JSON
header('Content-Type: application/json');
echo json_encode($products);
?>