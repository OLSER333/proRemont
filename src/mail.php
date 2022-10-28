<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // if (isset($_POST['imya'])) {$imya = $_POST['imya'];}
    // if (isset($_POST['phones'])) {$phones = $_POST['phones'];}
    $array=json_decode($_POST['data']);
    $to = "gritsienko.oleg@mail.ru"; /*Укажите ваш адрес электронной почты info-niks@yandex.ru*/
    $headers = "Content-type: text/plain; charset = utf-8";
    $subject = "Заявка с сайта nvrsk-proremont";
    // $message = "Заявка с сайта ROUTE96 \n\nИмя: $imya \n\nТелефон: $phones";
    $send = mail ($to, $subject, $array, $headers);
    if ($send == 'true')
    {
    echo "<center style='color:black;'>Спасибо, ваша заявка принята в обработку! Наш оператор свяжется с вами в близжайшее время.</center>";
    }
    else 
    {
    echo "<center><b>Ошибка. Сообщение не отправлено!</b></center>";
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>
