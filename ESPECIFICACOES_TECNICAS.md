# ESPECIFICAÇÕES TÉCNICAS
## Padrões de Código e Convenções

**Versão:** 1.0.0  
**Data de Criação:** Janeiro 2025  
**Projeto:** Site Carolina Resende - Liderança Inteligente  

---

## 📋 ÍNDICE

1. [Padrões de Código](#padrões-de-código)
2. [Convenções de Nomenclatura](#convenções-de-nomenclatura)
3. [Estrutura de Arquivos](#estrutura-de-arquivos)
4. [Padrões CSS](#padrões-css)
5. [Padrões JavaScript](#padrões-javascript)
6. [Padrões HTML](#padrões-html)
7. [Sistema de Grid](#sistema-de-grid)
8. [Sistema de Cores](#sistema-de-cores)
9. [Sistema de Tipografia](#sistema-de-tipografia)
10. [Sistema de Espaçamento](#sistema-de-espaçamento)
11. [Sistema de Animações](#sistema-de-animações)
12. [Sistema de Breakpoints](#sistema-de-breakpoints)
13. [Padrões de Acessibilidade](#padrões-de-acessibilidade)
14. [Padrões de Performance](#padrões-de-performance)
15. [Guia de Manutenção](#guia-de-manutenção)

---

## 🎯 PADRÕES DE CÓDIGO

### Princípios Gerais
- **Simplicidade**: Código limpo e fácil de entender
- **Consistência**: Padrões uniformes em todo o projeto
- **Manutenibilidade**: Estrutura que facilita futuras modificações
- **Performance**: Otimizações para velocidade e eficiência
- **Acessibilidade**: Conformidade com padrões WCAG

### Estrutura de Comentários
```html
<!-- ================================================= -->
<!-- SEÇÃO: Nome da Seção                              -->
<!-- ================================================= -->

<!-- Comentário de linha única -->

<!-- 
  Comentário de múltiplas linhas
  para explicações complexas
-->
```

```css
/* ================================================= */
/* SEÇÃO: Nome da Seção                              */
/* ================================================= */

/* Comentário de linha única */

/* 
  Comentário de múltiplas linhas
  para explicações complexas
*/
```

```javascript
// =================================================
// SEÇÃO: Nome da Seção
// =================================================

// Comentário de linha única

/*
  Comentário de múltiplas linhas
  para explicações complexas
*/
```

---

## 🏷️ CONVENÇÕES DE NOMENCLATURA

### Classes CSS
- **BEM (Block Element Modifier)**: `.block__element--modifier`
- **Kebab-case**: Todas as classes em minúsculas com hífens
- **Semânticas**: Nomes que descrevem a função, não a aparência

#### Exemplos de Classes
```css
/* ✅ CORRETO */
.card
.card__title
.card__title--large
.navigation
.navigation__item
.navigation__item--active

/* ❌ INCORRETO */
.Card
.cardTitle
.cardTitleLarge
.nav
.navItem
.navItemActive
```

### IDs
- **Camel Case**: `camelCase` para IDs únicos
- **Semânticos**: Nomes que descrevem a função
- **Prefixo**: Usar prefixos quando apropriado

#### Exemplos de IDs
```html
<!-- ✅ CORRETO -->
<div id="contactForm">
<div id="mobileMenu">
<div id="backToTop">

<!-- ❌ INCORRETO -->
<div id="contact-form">
<div id="mobile-menu">
<div id="back-to-top">
```

### Variáveis CSS
- **Kebab-case**: Todas as variáveis em minúsculas com hífens
- **Prefixo**: Usar `--` para variáveis CSS customizadas
- **Agrupamento**: Organizar por categoria

#### Exemplos de Variáveis
```css
:root {
  /* Cores */
  --cor-primaria: #0E5BA0;
  --cor-secundaria: #52AACC;
  
  /* Tipografia */
  --fonte-titulos: 'AtypDisplay', serif;
  --fonte-corpo: 'Poppins', sans-serif;
  
  /* Espaçamento */
  --espacamento-pequeno: 0.5rem;
  --espacamento-medio: 1rem;
}
```

---

## 📁 ESTRUTURA DE ARQUIVOS

### Organização de Diretórios
```
assets/
├── fonts/           # Fontes personalizadas
├── images/          # Imagens do site
└── icons/           # Ícones e elementos gráficos

public/
├── data/            # Dados estáticos
└── images/          # Imagens públicas

PHPMailer/           # Biblioteca de email
├── Exception.php
├── PHPMailer.php
└── SMTP.php
```

### Nomenclatura de Arquivos
- **HTML**: `nome-pagina.html` (kebab-case)
- **CSS**: `styles.css` (singular, descritivo)
- **JavaScript**: `script.js` (singular, descritivo)
- **Imagens**: `nome-descritivo.extensao`
- **Fontes**: `NomeFonte-Regular.extensao`

---

## 🎨 PADRÕES CSS

### Estrutura de Arquivo CSS
```css
/* ================================================= */
/* IMPORTS E CONFIGURAÇÕES                          */
/* ================================================= */

/* ================================================= */
/* VARIÁVEIS CSS                                     */
/* ================================================= */

/* ================================================= */
/* RESET E BASE                                      */
/* ================================================= */

/* ================================================= */
/* TIPOGRAFIA                                        */
/* ================================================= */

/* ================================================= */
/* LAYOUT E GRID                                     */
/* ================================================= */

/* ================================================= */
/* COMPONENTES                                       */
/* ================================================= */

/* ================================================= */
/* UTILITÁRIOS                                       */
/* ================================================= */

/* ================================================= */
/* MEDIA QUERIES                                     */
/* ================================================= */

/* ================================================= */
/* ANIMAÇÕES                                         */
/* ================================================= */
```

### Seletores CSS
- **Especificidade**: Manter baixa especificidade
- **Aninhamento**: Máximo de 3 níveis
- **Performance**: Evitar seletores muito específicos

#### Exemplos de Seletores
```css
/* ✅ CORRETO - Baixa especificidade */
.card { }
.card__title { }
.card__title--large { }

/* ❌ INCORRETO - Alta especificidade */
body div.container .card .card__title { }
```

### Media Queries
- **Mobile-First**: Começar com estilos mobile
- **Breakpoints**: Usar variáveis para breakpoints
- **Organização**: Agrupar por componente

#### Estrutura de Media Queries
```css
/* Base (Mobile First) */
.component { }

/* Small devices (576px and up) */
@media (min-width: 576px) {
  .component { }
}

/* Medium devices (768px and up) */
@media (min-width: 768px) {
  .component { }
}

/* Large devices (992px and up) */
@media (min-width: 992px) {
  .component { }
}
```

---

## ⚡ PADRÕES JAVASCRIPT

### Estrutura de Arquivo JavaScript
```javascript
// =================================================
// IMPORTS E CONFIGURAÇÕES
// =================================================

// =================================================
// VARIÁVEIS GLOBAIS
// =================================================

// =================================================
// FUNÇÕES UTILITÁRIAS
// =================================================

// =================================================
// FUNCIONALIDADES PRINCIPAIS
// =================================================

// =================================================
// EVENT LISTENERS
// =================================================

// =================================================
// INICIALIZAÇÃO
// =================================================
```

### Convenções de Nomenclatura
- **Funções**: `camelCase` para nomes de funções
- **Variáveis**: `camelCase` para variáveis
- **Constantes**: `UPPER_SNAKE_CASE` para constantes
- **Classes**: `PascalCase` para classes (se aplicável)

#### Exemplos de Nomenclatura
```javascript
// ✅ CORRETO
function toggleMobileMenu() { }
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const ANIMATION_DURATION = 300;

// ❌ INCORRETO
function toggle_mobile_menu() { }
const mobile_menu_btn = document.querySelector('.mobile-menu-btn');
const animationDuration = 300;
```

### Estrutura de Funções
```javascript
// Função com documentação clara
function functionName(param1, param2) {
  // Validação de parâmetros
  if (!param1 || !param2) {
    console.error('Parâmetros inválidos');
    return;
  }
  
  // Lógica principal
  const result = processData(param1, param2);
  
  // Retorno
  return result;
}
```

### Event Listeners
```javascript
// ✅ CORRETO - Event delegation quando apropriado
document.addEventListener('click', (e) => {
  if (e.target.matches('.btn')) {
    handleButtonClick(e.target);
  }
});

// ✅ CORRETO - Event listener específico
const button = document.querySelector('.btn');
button.addEventListener('click', handleButtonClick);

// ❌ INCORRETO - Múltiplos event listeners
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', handleButtonClick);
});
```

---

## 🏗️ PADRÕES HTML

### Estrutura de Documento
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título da Página | Carolina Resende</title>
  <meta name="description" content="Descrição da página">
  
  <!-- CSS -->
  <link rel="stylesheet" href="styles.css">
  
  <!-- JavaScript -->
  <script src="script.js" defer></script>
</head>
<body>
  <!-- Header -->
  <header>...</header>
  
  <!-- Main Content -->
  <main>...</main>
  
  <!-- Footer -->
  <footer>...</footer>
</body>
</html>
```

### Meta Tags Essenciais
```html
<!-- Meta tags obrigatórias -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Descrição da página">
<meta name="keywords" content="palavras-chave, relevantes">
<meta name="author" content="Carolina Resende">

<!-- Open Graph para redes sociais -->
<meta property="og:title" content="Título da Página">
<meta property="og:description" content="Descrição da página">
<meta property="og:image" content="URL da imagem">
<meta property="og:url" content="URL da página">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Título da Página">
<meta name="twitter:description" content="Descrição da página">
```

### Estrutura Semântica
```html
<!-- ✅ CORRETO - HTML semântico -->
<header>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
    </ul>
  </nav>
</header>

<main>
  <section>
    <h1>Título Principal</h1>
    <article>
      <h2>Subtítulo</h2>
      <p>Conteúdo...</p>
    </article>
  </section>
</main>

<footer>
  <p>&copy; 2025 Carolina Resende</p>
</footer>

<!-- ❌ INCORRETO - HTML não semântico -->
<div class="header">
  <div class="nav">
    <div class="nav-item">
      <a href="#home">Home</a>
    </div>
  </div>
</div>
```

---

## 📐 SISTEMA DE GRID

### Grid CSS
```css
/* Container principal */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Grid responsivo */
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

/* Breakpoints para grid */
@media (min-width: 576px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 992px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Flexbox
```css
/* Layout flexível */
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.justify-center {
  justify-content: center;
}

.align-center {
  align-items: center;
}

.flex-1 {
  flex: 1;
}
```

---

## 🎨 SISTEMA DE CORES

### Variáveis de Cores
```css
:root {
  /* Cores principais */
  --cor-primaria: #0E5BA0;
  --cor-secundaria: #52AACC;
  --cor-accent: #49515A;
  
  /* Cores de texto */
  --cor-texto: #49515A;
  --cor-texto-suave: #777D83;
  --cor-texto-claro: #FFFFFF;
  
  /* Cores de fundo */
  --cor-fundo: #D4E3E8;
  --cor-fundo-secao: #FFFFFF;
  --cor-fundo-escuro: #49515A;
  
  /* Cores de estado */
  --cor-sucesso: #28A745;
  --cor-aviso: #FFC107;
  --cor-erro: #DC3545;
  --cor-info: #17A2B8;
}
```

### Uso de Cores
```css
/* ✅ CORRETO - Usar variáveis */
.btn-primary {
  background-color: var(--cor-primaria);
  color: var(--cor-texto-claro);
}

/* ❌ INCORRETO - Cores hardcoded */
.btn-primary {
  background-color: #0E5BA0;
  color: #FFFFFF;
}
```

---

## 🔤 SISTEMA DE TIPOGRAFIA

### Variáveis de Tipografia
```css
:root {
  /* Famílias de fonte */
  --fonte-titulos: 'AtypDisplay', serif;
  --fonte-corpo: 'Poppins', sans-serif;
  
  /* Tamanhos de fonte */
  --fonte-xs: 0.75rem;    /* 12px */
  --fonte-sm: 0.875rem;   /* 14px */
  --fonte-base: 1rem;     /* 16px */
  --fonte-lg: 1.125rem;   /* 18px */
  --fonte-xl: 1.25rem;    /* 20px */
  --fonte-2xl: 1.5rem;    /* 24px */
  --fonte-3xl: 1.875rem;  /* 30px */
  --fonte-4xl: 2.25rem;   /* 36px */
  
  /* Pesos de fonte */
  --fonte-light: 300;
  --fonte-normal: 400;
  --fonte-medium: 500;
  --fonte-semibold: 600;
  --fonte-bold: 700;
  
  /* Alturas de linha */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

### Classes de Tipografia
```css
/* Títulos */
.titulo-1 {
  font-family: var(--fonte-titulos);
  font-size: var(--fonte-4xl);
  font-weight: var(--fonte-bold);
  line-height: var(--leading-tight);
}

.titulo-2 {
  font-family: var(--fonte-titulos);
  font-size: var(--fonte-3xl);
  font-weight: var(--fonte-semibold);
  line-height: var(--leading-tight);
}

/* Corpo de texto */
.texto-base {
  font-family: var(--fonte-corpo);
  font-size: var(--fonte-base);
  font-weight: var(--fonte-normal);
  line-height: var(--leading-normal);
}

.texto-pequeno {
  font-family: var(--fonte-corpo);
  font-size: var(--fonte-sm);
  font-weight: var(--fonte-normal);
  line-height: var(--leading-relaxed);
}
```

---

## 📏 SISTEMA DE ESPAÇAMENTO

### Variáveis de Espaçamento
```css
:root {
  /* Espaçamentos base */
  --espacamento-xs: 0.25rem;   /* 4px */
  --espacamento-sm: 0.5rem;    /* 8px */
  --espacamento-md: 1rem;      /* 16px */
  --espacamento-lg: 1.5rem;    /* 24px */
  --espacamento-xl: 2rem;      /* 32px */
  --espacamento-2xl: 3rem;     /* 48px */
  --espacamento-3xl: 4rem;     /* 64px */
  
  /* Margens e paddings específicos */
  --margem-secao: var(--espacamento-2xl);
  --padding-container: var(--espacamento-md);
  --gap-grid: var(--espacamento-md);
}
```

### Classes de Espaçamento
```css
/* Margens */
.m-0 { margin: 0; }
.m-1 { margin: var(--espacamento-sm); }
.m-2 { margin: var(--espacamento-md); }
.m-3 { margin: var(--espacamento-lg); }
.m-4 { margin: var(--espacamento-xl); }

/* Paddings */
.p-0 { padding: 0; }
.p-1 { padding: var(--espacamento-sm); }
.p-2 { padding: var(--espacamento-md); }
.p-3 { padding: var(--espacamento-lg); }
.p-4 { padding: var(--espacamento-xl); }

/* Espaçamento de seções */
.secao {
  padding: var(--margem-secao) 0;
}

.container {
  padding: 0 var(--padding-container);
}
```

---

## ✨ SISTEMA DE ANIMAÇÕES

### Variáveis de Animação
```css
:root {
  /* Durações */
  --duracao-rapida: 150ms;
  --duracao-normal: 300ms;
  --duracao-lenta: 500ms;
  --duracao-muito-lenta: 1000ms;
  
  /* Funções de timing */
  --easing-linear: linear;
  --easing-suave: ease;
  --easing-suave-entrada: ease-in;
  --easing-suave-saida: ease-out;
  --easing-suave-entrada-saida: ease-in-out;
  
  /* Delays */
  --delay-1: 100ms;
  --delay-2: 200ms;
  --delay-3: 300ms;
  --delay-4: 400ms;
  --delay-5: 500ms;
}
```

### Classes de Animação
```css
/* Transições base */
.transicao {
  transition: all var(--duracao-normal) var(--easing-suave);
}

.transicao-rapida {
  transition: all var(--duracao-rapida) var(--easing-suave);
}

.transicao-lenta {
  transition: all var(--duracao-lenta) var(--easing-suave);
}

/* Animações específicas */
.fade-in {
  opacity: 0;
  animation: fadeIn var(--duracao-normal) var(--easing-suave) forwards;
}

.slide-up {
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp var(--duracao-normal) var(--easing-suave) forwards;
}

/* Keyframes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 📱 SISTEMA DE BREAKPOINTS

### Variáveis de Breakpoints
```css
:root {
  /* Breakpoints */
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --breakpoint-2xl: 1400px;
  
  /* Containers */
  --container-sm: 540px;
  --container-md: 720px;
  --container-lg: 960px;
  --container-xl: 1140px;
  --container-2xl: 1320px;
}
```

### Media Queries Organizadas
```css
/* ================================================= */
/* BREAKPOINTS                                       */
/* ================================================= */

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  /* Estilos específicos para mobile */
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  /* Estilos para small devices */
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  /* Estilos para tablets */
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  /* Estilos para desktops */
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  /* Estilos para large desktops */
}

/* Extra extra large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
  /* Estilos para larger desktops */
}
```

---

## ♿ PADRÕES DE ACESSIBILIDADE

### HTML Semântico
```html
<!-- ✅ CORRETO - HTML semântico e acessível -->
<nav aria-label="Navegação principal">
  <ul role="menubar">
    <li role="none">
      <a href="#home" role="menuitem" aria-current="page">Home</a>
    </li>
  </ul>
</nav>

<main role="main">
  <h1>Título Principal</h1>
  <section aria-labelledby="servicos-titulo">
    <h2 id="servicos-titulo">Nossos Serviços</h2>
    <!-- Conteúdo da seção -->
  </section>
</main>
```

### ARIA Labels e Roles
```html
<!-- Navegação -->
<nav aria-label="Menu de navegação">
  <button aria-expanded="false" aria-controls="mobile-menu">
    <span class="sr-only">Abrir menu</span>
    <i class="fas fa-bars"></i>
  </button>
</nav>

<!-- Formulários -->
<form role="form" aria-labelledby="form-titulo">
  <h2 id="form-titulo">Formulário de Contato</h2>
  <label for="nome">Nome completo</label>
  <input type="text" id="nome" name="nome" required aria-describedby="nome-help">
  <div id="nome-help" class="help-text">Digite seu nome completo</div>
</form>

<!-- Botões -->
<button type="button" aria-label="Fechar modal">
  <i class="fas fa-times"></i>
</button>
```

### Classes de Acessibilidade
```css
/* Screen reader only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Focus visible */
.focus-visible:focus {
  outline: 2px solid var(--cor-primaria);
  outline-offset: 2px;
}

/* Skip link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--cor-primaria);
  color: var(--cor-texto-claro);
  padding: 8px;
  text-decoration: none;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
```

---

## ⚡ PADRÕES DE PERFORMANCE

### Otimizações CSS
```css
/* ✅ CORRETO - Usar propriedades otimizadas */
.elemento {
  /* Transform para animações (aceleração de hardware) */
  transform: translateX(0);
  
  /* Will-change para otimizações */
  will-change: transform;
  
  /* Contain para isolamento */
  contain: layout style paint;
}

/* ❌ INCORRETO - Propriedades que causam reflow */
.elemento {
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;
}
```

### Otimizações JavaScript
```javascript
// ✅ CORRETO - Debounce para eventos de scroll
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const handleScroll = debounce(() => {
  // Lógica de scroll otimizada
}, 16); // ~60fps

window.addEventListener('scroll', handleScroll);

// ✅ CORRETO - Intersection Observer para animações
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate').forEach(el => {
  observer.observe(el);
});
```

### Lazy Loading
```html
<!-- ✅ CORRETO - Lazy loading de imagens -->
<img src="placeholder.jpg" 
     data-src="imagem-real.jpg" 
     alt="Descrição da imagem"
     loading="lazy"
     class="lazy-image">

<script>
// Lazy loading com Intersection Observer
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy-image');
      imageObserver.unobserve(img);
    }
  });
});

document.querySelectorAll('.lazy-image').forEach(img => {
  imageObserver.observe(img);
});
</script>
```

---

## 🔧 GUIA DE MANUTENÇÃO

### Checklist de Manutenção
- [ ] Verificar links quebrados
- [ ] Testar formulários
- [ ] Verificar responsividade
- [ ] Testar em diferentes navegadores
- [ ] Verificar performance
- [ ] Validar HTML/CSS
- [ ] Verificar acessibilidade
- [ ] Atualizar dependências

### Processo de Atualização
1. **Backup**: Fazer backup dos arquivos atuais
2. **Desenvolvimento**: Implementar mudanças localmente
3. **Testes**: Testar em diferentes dispositivos e navegadores
4. **Validação**: Validar HTML, CSS e JavaScript
5. **Deploy**: Fazer upload das alterações
6. **Verificação**: Verificar funcionamento em produção

### Logs e Monitoramento
```javascript
// Sistema de logging para debug
const Logger = {
  info: (message) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[INFO] ${message}`);
    }
  },
  
  error: (message, error) => {
    console.error(`[ERROR] ${message}`, error);
    
    // Enviar para serviço de monitoramento em produção
    if (process.env.NODE_ENV === 'production') {
      // Código para enviar erro para serviço externo
    }
  },
  
  warn: (message) => {
    console.warn(`[WARN] ${message}`);
  }
};

// Uso
Logger.info('Componente carregado com sucesso');
Logger.error('Erro ao carregar componente', error);
```

---

## 📚 RECURSOS ADICIONAIS

### Ferramentas de Validação
- **HTML Validator**: https://validator.w3.org/
- **CSS Validator**: https://jigsaw.w3.org/css-validator/
- **JavaScript Validator**: https://eslint.org/
- **Accessibility Checker**: https://wave.webaim.org/

### Ferramentas de Performance
- **Lighthouse**: https://developers.google.com/web/tools/lighthouse
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **WebPageTest**: https://www.webpagetest.org/
- **GTmetrix**: https://gtmetrix.com/

### Ferramentas de Desenvolvimento
- **Chrome DevTools**: https://developers.google.com/web/tools/chrome-devtools
- **Firefox Developer Tools**: https://developer.mozilla.org/en-US/docs/Tools
- **Safari Web Inspector**: https://developer.apple.com/safari/tools/
- **Edge DevTools**: https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide/

---

**Documento gerado automaticamente em:** Janeiro 2025  
**Versão das especificações:** 1.0.0  
**Status:** Completo e atualizado
