<?php

if (isset($_POST['name'])) {$name = $_POST['name'];} //проверка на существовани¤ <input type="text" name="name">
if (isset($_POST['email'])) {$email = $_POST['email'];} //проверка на существование <input type="text" name="email">
if (isset($_POST['message'])) {$message = $_POST['message'];} //проверка на существовани¤ <input type="text" name="message">


$address = "ann.novikova1993@gmail.com"; //то куда приходит письмо

$sub = "Это сообщение с моего сайта novikova"; //тема письма

$mes = "Автор указал такое имя: $name \n вставил такой E-mail: $email \n содержание письма: \n $message"; //содержание письма

$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8rnFrom:$email");
if ($send == 'true')
{
echo "Message was sent successfully!";
}
else 
{
echo "Message was sent successfully!";
}
?>