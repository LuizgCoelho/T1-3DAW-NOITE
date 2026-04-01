<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login - EcoEscambo</title>
  <link rel="stylesheet" href="../css/style1.css">
</head>

<body>
  <div class="container">
    <div class="logo">
      <a href="cadastro.php">
        <img src="../img/logo.png" alt="Logo EcoEscambo" />
      </a>
    </div>
    <h2>Login</h2>
    <form id="form-login">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label for="senha">Senha</label>
      <div class="password-field">
        <input type="password" id="senha" name="senha" required />
        <img src="https://img.icons8.com/ios-glyphs/30/000000/invisible.png" class="eye-icon" alt="Mostrar senha" />
      </div>

      <button class="btn" type="submit">
        Entrar
      </button>
    </form>

    <div class="extra-links">
      <a href="recuperar-acesso.php">Esqueceu a senha?</a>
    </div>

    <div class="divider"></div>

    <div class="bottom-text">
      Ainda não é usuário? <a href="cadastro.php">Cadastre-se</a>
    </div>
  </div>
  <script type="module" src="../script/login.js"></script>
</body>

</html>