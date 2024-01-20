<?php
// Подключение к базе данных MySQL
$servername = "127.0.0.1";
$username = "root";
$password = "12345678";
$database = "BonaFide55";

$conn = mysqli_connect($servername, $username, $password, $database);

// Проверка соединения с базой данных
if (!$conn) {
    die("Ошибка соединения: " . mysqli_connect_error());
}

// Выполнение SQL запроса для получения данных
$sql = "SELECT * FROM products";
$result = mysqli_query($conn, $sql);

// Проверка наличия данных в результате запроса
if (mysqli_num_rows($result) > 0) {
    // Вывод данных из базы данных на сайт
    while ($row = mysqli_fetch_assoc($result)) {
        echo "ID: " . $row["id"]. " - Имя: " . $row["имя"]. " - Возраст: " . $row["возраст"]. "<br>";
    }
} else {
    echo "Нет данных для отображения.";
}

// Закрытие соединения с базой данных
mysqli_close($conn);
?>
