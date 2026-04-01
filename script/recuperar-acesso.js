// Importando o Supabase 
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://vgunmmzbezrwoccjvowj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZndW5tbXpiZXpyd29jY2p2b3dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5OTc1NDEsImV4cCI6MjA5MDU3MzU0MX0.0rTyqhEIFYYq70TSdlkJsnBWwipulv_O4cI0XJCZVw0';

const supabase = createClient(supabaseUrl, supabaseKey);

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-recuperar");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); 

        const emailDigitado = document.getElementById("email").value;

        // Dispara o e-mail de recuperação pelo Supabase
        const { data, error } = await supabase.auth.resetPasswordForEmail(emailDigitado, {
            redirectTo: 'http://localhost:8080/trab3daw/pages/nova-senha.php',
        });

        if (error) {
            alert("Erro ao enviar e-mail: " + error.message);
            console.error(error);
        } else {
            alert("Se este e-mail estiver cadastrado, você receberá um link de recuperação em instantes.");
            document.getElementById("email").value = "";
        }
    });
});
