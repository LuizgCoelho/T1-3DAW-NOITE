// Importando o Supabase 
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://vgunmmzbezrwoccjvowj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZndW5tbXpiZXpyd29jY2p2b3dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5OTc1NDEsImV4cCI6MjA5MDU3MzU0MX0.0rTyqhEIFYYq70TSdlkJsnBWwipulv_O4cI0XJCZVw0';

// Inicializando o cliente
const supabase = createClient(supabaseUrl, supabaseKey);

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-nova-senha");
    const senhaInput = document.getElementById("senha");
    const confirmarSenhaInput = document.getElementById("senha2");

    const eyeIcons = document.querySelectorAll(".eye-icon");
    eyeIcons.forEach((eyeIcon) => {
        eyeIcon.addEventListener("click", (e) => {
            const iconeClicado = e.target;
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

    // LÓGICA DE ATUALIZAÇÃO NO SUPABASE
    form.addEventListener("submit", async function (event) {
        event.preventDefault(); 

        let isValid = true;
        document.getElementById("senha_error").textContent = "";
        document.getElementById("confirmar_senha_error").textContent = "";

        // Validando as regras do projeto
        const senhaForteRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

        if (!senhaForteRegex.test(senhaInput.value)) {
            document.getElementById("senha_error").textContent = "A senha deve ter ao menos 6 caracteres, contendo letras (maiúsculas e minúsculas) e números.";
            isValid = false;
        }

        if (senhaInput.value !== confirmarSenhaInput.value) {
            document.getElementById("confirmar_senha_error").textContent = "As senhas não coincidem.";
            isValid = false;
        }

        if (!isValid) return; // Se a validação falhar, não chama o banco

        // Atualizando a senha no Supabase
        const { data, error } = await supabase.auth.updateUser({
            password: senhaInput.value
        });

        if (error) {
            alert("Erro ao redefinir a senha: " + error.message);
            console.error(error);
        } else {
            alert("Sua senha foi redefinida com sucesso! Você já pode fazer login.");
            window.location.href = "login.php"; // Redireciona para o login
        }
    });
});
