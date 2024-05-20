<?php
// Kullanıcı bilgilerini tanımlayın
$correct_email = "g231210005@sakarya.edu.tr";
$correct_password = "g231210005";

// Formdan gelen verileri alın
$email = isset($_POST['email']) ? $_POST['email'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

// Boş alan kontrolü
if (empty($email) || empty($password)) {
    echo "Kullanıcı adı ve şifre alanları boş geçilemez. <a href='giriş.html'>Geri Dön</a>";
    exit();
}

// Kullanıcı adı (email) kontrolü
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Geçerli bir e-posta adresi giriniz. <a href='giriş.html'>Geri Dön</a>";
    exit();
}

// Kullanıcı bilgilerini doğrulama
if ($email === $correct_email && $password === $correct_password) {
    echo "Hoş geldiniz g231210005";
    
    // Başarılı girişleri kaydetme
    $log = "Email: " . $email . " - Tarih: " . date('Y-m-d H:i:s') . "\n";
    file_put_contents('log.txt', $log, FILE_APPEND);
} else {
    echo "Kullanıcı adı veya şifre hatalı. <a href='giriş.html'>Geri Dön</a>";
}
?>
