document.addEventListener('DOMContentLoaded', function () {

    // 1. Ativa o scrollspy do Bootstrap para atualizar a navegação ao rolar
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#navbar',
      offset: 100 // Ajuste para a altura da sua navbar
    });

    // 2. Muda o fundo da navbar ao rolar a página
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // 3. Anima elementos quando eles aparecem na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // O elemento é considerado visível com 10% de sua área na tela
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

    // 4. Funcionalidade do botão "Voltar ao Topo"
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 5. Validação simples do formulário de contato
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Por favor, preencha todos os campos do formulário.');
        } else {
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset(); // Limpa o formulário após o envio
        }
    });
});