<?php
$host= 'localhost';
$bd='invitados';
$user='postgres';
$pass='3217';

$conexion=pg_connect("host=$host dbname=$bd user=$user password=$pass");

$query=("INSERT INTO  confirmaciones_de_invitados(Nombre, Apellido, Confirmacion) 
VALUES ( '_REQUEST[Nombre]', '_REQUEST[Apellido]', '_REQUEST[Confirmacion]')")

$consulta=pg_query($conexion, $query);
pg_close();

?>