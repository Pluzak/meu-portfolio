document.addEventListener('DOMContentLoaded', function() {
    // Botão para projeto
    const btnMinhaLoja = document.getElementById('btn-minha-loja');
    if (btnMinhaLoja) {
        btnMinhaLoja.addEventListener('click', function() {
            window.open('https://pluzak.github.io/minha-loja', '_blank');
        });
    }

    // Menu ativo
    const links = document.querySelectorAll('.menu a');
    const currentPage = window.location.pathname.split('/').pop();

    links.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // Validação do Formulário de Contato
    const formContato = document.getElementById('form-contato');
    if (formContato) {
        formContato.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            const nome = formContato.querySelector('input[name="name"]').value.trim();
            const email = formContato.querySelector('input[name="email"]').value.trim();
            const mensagem = formContato.querySelector('textarea[name="message"]').value.trim();

            // Expressão regular simples para validação de e-mail
            const emailRegex = /^[^
@]+@[^
@]+\.[^
@]+$/;

            if (nome === '') {
                alert('Por favor, preencha seu nome.');
                return;
            }

            if (email === '') {
                alert('Por favor, preencha seu e-mail.');
                return;
            }

            if (!emailRegex.test(email)) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }

            if (mensagem === '') {
                alert('Por favor, preencha sua mensagem.');
                return;
            }

            // Se tudo estiver válido, o formulário pode ser enviado
            // O Formspree cuidará do envio após esta validação
            formContato.submit();
            alert('Mensagem enviada com sucesso!'); // Feedback para o usuário
            formContato.reset(); // Limpa o formulário
        });
    }
});
