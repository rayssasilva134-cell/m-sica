document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formContato");
    const resposta = document.getElementById("resposta");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const telefoneValido = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(telefone);

        if (!emailValido) {
            resposta.textContent = "Por favor, insira um e-mail válido.";
            resposta.style.color = "red";
            return;
        }

        if (!telefoneValido) {
            resposta.textContent = "Por favor, insira um telefone válido (ex: (11) 98765-4321).";
            resposta.style.color = "red";
            return;
        }

        resposta.textContent = "Mensagem enviada com sucesso! 🎶";
        resposta.style.color = "green";
        form.reset();
    });
});
