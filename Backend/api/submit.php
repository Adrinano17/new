<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

require_once '../config/database.php';

$response = ['success' => false, 'message' => ''];

try {
    $data = json_decode(file_get_contents('php://input'), true);

    $stmt = $pdo->prepare("INSERT INTO shop_requests (name, email, item, description, budget) VALUES (?, ?, ?, ?, ?)");
    $result = $stmt->execute([
        $data['name'], 
        $data['email'], 
        $data['item'], 
        $data['description'], 
        $data['budget']
    ]);

    if ($result) {
        $response['success'] = true;
        $response['message'] = 'Request submitted successfully';
    } else {
        $response['message'] = 'Failed to submit request';
    }
} catch (PDOException $e) {
    $response['message'] = 'Database error: ' . $e->getMessage();
}

echo json_encode($response);
?>