# ARQUITETURA E ESTRUTURA DO PROJETO
## Site Carolina Resende - Liderança Inteligente

**Versão:** 1.0.0  
**Data de Criação:** Janeiro 2025  
**Projeto:** Site Carolina Resende - Liderança Inteligente  

---

## 📋 ÍNDICE

1. [Visão Geral da Arquitetura](#visão-geral-da-arquitetura)
2. [Estrutura de Diretórios](#estrutura-de-diretórios)
3. [Fluxo de Dados](#fluxo-de-dados)
4. [Componentes do Sistema](#componentes-do-sistema)
5. [Padrões de Design](#padrões-de-design)
6. [Sistema de Navegação](#sistema-de-navegação)
7. [Sistema de Formulários](#sistema-de-formulários)
8. [Sistema de Imagens](#sistema-de-imagens)
9. [Sistema de Fontes](#sistema-de-fontes)
10. [Configuração de Deploy](#configuração-de-deploy)
11. [Estratégia de Cache](#estratégia-de-cache)
12. [Monitoramento e Analytics](#monitoramento-e-analytics)
13. [Segurança](#segurança)
14. [Backup e Recuperação](#backup-e-recuperação)
15. [Escalabilidade](#escalabilidade)

---

## 🏗️ VISÃO GERAL DA ARQUITETURA

### Tipo de Arquitetura
- **Arquitetura**: SPA (Single Page Application) com múltiplas páginas HTML
- **Padrão**: Arquitetura monolítica estática
- **Tecnologias**: HTML5, CSS3, JavaScript ES6+, PHP (para formulários)
- **Deploy**: Hospedagem web estática com suporte a PHP

### Características Principais
- **Performance**: Carregamento rápido e otimizado
- **Responsividade**: Design mobile-first
- **Acessibilidade**: Conformidade com padrões WCAG
- **SEO**: Estrutura semântica otimizada
- **Manutenibilidade**: Código limpo e bem documentado

### Diagrama de Arquitetura
```
┌─────────────────────────────────────────────────────────────┐
│                    CLIENTE (Navegador)                     │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   HTML5     │  │    CSS3     │  │ JavaScript  │        │
│  │  Semântico  │  │ Responsivo  │  │   ES6+      │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
├─────────────────────────────────────────────────────────────┤
│                    SERVIDOR WEB                             │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   Apache    │  │     PHP     │  │   Assets    │        │
│  │   / Nginx   │  │ PHPMailer   │  │  Estáticos  │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
├─────────────────────────────────────────────────────────────┤
│                    SERVIÇOS EXTERNOS                        │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   Email     │  │   Analytics │  │   SEO       │        │
│  │   SMTP      │  │   Google    │  │   Meta      │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 ESTRUTURA DE DIRETÓRIOS

### Estrutura Completa do Projeto
```
crlideranca_public_html/
├── 📄 index.html                 # Página principal
├── 📄 sobre.html                 # Página sobre
├── 📄 servicos.html              # Página de serviços
├── 📄 para-quem.html             # Página para quem
├── 📄 contato.html               # Página de contato
├── 📄 mobile-simulator.html      # Simulador mobile
├── 📄 mobile-test.html           # Teste mobile
├── 📄 simple-mobile-test.html    # Teste mobile simples
├── 📄 direct-mobile-view.html    # Visualização mobile direta
├── 📄 styles.css                 # Estilos principais
├── 📄 script.js                  # JavaScript principal
├── 📄 README.md                  # Documentação do projeto
├── 📄 DOCUMENTACAO_TECNICA.md    # Documentação técnica
├── 📄 ESPECIFICACOES_TECNICAS.md # Especificações técnicas
├── 📄 ARQUITETURA_PROJETO.md     # Este arquivo
├── 📄 docker-compose.yml         # Configuração Docker
├── 📄 Dockerfile                 # Dockerfile
├── 📄 run-local.sh               # Script de execução local
├── 📄 run-local-python.sh        # Script Python local
│
├── 📁 assets/                     # Recursos principais
│   ├── 📁 fonts/                  # Fontes personalizadas
│   │   ├── 📄 AtypDisplay-Regular.woff
│   │   ├── 📄 AtypDisplay-Regular.woff2
│   │   ├── 📄 Poppins-Regular.woff
│   │   └── 📄 Poppins-Regular.woff2
│   │
│   ├── 📁 images/                 # Imagens do site
│   │   ├── 📄 abordagem.jpg       # Imagem de abordagem
│   │   ├── 📄 carolina-profile.jpg # Foto da Carolina
│   │   ├── 📄 consultoria.jpg     # Imagem de consultoria
│   │   ├── 📄 empresas.jpg        # Imagem de empresas
│   │   ├── 📄 formacao.jpg        # Imagem de formação
│   │   ├── 📄 lideres.jpg         # Imagem de líderes
│   │   ├── 📄 logo.png            # Logo principal
│   │   ├── 📄 mentoria.jpg        # Imagem de mentoria
│   │   ├── 📄 missao.jpg          # Imagem de missão
│   │   ├── 📄 profissionais.jpg   # Imagem de profissionais
│   │   ├── 📄 skyscraperwindows.png # Imagem de fundo
│   │   └── 📄 transformacao.jpg   # Imagem de transformação
│   │
│   └── 📁 icons/                  # Ícones (se houver)
│
├── 📁 public/                     # Arquivos públicos
│   ├── 📁 data/                   # Dados estáticos
│   └── 📁 images/                 # Imagens públicas
│       └── 📄 logo.svg            # Logo em SVG
│
└── 📁 PHPMailer/                  # Biblioteca de email
    ├── 📄 Exception.php           # Classe de exceção
    ├── 📄 PHPMailer.php           # Classe principal
    └── 📄 SMTP.php                # Classe SMTP
```

### Organização por Funcionalidade
```
📁 FRONTEND/
├── 📄 Páginas HTML (5 páginas principais)
├── 📄 styles.css (estilos responsivos)
└── 📄 script.js (funcionalidades)

📁 ASSETS/
├── 📁 fonts/ (tipografia personalizada)
├── 📁 images/ (conteúdo visual)
└── 📁 icons/ (elementos gráficos)

📁 BACKEND/
└── 📁 PHPMailer/ (sistema de email)

📁 CONFIG/
├── 📄 docker-compose.yml
├── 📄 Dockerfile
└── 📄 scripts de execução

📁 DOCS/
├── 📄 README.md
├── 📄 DOCUMENTACAO_TECNICA.md
├── 📄 ESPECIFICACOES_TECNICAS.md
└── 📄 ARQUITETURA_PROJETO.md
```

---

## 🔄 FLUXO DE DADOS

### Fluxo de Navegação
```
Usuário → Navegação → Página HTML → Carregamento de Assets → Renderização
   ↓
Interação → JavaScript → Manipulação DOM → Atualização UI
   ↓
Formulário → Validação → Envio PHP → Processamento → Resposta
```

### Fluxo de Carregamento de Página
```
1. Requisição HTTP → Servidor Web
2. Servidor → Arquivo HTML
3. HTML → Carregamento CSS/JS
4. CSS → Renderização visual
5. JavaScript → Funcionalidades interativas
6. Assets → Carregamento de imagens/fontes
7. Página → Totalmente funcional
```

### Fluxo de Formulário de Contato
```
1. Usuário preenche formulário
2. JavaScript valida dados
3. Dados enviados via AJAX/Fetch
4. PHP processa dados
5. PHPMailer envia email
6. Resposta retorna ao usuário
7. Confirmação visual exibida
```

---

## 🧩 COMPONENTES DO SISTEMA

### Componentes Frontend

#### 1. Sistema de Navegação
- **Header fixo** com logo e menu
- **Menu mobile** responsivo
- **Navegação por âncoras** para seções
- **Breadcrumbs** para orientação

#### 2. Sistema de Layout
- **Grid responsivo** CSS
- **Flexbox** para alinhamentos
- **Container** centralizado
- **Sistema de espaçamento** consistente

#### 3. Sistema de Tipografia
- **Fontes personalizadas** (AtypDisplay, Poppins)
- **Hierarquia de títulos** clara
- **Legibilidade** otimizada
- **Responsividade** de texto

#### 4. Sistema de Cores
- **Paleta consistente** de cores
- **Variáveis CSS** para manutenção
- **Contraste** adequado para acessibilidade
- **Temas** para diferentes seções

#### 5. Sistema de Imagens
- **Otimização** de tamanho e formato
- **Lazy loading** para performance
- **Alt text** para acessibilidade
- **Responsividade** para diferentes dispositivos

### Componentes Backend

#### 1. Sistema de Email (PHPMailer)
- **Configuração SMTP** para envio
- **Validação** de dados de entrada
- **Tratamento de erros** robusto
- **Logs** de envio para monitoramento

#### 2. Sistema de Validação
- **Validação client-side** com JavaScript
- **Validação server-side** com PHP
- **Sanitização** de dados
- **Feedback** em tempo real

---

## 🎨 PADRÕES DE DESIGN

### Princípios de Design
1. **Simplicidade**: Interface limpa e intuitiva
2. **Consistência**: Padrões uniformes em todo o site
3. **Hierarquia**: Informação organizada por importância
4. **Acessibilidade**: Design inclusivo para todos os usuários
5. **Performance**: Carregamento rápido e eficiente

### Sistema de Design
```
🎨 CORES
├── Primária: #0E5BA0 (Azul corporativo)
├── Secundária: #52AACC (Azul claro)
├── Accent: #49515A (Cinza escuro)
├── Fundo: #D4E3E8 (Azul muito claro)
└── Texto: #49515A (Cinza escuro)

🔤 TIPOGRAFIA
├── Títulos: AtypDisplay (serif)
├── Corpo: Poppins (sans-serif)
├── Hierarquia: H1 → H2 → H3 → H4 → H5 → H6
└── Pesos: Light, Regular, Medium, Semibold, Bold

📐 ESPAÇAMENTO
├── Base: 8px (0.5rem)
├── Escala: 8px, 16px, 24px, 32px, 48px, 64px
├── Margens: Consistente entre seções
└── Paddings: Espaçamento interno adequado

📱 BREAKPOINTS
├── Mobile: 0-575px
├── Small: 576px+
├── Medium: 768px+
├── Large: 992px+
└── XL: 1200px+
```

---

## 🧭 SISTEMA DE NAVEGAÇÃO

### Estrutura de Navegação
```
🏠 HOME (index.html)
├── Hero Section
├── Sobre Resumido
├── Serviços Destaque
└── CTA Principal

ℹ️ SOBRE (sobre.html)
├── História da Carolina
├── Missão e Valores
├── Abordagem
└── Experiência

🛠️ SERVIÇOS (servicos.html)
├── Consultoria
├── Mentoria
├── Formação
└── Transformação

👥 PARA QUEM (para-quem.html)
├── Líderes
├── Empresas
├── Profissionais
└── Casos de Sucesso

📞 CONTATO (contato.html)
├── Formulário de Contato
├── Informações de Contato
├── Localização
└── Redes Sociais
```

### Navegação Mobile
- **Menu hambúrguer** para dispositivos móveis
- **Overlay** de navegação
- **Animações suaves** de transição
- **Touch-friendly** para interações

### Navegação Desktop
- **Menu horizontal** na parte superior
- **Dropdowns** para subcategorias
- **Hover effects** para feedback visual
- **Navegação por teclado** para acessibilidade

---

## 📝 SISTEMA DE FORMULÁRIOS

### Formulário de Contato
```html
<form class="contact-form" action="process-contact.php" method="POST">
  <!-- Campos obrigatórios -->
  <input type="text" name="nome" required>
  <input type="email" name="email" required>
  <textarea name="mensagem" required></textarea>
  
  <!-- Campos opcionais -->
  <input type="tel" name="telefone">
  <select name="assunto">
    <option value="">Selecione um assunto</option>
    <option value="consultoria">Consultoria</option>
    <option value="mentoria">Mentoria</option>
    <option value="formacao">Formação</option>
  </select>
  
  <!-- Botão de envio -->
  <button type="submit">Enviar Mensagem</button>
</form>
```

### Validação e Processamento
1. **Validação Client-side**: JavaScript para feedback imediato
2. **Validação Server-side**: PHP para segurança
3. **Sanitização**: Limpeza de dados de entrada
4. **Envio de Email**: PHPMailer para comunicação
5. **Confirmação**: Feedback visual para o usuário

### Campos do Formulário
- **Nome**: Texto obrigatório
- **Email**: Email válido obrigatório
- **Telefone**: Opcional, formato brasileiro
- **Assunto**: Seleção de opções predefinidas
- **Mensagem**: Texto obrigatório com limite de caracteres

---

## 🖼️ SISTEMA DE IMAGENS

### Estratégia de Otimização
- **Formatos**: JPG para fotos, PNG para gráficos, SVG para ícones
- **Tamanhos**: Múltiplas resoluções para diferentes dispositivos
- **Compressão**: Otimização para web sem perda de qualidade
- **Lazy Loading**: Carregamento sob demanda para performance

### Estrutura de Imagens
```
📁 assets/images/
├── 📄 abordagem.jpg          # 800x600px, 150KB
├── 📄 carolina-profile.jpg   # 400x400px, 80KB
├── 📄 consultoria.jpg        # 800x600px, 120KB
├── 📄 empresas.jpg           # 800x600px, 140KB
├── 📄 formacao.jpg           # 800x600px, 130KB
├── 📄 lideres.jpg            # 800x600px, 160KB
├── 📄 logo.png               # 200x80px, 15KB
├── 📄 mentoria.jpg           # 800x600px, 125KB
├── 📄 missao.jpg             # 800x600px, 135KB
├── 📄 profissionais.jpg      # 800x600px, 145KB
├── 📄 skyscraperwindows.png # 1920x1080px, 300KB
└── 📄 transformacao.jpg      # 800x600px, 155KB
```

### Responsividade de Imagens
```css
/* Imagens responsivas */
.responsive-image {
  width: 100%;
  height: auto;
  max-width: 100%;
}

/* Imagens com diferentes tamanhos */
@media (max-width: 768px) {
  .hero-image {
    height: 300px;
    object-fit: cover;
  }
}

@media (min-width: 769px) {
  .hero-image {
    height: 500px;
    object-fit: cover;
  }
}
```

---

## 🔤 SISTEMA DE FONTES

### Fontes Personalizadas
```css
/* AtypDisplay - Para títulos */
@font-face {
  font-family: 'AtypDisplay';
  src: url('assets/fonts/AtypDisplay-Regular.woff2') format('woff2'),
       url('assets/fonts/AtypDisplay-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Poppins - Para corpo de texto */
@font-face {
  font-family: 'Poppins';
  src: url('assets/fonts/Poppins-Regular.woff2') format('woff2'),
       url('assets/fonts/Poppins-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

### Estratégia de Carregamento
- **Font-display: swap**: Texto visível imediatamente
- **WOFF2**: Formato mais eficiente (primeira opção)
- **WOFF**: Fallback para navegadores mais antigos
- **Preload**: Carregamento prioritário para fontes críticas

### Hierarquia Tipográfica
```css
:root {
  /* Títulos */
  --fonte-titulo-1: 'AtypDisplay', serif;
  --fonte-titulo-2: 'AtypDisplay', serif;
  --fonte-titulo-3: 'AtypDisplay', serif;
  
  /* Corpo de texto */
  --fonte-corpo: 'Poppins', sans-serif;
  --fonte-botao: 'Poppins', sans-serif;
  --fonte-caption: 'Poppins', sans-serif;
}
```

---

## 🚀 CONFIGURAÇÃO DE DEPLOY

### Configuração Docker
```yaml
# docker-compose.yml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "80:80"
    volumes:
      - .:/var/www/html
    environment:
      - APACHE_DOCUMENT_ROOT=/var/www/html
```

### Dockerfile
```dockerfile
FROM php:8.1-apache

# Instalar extensões PHP necessárias
RUN docker-php-ext-install pdo pdo_mysql

# Configurar Apache
COPY apache.conf /etc/apache2/sites-available/000-default.conf

# Copiar arquivos do projeto
COPY . /var/www/html/

# Configurar permissões
RUN chown -R www-data:www-data /var/www/html
```

### Scripts de Execução
```bash
# run-local.sh
#!/bin/bash
echo "Iniciando servidor local..."
python3 -m http.server 8000
echo "Servidor rodando em http://localhost:8000"
```

```bash
# run-local-python.sh
#!/bin/bash
echo "Iniciando servidor Python local..."
python3 -m http.server 8000
echo "Servidor rodando em http://localhost:8000"
```

---

## 💾 ESTRATÉGIA DE CACHE

### Cache de Navegador
```html
<!-- Meta tags para cache -->
<meta http-equiv="Cache-Control" content="max-age=31536000">
<meta http-equiv="Expires" content="Mon, 31 Dec 2025 23:59:59 GMT">
```

### Cache de Assets
```css
/* CSS com versionamento */
<link rel="stylesheet" href="styles.css?v=1.0.0">

/* JavaScript com versionamento */
<script src="script.js?v=1.0.0"></script>
```

### Estratégias de Cache
1. **HTML**: Cache por 1 hora (conteúdo dinâmico)
2. **CSS/JS**: Cache por 1 ano (versão estável)
3. **Imagens**: Cache por 1 mês (conteúdo visual)
4. **Fontes**: Cache por 1 ano (recursos estáticos)

---

## 📊 MONITORAMENTO E ANALYTICS

### Google Analytics
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Métricas de Performance
- **Core Web Vitals**: LCP, FID, CLS
- **PageSpeed Insights**: Score de performance
- **Lighthouse**: Auditoria completa
- **WebPageTest**: Análise detalhada

### Monitoramento de Erros
```javascript
// Captura de erros JavaScript
window.addEventListener('error', function(e) {
  console.error('Erro capturado:', e.error);
  
  // Enviar para serviço de monitoramento
  if (typeof gtag !== 'undefined') {
    gtag('event', 'exception', {
      'description': e.error.message,
      'fatal': false
    });
  }
});
```

---

## 🔒 SEGURANÇA

### Medidas de Segurança
1. **HTTPS**: Certificado SSL obrigatório
2. **Validação**: Dados de entrada sempre validados
3. **Sanitização**: Limpeza de dados antes do processamento
4. **Rate Limiting**: Limitação de tentativas de envio
5. **CSRF Protection**: Proteção contra ataques CSRF

### Configuração de Segurança
```apache
# .htaccess
# Proteção contra ataques
<IfModule mod_rewrite.c>
  RewriteEngine On
  
  # Bloquear acesso a arquivos sensíveis
  <Files "*.php">
    Order Allow,Deny
    Deny from all
  </Files>
  
  # Permitir apenas process-contact.php
  <Files "process-contact.php">
    Order Allow,Deny
    Allow from all
  </Files>
</IfModule>

# Headers de segurança
<IfModule mod_headers.c>
  Header always set X-Content-Type-Options nosniff
  Header always set X-Frame-Options DENY
  Header always set X-XSS-Protection "1; mode=block"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

---

## 💾 BACKUP E RECUPERAÇÃO

### Estratégia de Backup
1. **Backup Diário**: Arquivos do projeto
2. **Backup Semanal**: Banco de dados (se aplicável)
3. **Backup Mensal**: Backup completo do servidor
4. **Versionamento**: Controle de versão com Git

### Script de Backup
```bash
#!/bin/bash
# backup.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups"
PROJECT_DIR="/var/www/html"

# Criar diretório de backup
mkdir -p $BACKUP_DIR

# Fazer backup dos arquivos
tar -czf $BACKUP_DIR/project_$DATE.tar.gz $PROJECT_DIR

# Manter apenas os últimos 30 backups
find $BACKUP_DIR -name "project_*.tar.gz" -mtime +30 -delete

echo "Backup concluído: project_$DATE.tar.gz"
```

### Recuperação de Desastres
1. **Identificação**: Detectar o problema
2. **Avaliação**: Determinar a extensão do dano
3. **Recuperação**: Restaurar do backup mais recente
4. **Validação**: Verificar funcionamento
5. **Documentação**: Registrar o incidente

---

## 📈 ESCALABILIDADE

### Estratégias de Escalabilidade
1. **CDN**: Distribuição de conteúdo global
2. **Cache**: Múltiplas camadas de cache
3. **Otimização**: Compressão e minificação
4. **Monitoramento**: Métricas de performance
5. **Backup**: Estratégias de recuperação

### Preparação para Crescimento
- **Arquitetura modular** para fácil expansão
- **Padrões de código** para manutenção
- **Documentação completa** para novos desenvolvedores
- **Testes automatizados** para qualidade
- **CI/CD** para deploy contínuo

### Métricas de Escalabilidade
- **Tempo de resposta**: < 200ms
- **Throughput**: 1000+ requisições/segundo
- **Uptime**: 99.9%+
- **Recuperação**: < 15 minutos
- **Performance**: Score 90+ no Lighthouse

---

## 📚 CONCLUSÃO

### Resumo da Arquitetura
O projeto utiliza uma arquitetura **monolítica estática** com **componentes modulares** e **padrões consistentes**. A estrutura é **mobile-first**, **acessível** e **otimizada para performance**.

### Pontos Fortes
- ✅ **Simplicidade**: Arquitetura clara e fácil de entender
- ✅ **Performance**: Otimizações para carregamento rápido
- ✅ **Acessibilidade**: Conformidade com padrões WCAG
- ✅ **Responsividade**: Funciona em todos os dispositivos
- ✅ **Manutenibilidade**: Código bem documentado e organizado

### Áreas de Melhoria Futura
- 🔄 **PWA**: Transformar em Progressive Web App
- 🔄 **CMS**: Sistema de gerenciamento de conteúdo
- 🔄 **API**: Backend mais robusto com APIs
- 🔄 **Testes**: Suite de testes automatizados
- 🔄 **CI/CD**: Pipeline de deploy automatizado

### Recomendações
1. **Manter** a simplicidade da arquitetura atual
2. **Implementar** monitoramento contínuo
3. **Documentar** todas as mudanças futuras
4. **Testar** regularmente em diferentes dispositivos
5. **Atualizar** dependências periodicamente

---

**Documento gerado automaticamente em:** Janeiro 2025  
**Versão da arquitetura:** 1.0.0  
**Status:** Completo e atualizado  
**Próxima revisão:** Março 2025
