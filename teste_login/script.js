function validarFormulario() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;
    

    if (email.trim() === "") { // Verifica se o campo está vazio
        alert("Por favor, preencha o campo de email.");
        emailInput.focus(); // Coloca o foco no campo de email
        return false; // Impede o envio do formulário
    }

    // Expressão regular para validar o formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Por favor, insira um email válido.");
        emailInput.focus();
        return false; // Impede o envio do formulário
    }

    if (password.length < 6) { // validação para a senha
        alert("A senha deve ter no mínimo 6 caracteres.");
        passwordInput.focus();
        return false;
    }

    return alert("Login Realizado"); // Envia o alerta de login
}