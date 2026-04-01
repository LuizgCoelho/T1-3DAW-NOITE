<?php
// filepath: c:\Programacao\T1-3DAW-NOITE\pages\cadastro.php
session_start();
?>
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cadastro - EcoEscambo</title>
  <link rel="stylesheet" href="../css/style1.css">
  <link rel="stylesheet" href="../css/cadastro.css" />
</head>

<body>
  <div class="container">
    <div class="logo">
      <a href="#">
        <img src="../img/logo.png" alt="Logo EcoEscambo" />
      </a>
    </div>

    <h2>Cadastro</h2>
    <form id="form-cadastro">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />
      <span class="error" id="email_error" style="display: block; min-height: 15px;"></span>

      <label for="nome">Nome</label>
      <input type="text" id="nome" name="nome" required />

      <label for="senha">Senha</label>
      <div class="password-field">
        <input type="password" id="senha" name="senha" required />
        <img src="https://img.icons8.com/ios-glyphs/30/000000/invisible.png" class="eye-icon" alt="Mostrar senha" />
      </div>
      <span class="error" id="senha_error" style="display: block; min-height: 15px;"></span>

      <label for="senha2">Repita a senha</label>
      <div class="password-field">
        <input type="password" id="senha2" name="confirmar_senha" required />
        <img src="https://img.icons8.com/ios-glyphs/30/000000/invisible.png" class="eye-icon" alt="Mostrar senha" />
      </div>
      <span class="error" id="confirmar_senha_error" style="display: block; min-height: 15px;"></span>

      <button class="btn" type="submit">Cadastrar</button>
    </form>

    <div class="divider"></div>

    <div class="bottom-text">
      Já é usuário? <a href="login.php">Entrar</a>
    </div>
  </div>

  <script type="module" src="../script/cadastro.js"></script>
</body>

</html>