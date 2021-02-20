<?php
if ( !empty( $_POST[ 'f_name' ] ) && !empty( $_POST[ 'l_name' ] ) && !empty( $_POST[ 'email' ] ) && !empty( $_POST[ 'phone' ] )&& !empty( $_POST[ 'message' ] ) ) {
    $asunto = "Consulta de producto o Servicio";
    $msg = "Cliente: ".$_POST[ 'f_name' ]." ".$_POST[ 'l_name' ]."\r\n";
    $msg .= "Contacto: ".$_POST[ 'phone' ]."\r\n";
    $msg .= "Correo: ".$_POST[ 'email' ]."\r\n";
    $msg .= $_POST[ 'message' ];
    $email = "sublimacionesytecnologiasfenix@gmail.com";
    $header = "From: consultas@sublitef.com" . "\r\n";
    $header .= "Reply-To: consultas@sublitef.com" . "\r\n";
    $header .= "X-Mailer: PHP/" . phpversion();
    $mail = @mail( $email, $asunto, $msg, $header );
  }
?>