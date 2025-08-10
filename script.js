// Arquivo JavaScript para funcionalidades interativas do site Carolina Resende

// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
            // Adicionar animações após o preloader desaparecer
            document.querySelectorAll('.animate-fade-in, .animate-slide-left, .animate-slide-right').forEach(el => {
                el.classList.add('visible');
            });
        }, 500);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidade de menu mobile com animação suave
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            body.classList.toggle('menu-open'); // Impede rolagem quando menu está aberto
            
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                    mobileMenuToggle.style.transform = 'rotate(90deg)';
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                    mobileMenuToggle.style.transform = 'rotate(0deg)';
                }
            }
        });
    }
    
    // Fechar menu ao clicar em um link ou fora do menu
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                body.classList.remove('menu-open');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                    mobileMenuToggle.style.transform = 'rotate(0deg)';
                }
            }
        });
    });
    
    // Fechar menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(event.target) && 
            !mobileMenuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                mobileMenuToggle.style.transform = 'rotate(0deg)';
            }
        }
    });
    
    // Animações avançadas com IntersectionObserver
    const fadeElements = document.querySelectorAll('.fade-in, .animate-fade-in, .animate-slide-left, .animate-slide-right');
    
    if (fadeElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Adicionar classes de animação para elementos com atraso
                    const children = entry.target.querySelectorAll('[class*="delay-"]');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible');
                        }, 100 * (index + 1));
                    });
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        
        fadeElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // Adicionar efeito de parallax para elementos com classe .parallax
    const parallaxElements = document.querySelectorAll('.parallax');
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.3;
                element.style.transform = `translateY(${scrollY * speed}px)`;
            });
        });
    }
    
    // Funcionalidade de FAQ (toggle)
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const icon = question.querySelector('.faq-toggle i');
                
                // Toggle answer visibility
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                    if (icon) {
                        icon.classList.remove('fa-minus');
                        icon.classList.add('fa-plus');
                    }
                } else {
                    answer.style.display = 'block';
                    if (icon) {
                        icon.classList.remove('fa-plus');
                        icon.classList.add('fa-minus');
                    }
                }
            });
        });
    }
    
    // Formulário de contato com validação
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    
                    // Adicionar mensagem de erro se não existir
                    let errorMsg = field.parentNode.querySelector('.error-message');
                    if (!errorMsg) {
                        errorMsg = document.createElement('div');
                        errorMsg.className = 'error-message';
                        errorMsg.textContent = 'Este campo é obrigatório';
                        errorMsg.style.color = '#631F27';
                        errorMsg.style.fontSize = '0.8rem';
                        errorMsg.style.marginTop = '5px';
                        field.parentNode.appendChild(errorMsg);
                    }
                } else {
                    field.classList.remove('error');
                    const errorMsg = field.parentNode.querySelector('.error-message');
                    if (errorMsg) {
                        errorMsg.remove();
                    }
                }
            });
            
            // Validação de email
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    isValid = false;
                    emailField.classList.add('error');
                    
                    // Adicionar mensagem de erro se não existir
                    let errorMsg = emailField.parentNode.querySelector('.error-message');
                    if (!errorMsg) {
                        errorMsg = document.createElement('div');
                        errorMsg.className = 'error-message';
                        errorMsg.textContent = 'Por favor, insira um email válido';
                        errorMsg.style.color = '#631F27';
                        errorMsg.style.fontSize = '0.8rem';
                        errorMsg.style.marginTop = '5px';
                        emailField.parentNode.appendChild(errorMsg);
                    } else {
                        errorMsg.textContent = 'Por favor, insira um email válido';
                    }
                }
            }
            
            // Se tudo estiver válido, enviar o formulário (simulação)
            if (isValid) {
                // Aqui seria a integração com backend real
                // Por enquanto, apenas simulamos o envio
                
                // Mostrar mensagem de sucesso
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
                successMessage.style.color = '#631F27';
                successMessage.style.padding = '15px';
                successMessage.style.marginTop = '20px';
                successMessage.style.backgroundColor = '#F3ECE5';
                successMessage.style.borderRadius = '4px';
                successMessage.style.textAlign = 'center';
                
                // Inserir mensagem após o formulário
                contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
                
                // Resetar formulário
                contactForm.reset();
                
                // Remover mensagem após 5 segundos
                setTimeout(() => {
                    successMessage.style.opacity = '0';
                    successMessage.style.transition = 'opacity 0.5s ease';
                    setTimeout(() => {
                        successMessage.remove();
                    }, 500);
                }, 5000);
            }
        });
        
        // Remover mensagens de erro quando o usuário começa a digitar
        const formFields = contactForm.querySelectorAll('input, textarea, select');
        formFields.forEach(field => {
            field.addEventListener('input', function() {
                field.classList.remove('error');
                const errorMsg = field.parentNode.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.remove();
                }
            });
        });
    }
    
    // Efeito de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header com efeito de scroll aprimorado
    const header = document.querySelector('header');
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (header) {
        let lastScrollY = window.scrollY;
        let ticking = false;
        
        // Função para otimizar o desempenho do scroll
        function onScroll() {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 50) {
                header.classList.add('scrolled');
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                // Manter o padding consistente para evitar mudanças na altura do cabeçalho
                // header.style.padding = '5px 0';
            } else {
                header.classList.remove('scrolled');
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
                // header.style.padding = '';
            }
            
            // Manter o header sempre visível, independente da direção da rolagem
            header.style.transform = 'translateY(0)';
            
            // Mostrar/ocultar botão voltar ao topo
            if (backToTopBtn) {
                if (currentScrollY > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            }
            
            lastScrollY = currentScrollY;
            ticking = false;
        }
        
        // Otimização de desempenho com requestAnimationFrame
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(onScroll);
                ticking = true;
            }
        });
    }
    
    // Funcionalidade do botão voltar ao topo
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Substituir placeholders de imagens por imagens reais
    const logoPlaceholder = document.getElementById('logo-placeholder');
    if (logoPlaceholder) {
        logoPlaceholder.src = 'assets/logo.png';
        logoPlaceholder.style.display = 'block';
    }
    
    // Substituir outros placeholders de imagens
    const imagePlaceholders = document.querySelectorAll('[id^="image-placeholder"]');
    const imageMap = {
        'image-placeholder-1': 'transformacao.jpg',
        'image-placeholder-2': 'missao.jpg',
        'image-placeholder-3': 'abordagem.jpg',
        'formacao': 'formacao.jpg',
        'mentoria': 'mentoria.jpg',
        'consultoria': 'consultoria.jpg',
        'lideres': 'lideres.jpg',
        'profissionais': 'profissionais.jpg',
        'empresas': 'empresas.jpg'
    };
    
    imagePlaceholders.forEach(img => {
        const id = img.id;
        if (imageMap[id]) {
            img.src = 'assets/' + imageMap[id];
            img.style.width = '100%';
            img.style.height = 'auto';
            img.style.borderRadius = 'var(--borda-radius)';
            img.style.boxShadow = 'var(--sombra-suave)';
        }
    });
});
