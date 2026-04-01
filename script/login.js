// Importando o Supabase 
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://vgunmmzbezrwoccjvowj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZndW5tbXpiZXpyd29jY2p2b3dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5OTc1NDEsImV4cCI6MjA5MDU3MzU0MX0.0rTyqhEIFYYq70TSdlkJsnBWwipulv_O4cI0XJCZVw0';

// Inicializando o cliente
const supabase = createClient(supabaseUrl, supabaseKey);

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    // 1. LÓGICA DO OLHINHO (MOSTRAR/ESCONDER SENHA)
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

    // 2. LÓGICA DE LOGIN NO SUPABASE
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Capturar os valores digitados 
        const emailDigitado = document.getElementById("email").value;
        const senhaDigitada = document.getElementById("senha").value;

        // Tentar fazer o login no Supabase
        const { data, error } = await supabase.auth.signInWithPassword({
            email: emailDigitado,
            password: senhaDigitada,
        });

        // Lidar com o resultado
        if (error) {
            alert("Erro ao fazer login: " + error.message);
            console.error(error);
        } else {
            console.log("Login efetuado com sucesso!", data);
            // Redirecionamento
            window.location.href = "catalogo.php";
        }
    });
});