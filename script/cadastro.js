// 1. Importando o Supabase (usando as chaves que você já passou)
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://vgunmmzbezrwoccjvowj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZndW5tbXpiZXpyd29jY2p2b3dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5OTc1NDEsImV4cCI6MjA5MDU3MzU0MX0.0rTyqhEIFYYq70TSdlkJsnBWwipulv_O4cI0XJCZVw0';
const supabase = createClient(supabaseUrl, supabaseKey);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const nomeInput = document.getElementById("nome");
  const senhaInput = document.getElementById("senha");
  const confirmarSenhaInput = document.getElementById("senha2");
  const eyeIcons = document.querySelectorAll(".eye-icon");

  // Função para mostrar/esconder senha (MANTIDA)

  eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", (e) => {
      // Pega exatamente a imagem que foi clicada
      const iconeClicado = e.target;

      // Pega o elemento que vem imediatamente antes do ícone no seu HTML (o input)
      const input = iconeClicado.previousElementSibling;

      if (input && input.tagName === 'INPUT') {
        if (input.type === "password") {
          input.type = "text";
          iconeClicado.src = "https://img.icons8.com/ios-glyphs/30/000000/visible.png";
        } else {
          input.type = "password";
          iconeClicado.src = "https://img.icons8.com/ios-glyphs/30/000000/invisible.png";
        }
      }
    });
  });

  // Validação e Envio para o Supabase
  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Impede o recarregamento da página

    let isValid = true;

    // Resetando as mensagens de erro na tela
    document.getElementById("email_error").textContent = "";
    document.getElementById("senha_error").textContent = "";
    document.getElementById("confirmar_senha_error").textContent = "";

    // Validação da Senha (Regras do projeto)
    // Regex: pelo menos 1 minúscula, 1 maiúscula, 1 número e no mínimo 6 caracteres
    const senhaForteRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!senhaForteRegex.test(senhaInput.value)) {
      document.getElementById("senha_error").textContent = "A senha deve ter ao menos 6 caracteres, contendo letras (maiúsculas e minúsculas) e números.";
      isValid = false;
    }

    if (senhaInput.value !== confirmarSenhaInput.value) {
      document.getElementById("confirmar_senha_error").textContent = "As senhas não coincidem.";
      isValid = false;
    }

    // Se falhar na validação, para a execução aqui e não chama o banco
    if (!isValid) return;

    // 2. Tentar cadastrar no Supabase
    const { data, error } = await supabase.auth.signUp({
      email: emailInput.value,
      password: senhaInput.value,
    });

    if (error) {
      alert("Erro ao criar conta: " + error.message);
      console.error(error);
    } else {
      // 3. Salvar o Nome na tabela pública 'perfis' que criamos na modelagem
      if (data.user) {
        const { error: profileError } = await supabase
          .from('perfis')
          .insert([
            { id: data.user.id, nome: nomeInput.value, email: emailInput.value }
          ]);

        if (profileError) {
          console.error("Erro ao salvar o nome no perfil:", profileError);
        }
      }

      // Sucesso!
      alert("Cadastro realizado com sucesso! Faça login para continuar.");
      window.location.href = "login.php";
    }
  });
});