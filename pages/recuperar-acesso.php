<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Recuperar Acesso - EcoEscambo</title>
  <link rel="stylesheet" href="../css/style1.css">
</head>

<body>
  <div class="container">
    <div class="logo">
      <a href="cadastro.php">
        <img src="../img/logo.png" alt="Logo EcoEscambo" />
      </a>
    </div>

    <h2>Recuperar acesso</h2>
    <form id="form-recuperar">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />
      <button class="btn" type="submit">Recuperar acesso</button>
    </form>

    <div class="extra-links">
      <a href="login.php">Voltar</a>
    </div>

    <div class="divider"></div>

    <div class="bottom-text">
      Ainda não é usuário? <a href="cadastro.php">Cadastre-se</a>
    </div>
  </div>

  <script type="module" src="../script/recuperar-acesso.js"></script>
</body>

</html>