<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nova Senha - EcoEscambo</title>
    <link rel="stylesheet" href="../css/style1.css">
    <link rel="stylesheet" href="../css/cadastro.css" />
</head>

<body>
    <div class="container">
        <div class="logo">
            <a href="login.php">
                <img src="../img/logo.png" alt="Logo EcoEscambo" />
            </a>
        </div>

        <h2>Criar nova senha</h2>
        <p style="text-align: center; color: #555; margin-bottom: 20px; font-size: 14px;">
            Digite sua nova senha abaixo. Ela deve conter letras (maiúsculas e minúsculas), números e no mínimo 6
            caracteres.
        </p>

        <form id="form-nova-senha">
            <label for="senha">Nova Senha</label>
            <div class="password-field">
                <input type="password" id="senha" name="senha" required />
                <img src="https://img.icons8.com/ios-glyphs/30/000000/invisible.png" class="eye-icon"
                    alt="Mostrar senha" />
            </div>
            <span class="error" id="senha_error"
                style="display: block; min-height: 15px; color: red; font-size: 12px; margin-bottom: 10px;"></span>

            <label for="senha2">Repita a Nova Senha</label>
            <div class="password-field">
                <input type="password" id="senha2" name="confirmar_senha" required />
                <img src="https://img.icons8.com/ios-glyphs/30/000000/invisible.png" class="eye-icon"
                    alt="Mostrar senha" />
            </div>
            <span class="error" id="confirmar_senha_error"
                style="display: block; min-height: 15px; color: red; font-size: 12px; margin-bottom: 10px;"></span>

            <button class="btn" type="submit">Redefinir Senha</button>
        </form>
    </div>

    <script type="module" src="../script/nova-senha.js"></script>
</body>

</html>