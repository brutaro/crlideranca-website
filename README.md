# 🚀 CR Liderança - Site Moderno

Site institucional moderno da CR Liderança, desenvolvido com tecnologias web atuais e design responsivo.

## ✨ Características

- **Single Page Application** com navegação suave
- **Design Responsivo** para todos os dispositivos
- **Animações CSS** e JavaScript para melhor UX
- **Performance Otimizada** com lazy loading
- **SEO Friendly** com meta tags apropriadas
- **Acessibilidade** com ARIA labels e navegação por teclado

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **Tailwind CSS** - Framework CSS utilitário
- **JavaScript ES6+** - Funcionalidades interativas
- **AOS (Animate On Scroll)** - Animações no scroll
- **Google Fonts** - Tipografia personalizada

## 📁 Estrutura do Projeto

```
crlideranca-modern/
├── index.html          # Página principal
├── styles.css          # Estilos customizados
├── script.js           # JavaScript interativo
├── tailwind.config.js  # Configuração do Tailwind
├── README.md           # Este arquivo
└── assets/             # Imagens e recursos
    ├── carolina-profile.jpg
    ├── logo.png
    └── icons/
```

## 🚀 Como Executar

### Opção 1: Servidor Local Simples
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

### Opção 2: Live Server (VS Code)
1. Instale a extensão "Live Server"
2. Clique com botão direito no `index.html`
3. Selecione "Open with Live Server"

### Opção 3: Deploy Direto
- **Vercel**: Arraste a pasta para vercel.com
- **Netlify**: Arraste a pasta para netlify.com
- **GitHub Pages**: Faça push para um repositório

## 🎨 Personalização

### Cores
As cores principais estão definidas em `styles.css`:
```css
:root {
    --blue-primary: #008bd2;
    --blue-dark: #00598e;
    --blue-bg: #011938;
}
```

### Fontes
Fontes personalizadas configuradas:
- **Montserrat**: Texto principal
- **Bebas Neue**: Títulos
- **Darker Grotesque**: Números e destaques

### Animações
Animações CSS personalizadas disponíveis:
- `.animate-fade-in-up`
- `.animate-slide-in-left`
- `.animate-slide-in-right`

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Funcionalidades

### Header
- Menu responsivo com hamburger mobile
- Efeito de transparência no scroll
- Navegação suave para seções

### Seções
1. **Início** - Hero com CTA principal
2. **Sobre** - Apresentação da empresa
3. **Serviços** - Cards dos serviços oferecidos
4. **Metodologia** - Processo de trabalho
5. **Resultados** - Números e conquistas
6. **Contato** - Formulário de contato

### Interatividade
- Animações no scroll
- Contadores animados
- Efeitos hover nos cards
- Validação de formulários
- Sistema de notificações

## 📸 Imagens Necessárias

### Dimensões Recomendadas:
- **Logo**: 200x60px (PNG com transparência)
- **Carolina Profile**: 400x400px (JPG, formato quadrado)
- **Hero Background**: 1920x1080px (JPG/PNG)
- **Service Icons**: 64x64px (SVG preferencialmente)
- **Process Images**: 800x600px (JPG/PNG)

### Formatos Suportados:
- **SVG**: Para ícones e logos (recomendado)
- **PNG**: Para imagens com transparência
- **JPG**: Para fotografias
- **WebP**: Para melhor performance (opcional)

## 🚀 Otimizações de Performance

- **Lazy Loading** para imagens
- **CSS Minificado** em produção
- **JavaScript Otimizado** com debouncing
- **Fontes Web** otimizadas
- **Animações CSS** para melhor performance

## 🔍 SEO e Acessibilidade

### Meta Tags
- Title e description otimizados
- Open Graph para redes sociais
- Twitter Cards configurados

### Acessibilidade
- ARIA labels apropriados
- Navegação por teclado
- Contraste adequado
- Textos alternativos para imagens

## 📊 Analytics e Monitoramento

### Google Analytics
```html
<!-- Adicione no head -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Hotjar (Opcional)
```html
<!-- Adicione no head para análise de comportamento -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:YOUR_HJID,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

## 🐛 Troubleshooting

### Problemas Comuns:

1. **Fontes não carregam**
   - Verifique conexão com internet
   - Confirme URLs das fontes no CSS

2. **Animações não funcionam**
   - Verifique se AOS está carregado
   - Confirme se JavaScript está habilitado

3. **Menu mobile não abre**
   - Verifique console para erros JavaScript
   - Confirme IDs dos elementos

4. **Formulário não envia**
   - Verifique validação dos campos
   - Confirme configuração do backend

## 📝 Licença

Este projeto é propriedade da CR Liderança. Todos os direitos reservados.

## 🤝 Suporte

Para suporte técnico ou dúvidas:
- **Email**: contato@crlideranca.com
- **Telefone**: (11) 99999-9999

---

**Desenvolvido com ❤️ para CR Liderança**
*Versão 1.0.0 - 2024*
