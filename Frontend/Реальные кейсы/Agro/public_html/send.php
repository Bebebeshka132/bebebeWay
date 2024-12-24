<?php
    require_once 'assets/PHPMailer/Exception.php';
    require_once 'assets/PHPMailer/PHPMailer.php';
    require_once 'assets/PHPMailer/SMTP.php';
    if(!empty($_POST)){
        $form_type = $_POST['form_type'];
        if($form_type == 'hero_order'){
            $title = htmlspecialchars($_POST["title"]);
            $phone = htmlspecialchars($_POST["phone"]);
        }else if($form_type == 'call_back_order'){
            $title = htmlspecialchars($_POST["title"]);
            $phone = htmlspecialchars($_POST["phone"]);
            $name = htmlspecialchars($_POST["name"]);
            $email = htmlspecialchars($_POST["email"]);
        }else if($form_type == 'modal_order'){
            $title = htmlspecialchars($_POST["title"]);
            $phone = htmlspecialchars($_POST["phone"]);
            $name = htmlspecialchars($_POST["name"]);
            $email = htmlspecialchars($_POST["email"]);
        }
    };
    
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';

try {
    //Server settings
    $mail->SMTPDebug = false;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.timeweb.ru';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'order@h729.ru';                     //SMTP username
    $mail->Password   = '6rDvz5Sn';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('order@h729.ru', '注意力！新命令！');
    $mail->addAddress('order@h729.ru');     //Add a recipient
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

//    //Attachments
//    $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
//    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Проверка';
    if($form_type == 'hero_order'){     
        $mail ->Body = "
        <style>
        table,tr,td{
            border: 1px solid #333;
            border-collapse: collapse;
            font-family: monospace;
        }
        td{
            padding: 15px;
        }
    </style>
       <table>
            <thead>
                <th colspan='2'>
                    ОРДЕР ФОРМА НА ПЕРВОЙ СТРАНИЦЕ
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>Номер телефона</td>
                    <td>{$phone}</td>
                </tr>
                <tr>
                    <td>Текст</td>
                    <td>{$title}</td>
                </tr>
       </table> 
        ";
    }else if($form_type == 'call_back_order'){
        $mail-> Body = "
        <style>
        table,tr,td{
            border: 1px solid #333;
            border-collapse: collapse;
            font-family: monospace;
        };
        td{
            padding: 15px;
        }
    </style>
       <table>
       <thead>
            <th colspan='2'>
                ОРДЕР ФОРМА В КОНЦЕ
            </th>
            </thead>
            <tbody>
                <tr>
                    <td>Номер телефона</td>
                    <td>{$phone}</td>
                </tr>
                <tr>
                    <td>Текст</td>
                    <td>{$title}</td>
                </tr>
                <tr>
                    <td>Почта</td>
                    <td>{$email}</td>
                </tr>
                <tr>
                    <td>Имя</td>
                    <td>{$name}</td>
                </tr>
       </table>
        ";
    }else if($form_type == 'modal_order'){
        $mail-> Body = "
        <style>
        table,tr,td{
            border: 1px solid #333;
            border-collapse: collapse;
            font-family: monospace;
        };
        td{
            padding: 15px;
        }
    </style>
       <table>
       <thead>
            <th colspan='2'>
                МОДАЛКА
            </th>
            </thead>
            <tbody>
                <tr>
                    <td>Номер телефона</td>
                    <td>{$phone}</td>
                </tr>
                <tr>
                    <td>Текст</td>
                    <td>{$title}</td>
                </tr>
                <tr>
                    <td>Почта</td>
                    <td>{$email}</td>
                </tr>
                <tr>
                    <td>Имя</td>
                    <td>{$name}</td>
                </tr>
       </table>
        ";
    };
    $mail->AltBody = 'ПРОВЕРКА';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

