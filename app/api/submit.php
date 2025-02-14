<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$host = 'localhost';
$db   = 'personal_site';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
    
    $data = json_decode(file_get_contents("php://input"), true);
    
    $stmt = $pdo->prepare("INSERT INTO shop_requests 
        (name, email, item, description, budget) 
        VALUES (:name, :email, :item, :description, :budget)");
    
    $result = $stmt->execute([
        ':name' => $data['name'],
        ':email' => $data['email'],
        ':item' => $data['item'],
        ':description' => $data['description'],
        ':budget' => $data['budget']
    ]);
    
    echo json_encode([
        "success" => $result,
        "message" => $result ? "Request submitted successfully" : "Failed to submit request"
    ]);
} catch (\PDOException $e) {
    echo json_encode([
        "success" => false,
        "message" => "Database error: " . $e->getMessage()
    ]);
}
?>