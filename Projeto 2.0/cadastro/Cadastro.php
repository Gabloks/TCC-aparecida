<?php
 include("conexão.php");

        $nome = $_POST['nome'];
        $sobrenome = $_POST['sobrenome'];
        $email = $_POST['email'];
        $senha = $_POST['senha'];
        $confirmesenha= $_POST['confirmesenha'];
        

        $sql = "INSERT INTO usuarios(nome,email,) 
        VALUES('$nome','$email','$telefone','$sexo','$data_nasc','$cidade','$estado','$endereco')";
    
if(mysqli_query($conexao, $sql)){
    echo "Usuario cadastrado com sucesso";
}
else{
    echo "Erro".mysqli_connect_error($conexao);
}
    mysqli_close($conexao);
?>
