<?php

$phone = $_POST['phone'];
$token = "2042507060:AAHHClftMrDZ6IcouIru7rwI2HTdZo_vco0";
$chat_id = "749870718";
$arr = array(
    'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram && $sendToTelegram2) {
    header('Location: thanks.html');
} else {
    echo "Error";
}

?>