# Site Carolina Resende

## Visão Geral
Este é o site da Carolina Resende, desenvolvido com HTML, CSS e JavaScript. O site foi otimizado para ser responsivo, fluido e visualmente atraente em todos os dispositivos.

## Estrutura do Projeto
- **HTML**: Arquivos de estrutura do site (index.html, contato.html, etc.)
- **CSS**: Estilos e animações (styles.css)
- **JavaScript**: Interatividade e funcionalidades dinâmicas (script.js)
- **Assets**: Imagens e fontes utilizadas no site

## Características Implementadas
- Design responsivo para todos os dispositivos (mobile, tablet, desktop)
- Animações suaves e transições para melhorar a experiência do usuário
- Preloader para melhorar a percepção de carregamento
- Menu mobile otimizado com animações
- Efeito parallax em elementos selecionados
- Botão "Voltar ao topo" para facilitar a navegação
- Formulário de contato com validação
- Seção de FAQ com funcionalidade de expansão/contração

## Melhorias de Responsividade para Dispositivos Móveis

### Ferramentas de Teste

Foram criadas ferramentas para testar a responsividade do site em diferentes tamanhos de tela:

1. **mobile-simulator.html**: Um simulador que utiliza iframe para visualizar o site em diferentes dispositivos.
2. **direct-mobile-view.html**: Uma visualização direta que permite testar a interatividade do site em diferentes dispositivos sem as limitações do iframe.

### Dispositivos Suportados

- iPhone SE (375×667)
- iPhone XR/11 (414×896)
- iPhone 12 Pro (390×844)
- Google Pixel 5 (393×851)
- Samsung Galaxy S20 (360×800)
- iPad (768×1024)

### Melhorias Implementadas

#### Menu Mobile

1. **Botão do Menu**:
   - Adicionado fundo com transparência para melhor visibilidade
   - Adicionada borda e arredondamento para melhor definição visual
   - Aumentado o padding para maior área de toque (8px 12px, 10px 15px em telas menores)
   - Adicionado texto "Menu" ao ícone para maior clareza
   - Implementados estados hover e active para feedback visual

2. **Lista de Navegação**:
   - Ajustada posição e altura para ocupar a tela inteira
   - Adicionado overflow para permitir rolagem em menus grandes
   - Implementada animação suave ao abrir o menu
   - Aumentado o espaçamento dos itens para melhor área de toque (15px 0)
   - Aumentado o tamanho da fonte para melhor legibilidade (1.2rem)

#### Elementos de Formulário

1. **Campos de Entrada**:
   - Aumentado o padding para 12px em telas pequenas
   - Definido tamanho de fonte para 16px para evitar zoom automático em iOS

#### Botões

1. **Botões Gerais**:
   - Aumentado o padding para 12px 20px em telas pequenas
   - Ajustado o tamanho da fonte para 1rem para consistência

## Como Executar Localmente

### Usando Docker (Recomendado)

1. Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.

2. Abra um terminal na pasta raiz do projeto.

3. Execute o seguinte comando para construir e iniciar o container:
   ```
   docker-compose up -d
   ```

4. Acesse o site em seu navegador através do endereço:
   ```
   http://localhost:8080
   ```

5. Para parar o container, execute:
   ```
   docker-compose down
   ```

### Sem Docker (Alternativa)

Se preferir executar sem Docker, você pode usar qualquer servidor web local:

1. **Usando Python (Python 3):**
   ```
   python -m http.server 8000
   ```
   Acesse: http://localhost:8000

2. **Usando PHP:**
   ```
   php -S localhost:8000
   ```
   Acesse: http://localhost:8000

## Publicação

Quando estiver satisfeito com as alterações e testes locais, você pode publicar o site em seu servidor web de preferência. Certifique-se de:

1. Testar em diferentes navegadores e dispositivos
2. Verificar a performance e tempo de carregamento
3. Validar todos os links e funcionalidades
4. Otimizar imagens para web antes da publicação final

## Manutenção

Para futuras atualizações ou modificações:

1. Faça as alterações localmente
2. Teste em um ambiente de container usando as instruções acima
3. Após validação, publique as alterações no servidor de produção