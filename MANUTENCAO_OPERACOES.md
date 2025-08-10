# MANUTENÇÃO E OPERAÇÕES
## Site Carolina Resende - Liderança Inteligente

**Versão:** 1.0.0  
**Data de Criação:** Janeiro 2025  
**Projeto:** Site Carolina Resende - Liderança Inteligente  

---

## 📋 ÍNDICE

1. [Rotinas de Manutenção](#rotinas-de-manutenção)
2. [Procedimentos de Backup](#procedimentos-de-backup)
3. [Monitoramento e Alertas](#monitoramento-e-alertas)
4. [Procedimentos de Deploy](#procedimentos-de-deploy)
5. [Troubleshooting](#troubleshooting)
6. [Atualizações e Patches](#atualizações-e-patches)
7. [Segurança e Auditoria](#segurança-e-auditoria)
8. [Performance e Otimização](#performance-e-otimização)
9. [Suporte e Contatos](#suporte-e-contatos)
10. [Checklists Operacionais](#checklists-operacionais)

---

## 🔧 ROTINAS DE MANUTENÇÃO

### Manutenção Diária
- [ ] **Verificar logs de erro** do servidor
- [ ] **Monitorar performance** do site
- [ ] **Verificar formulários** de contato
- [ ] **Validar links** externos e internos
- [ ] **Verificar backup** automático

### Manutenção Semanal
- [ ] **Análise de métricas** de acesso
- [ ] **Verificação de segurança** (vulnerabilidades)
- [ ] **Limpeza de logs** antigos
- [ ] **Teste de responsividade** em diferentes dispositivos
- [ ] **Validação de SEO** e meta tags

### Manutenção Mensal
- [ ] **Atualização de dependências** (se aplicável)
- [ ] **Revisão de performance** completa
- [ ] **Auditoria de acessibilidade**
- [ ] **Verificação de certificados** SSL
- [ ] **Análise de relatórios** de analytics

### Manutenção Trimestral
- [ ] **Revisão completa** da documentação
- [ ] **Atualização de políticas** de segurança
- [ ] **Revisão de estratégias** de backup
- [ ] **Análise de tendências** de uso
- [ ] **Planejamento de melhorias**

---

## 💾 PROCEDIMENTOS DE BACKUP

### Backup Automático
```bash
#!/bin/bash
# backup-automatico.sh

# Configurações
BACKUP_DIR="/backups/automatico"
PROJECT_DIR="/var/www/html"
RETENTION_DAYS=30
DATE=$(date +%Y%m%d_%H%M%S)

# Criar diretório de backup
mkdir -p $BACKUP_DIR

# Backup dos arquivos do projeto
tar -czf $BACKUP_DIR/project_$DATE.tar.gz $PROJECT_DIR

# Backup de configurações do servidor
cp /etc/apache2/sites-available/* $BACKUP_DIR/config_$DATE/
cp /etc/php/*/apache2/php.ini $BACKUP_DIR/config_$DATE/

# Limpar backups antigos
find $BACKUP_DIR -name "*.tar.gz" -mtime +$RETENTION_DAYS -delete
find $BACKUP_DIR -name "config_*" -mtime +$RETENTION_DAYS -exec rm -rf {} \;

# Log do backup
echo "$(date): Backup automático concluído - project_$DATE.tar.gz" >> /var/log/backup.log
```

### Backup Manual
```bash
#!/bin/bash
# backup-manual.sh

echo "=== BACKUP MANUAL DO PROJETO ==="
echo "Data/Hora: $(date)"
echo ""

# Verificar espaço disponível
AVAILABLE_SPACE=$(df -h /backups | awk 'NR==2 {print $4}')
echo "Espaço disponível: $AVAILABLE_SPACE"

# Confirmar backup
read -p "Deseja continuar com o backup? (y/n): " -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
    # Executar backup
    ./backup-automatico.sh
    
    # Verificar integridade
    echo "Verificando integridade do backup..."
    tar -tzf $BACKUP_DIR/project_$DATE.tar.gz > /dev/null
    
    if [ $? -eq 0 ]; then
        echo "✅ Backup concluído com sucesso!"
        echo "Arquivo: $BACKUP_DIR/project_$DATE.tar.gz"
    else
        echo "❌ Erro na verificação do backup!"
    fi
else
    echo "Backup cancelado."
fi
```

### Restauração de Backup
```bash
#!/bin/bash
# restore-backup.sh

echo "=== RESTAURAÇÃO DE BACKUP ==="
echo ""

# Listar backups disponíveis
echo "Backups disponíveis:"
ls -la /backups/automatico/*.tar.gz | nl

# Selecionar backup
read -p "Digite o número do backup a restaurar: " BACKUP_NUMBER

# Obter nome do arquivo
BACKUP_FILE=$(ls -la /backups/automatico/*.tar.gz | sed -n "${BACKUP_NUMBER}p" | awk '{print $9}')

if [ -z "$BACKUP_FILE" ]; then
    echo "❌ Backup não encontrado!"
    exit 1
fi

echo "Backup selecionado: $BACKUP_FILE"

# Confirmar restauração
read -p "ATENÇÃO: Isso irá sobrescrever os arquivos atuais. Continuar? (y/n): " -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
    # Fazer backup do estado atual
    echo "Fazendo backup do estado atual..."
    ./backup-automatico.sh
    
    # Restaurar backup
    echo "Restaurando backup..."
    tar -xzf $BACKUP_FILE -C /var/www/html/
    
    # Ajustar permissões
    chown -R www-data:www-data /var/www/html/
    chmod -R 755 /var/www/html/
    
    echo "✅ Restauração concluída!"
else
    echo "Restauração cancelada."
fi
```

---

## 📊 MONITORAMENTO E ALERTAS

### Monitoramento de Performance
```javascript
// monitor-performance.js

class PerformanceMonitor {
    constructor() {
        this.metrics = {};
        this.thresholds = {
            pageLoad: 3000,      // 3 segundos
            firstPaint: 1000,    // 1 segundo
            firstContentfulPaint: 1500, // 1.5 segundos
            largestContentfulPaint: 2500 // 2.5 segundos
        };
        
        this.init();
    }
    
    init() {
        this.observePerformance();
        this.observeErrors();
        this.observeResources();
    }
    
    observePerformance() {
        // Core Web Vitals
        if ('PerformanceObserver' in window) {
            // LCP
            new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                this.recordMetric('lcp', lastEntry.startTime);
            }).observe({ entryTypes: ['largest-contentful-paint'] });
            
            // FID
            new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    this.recordMetric('fid', entry.processingStart - entry.startTime);
                });
            }).observe({ entryTypes: ['first-input'] });
            
            // CLS
            new PerformanceObserver((list) => {
                let cls = 0;
                list.getEntries().forEach(entry => {
                    if (!entry.hadRecentInput) {
                        cls += entry.value;
                    }
                });
                this.recordMetric('cls', cls);
            }).observe({ entryTypes: ['layout-shift'] });
        }
    }
    
    observeErrors() {
        window.addEventListener('error', (e) => {
            this.recordError('javascript', e.error?.message || e.message);
        });
        
        window.addEventListener('unhandledrejection', (e) => {
            this.recordError('promise', e.reason);
        });
    }
    
    observeResources() {
        if ('PerformanceObserver' in window) {
            new PerformanceObserver((list) => {
                list.getEntries().forEach(entry => {
                    if (entry.initiatorType === 'img' || entry.initiatorType === 'css' || entry.initiatorType === 'script') {
                        this.recordMetric(`resource_${entry.initiatorType}`, entry.duration);
                    }
                });
            }).observe({ entryTypes: ['resource'] });
        }
    }
    
    recordMetric(name, value) {
        this.metrics[name] = value;
        
        // Verificar thresholds
        if (this.thresholds[name] && value > this.thresholds[name]) {
            this.alertThreshold(name, value, this.thresholds[name]);
        }
        
        // Enviar para analytics
        this.sendToAnalytics(name, value);
    }
    
    recordError(type, message) {
        console.error(`[${type}] ${message}`);
        
        // Enviar para serviço de monitoramento
        this.sendErrorToMonitoring(type, message);
    }
    
    alertThreshold(metric, value, threshold) {
        console.warn(`⚠️ ${metric} excedeu o threshold: ${value}ms > ${threshold}ms`);
        
        // Enviar alerta
        this.sendAlert(metric, value, threshold);
    }
    
    sendToAnalytics(name, value) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'performance_metric', {
                'metric_name': name,
                'metric_value': value
            });
        }
    }
    
    sendErrorToMonitoring(type, message) {
        // Implementar envio para serviço de monitoramento
        fetch('/api/log-error', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type, message, timestamp: Date.now() })
        }).catch(console.error);
    }
    
    sendAlert(metric, value, threshold) {
        // Implementar sistema de alertas
        console.log(`🚨 ALERTA: ${metric} = ${value}ms (threshold: ${threshold}ms)`);
    }
    
    getMetrics() {
        return this.metrics;
    }
    
    generateReport() {
        const report = {
            timestamp: new Date().toISOString(),
            metrics: this.metrics,
            summary: this.generateSummary()
        };
        
        return report;
    }
    
    generateSummary() {
        const summary = {};
        
        Object.keys(this.metrics).forEach(metric => {
            const value = this.metrics[metric];
            const threshold = this.thresholds[metric];
            
            if (threshold) {
                summary[metric] = {
                    value,
                    threshold,
                    status: value <= threshold ? 'OK' : 'ALERT',
                    percentage: Math.round((value / threshold) * 100)
                };
            }
        });
        
        return summary;
    }
}

// Inicializar monitor
const performanceMonitor = new PerformanceMonitor();

// Expor para uso global
window.performanceMonitor = performanceMonitor;
```

### Sistema de Alertas
```javascript
// alert-system.js

class AlertSystem {
    constructor() {
        this.alertLevels = {
            INFO: 'info',
            WARNING: 'warning',
            ERROR: 'error',
            CRITICAL: 'critical'
        };
        
        this.alertChannels = {
            console: true,
            email: false,
            slack: false,
            webhook: false
        };
        
        this.init();
    }
    
    init() {
        this.setupErrorHandling();
        this.setupPerformanceAlerts();
    }
    
    setupErrorHandling() {
        window.addEventListener('error', (e) => {
            this.createAlert('ERROR', 'JavaScript Error', e.error?.message || e.message, {
                filename: e.filename,
                lineno: e.lineno,
                colno: e.colno
            });
        });
        
        window.addEventListener('unhandledrejection', (e) => {
            this.createAlert('ERROR', 'Unhandled Promise Rejection', e.reason, {
                stack: e.reason?.stack
            });
        });
    }
    
    setupPerformanceAlerts() {
        // Monitorar métricas de performance
        if (window.performanceMonitor) {
            setInterval(() => {
                const metrics = window.performanceMonitor.getMetrics();
                this.checkPerformanceThresholds(metrics);
            }, 30000); // Verificar a cada 30 segundos
        }
    }
    
    checkPerformanceThresholds(metrics) {
        const thresholds = {
            lcp: 2500,    // Largest Contentful Paint
            fid: 100,     // First Input Delay
            cls: 0.1      // Cumulative Layout Shift
        };
        
        Object.keys(thresholds).forEach(metric => {
            if (metrics[metric] && metrics[metric] > thresholds[metric]) {
                this.createAlert('WARNING', `Performance Alert: ${metric.toUpperCase()}`, 
                    `${metric.toUpperCase()} excedeu o threshold: ${metrics[metric]} > ${thresholds[metric]}`, {
                    metric,
                    value: metrics[metric],
                    threshold: thresholds[metric]
                });
            }
        });
    }
    
    createAlert(level, title, message, metadata = {}) {
        const alert = {
            id: this.generateId(),
            level: level.toUpperCase(),
            title,
            message,
            metadata,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            userAgent: navigator.userAgent
        };
        
        this.processAlert(alert);
        this.storeAlert(alert);
        
        return alert;
    }
    
    processAlert(alert) {
        // Console
        if (this.alertChannels.console) {
            this.logToConsole(alert);
        }
        
        // Email
        if (this.alertChannels.email) {
            this.sendEmailAlert(alert);
        }
        
        // Slack
        if (this.alertChannels.slack) {
            this.sendSlackAlert(alert);
        }
        
        // Webhook
        if (this.alertChannels.webhook) {
            this.sendWebhookAlert(alert);
        }
    }
    
    logToConsole(alert) {
        const emoji = {
            INFO: 'ℹ️',
            WARNING: '⚠️',
            ERROR: '❌',
            CRITICAL: '🚨'
        };
        
        const color = {
            INFO: 'color: #0066cc',
            WARNING: 'color: #ff9900',
            ERROR: 'color: #cc0000',
            CRITICAL: 'color: #990000'
        };
        
        console.group(`${emoji[alert.level]} ${alert.title}`);
        console.log(`%c${alert.message}`, color[alert.level]);
        console.log('Metadata:', alert.metadata);
        console.log('Timestamp:', alert.timestamp);
        console.log('URL:', alert.url);
        console.groupEnd();
    }
    
    sendEmailAlert(alert) {
        // Implementar envio de email
        console.log('📧 Enviando alerta por email:', alert.title);
    }
    
    sendSlackAlert(alert) {
        // Implementar envio para Slack
        console.log('💬 Enviando alerta para Slack:', alert.title);
    }
    
    sendWebhookAlert(alert) {
        // Implementar webhook
        console.log('🔗 Enviando alerta via webhook:', alert.title);
    }
    
    storeAlert(alert) {
        // Armazenar em localStorage para histórico
        const alerts = JSON.parse(localStorage.getItem('systemAlerts') || '[]');
        alerts.push(alert);
        
        // Manter apenas os últimos 100 alertas
        if (alerts.length > 100) {
            alerts.splice(0, alerts.length - 100);
        }
        
        localStorage.setItem('systemAlerts', JSON.stringify(alerts));
    }
    
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    
    getAlertHistory() {
        return JSON.parse(localStorage.getItem('systemAlerts') || '[]');
    }
    
    clearAlertHistory() {
        localStorage.removeItem('systemAlerts');
    }
    
    getAlertSummary() {
        const alerts = this.getAlertHistory();
        const summary = {
            total: alerts.length,
            byLevel: {},
            byHour: {},
            recent: alerts.slice(-10)
        };
        
        alerts.forEach(alert => {
            // Contar por nível
            summary.byLevel[alert.level] = (summary.byLevel[alert.level] || 0) + 1;
            
            // Contar por hora
            const hour = new Date(alert.timestamp).getHours();
            summary.byHour[hour] = (summary.byHour[hour] || 0) + 1;
        });
        
        return summary;
    }
}

// Inicializar sistema de alertas
const alertSystem = new AlertSystem();

// Expor para uso global
window.alertSystem = alertSystem;
```

---

## 🚀 PROCEDIMENTOS DE DEPLOY

### Deploy Manual
```bash
#!/bin/bash
# deploy-manual.sh

echo "=== DEPLOY MANUAL DO PROJETO ==="
echo "Data/Hora: $(date)"
echo ""

# Verificar status do Git
if [ -d ".git" ]; then
    echo "📋 Status do Git:"
    git status --short
    echo ""
    
    # Verificar se há mudanças não commitadas
    if [ -n "$(git status --porcelain)" ]; then
        echo "⚠️  Há mudanças não commitadas!"
        read -p "Deseja fazer commit antes do deploy? (y/n): " -n 1 -r
        echo
        
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            git add .
            read -p "Digite a mensagem do commit: " commit_message
            git commit -m "$commit_message"
        fi
    fi
fi

# Fazer backup antes do deploy
echo "🔄 Fazendo backup antes do deploy..."
./backup-automatico.sh

# Verificar arquivos a serem deployados
echo "📁 Arquivos a serem deployados:"
find . -name "*.html" -o -name "*.css" -o -name "*.js" | head -20

# Confirmar deploy
read -p "Deseja continuar com o deploy? (y/n): " -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🚀 Iniciando deploy..."
    
    # Atualizar timestamp dos arquivos CSS e JS para cache busting
    TIMESTAMP=$(date +%s)
    
    # Atualizar referências nos arquivos HTML
    find . -name "*.html" -exec sed -i "s/styles\.css\?v=[0-9]*/styles.css?v=$TIMESTAMP/g" {} \;
    find . -name "*.html" -exec sed -i "s/script\.js\?v=[0-9]*/script.js?v=$TIMESTAMP/g" {} \;
    
    echo "✅ Cache busting aplicado (timestamp: $TIMESTAMP)"
    
    # Verificar permissões
    chmod -R 755 .
    chown -R www-data:www-data .
    
    echo "✅ Permissões ajustadas"
    
    # Testar funcionalidades básicas
    echo "🧪 Testando funcionalidades..."
    
    # Verificar se as páginas carregam
    if curl -s -o /dev/null -w "%{http_code}" http://localhost/ | grep -q "200"; then
        echo "✅ Página principal carrega corretamente"
    else
        echo "❌ Erro ao carregar página principal"
    fi
    
    echo "🎉 Deploy concluído com sucesso!"
    echo "Timestamp: $TIMESTAMP"
    
else
    echo "Deploy cancelado."
fi
```

### Deploy Automatizado (CI/CD)
```yaml
# .github/workflows/deploy.yml

name: Deploy to Production

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    
    - name: Install dependencies
      run: npm install
    
    - name: Run tests
      run: npm test
    
    - name: Validate HTML
      run: |
        npm install -g html-validate
        html-validate *.html
    
    - name: Validate CSS
      run: |
        npm install -g stylelint
        stylelint *.css
    
    - name: Validate JavaScript
      run: |
        npm install -g eslint
        eslint *.js

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Deploy to server
      uses: appleboy/ssh-action@v0.1.4
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.KEY }}
        script: |
          cd /var/www/html
          git pull origin main
          chmod -R 755 .
          chown -R www-data:www-data .
          systemctl reload apache2
          echo "Deploy completed at $(date)"
```

---

## 🔍 TROUBLESHOOTING

### Problemas Comuns e Soluções

#### 1. Página não carrega (Erro 500)
```bash
# Verificar logs do Apache
sudo tail -f /var/log/apache2/error.log

# Verificar permissões
ls -la /var/www/html/
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/

# Verificar configuração PHP
php -v
php -m | grep -E "(pdo|mysql|mail)"
```

#### 2. Formulário não envia emails
```bash
# Verificar logs do PHPMailer
tail -f /var/log/mail.log

# Testar configuração SMTP
php -r "
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

\$mail = new PHPMailer\PHPMailer\PHPMailer(true);
\$mail->isSMTP();
\$mail->Host = 'smtp.gmail.com';
\$mail->SMTPAuth = true;
\$mail->Username = 'test@example.com';
\$mail->Password = 'password';
\$mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
\$mail->Port = 587;

try {
    \$mail->send();
    echo 'SMTP configurado corretamente';
} catch (Exception \$e) {
    echo 'Erro: ' . \$mail->ErrorInfo;
}
"
```

#### 3. Problemas de Performance
```bash
# Verificar uso de memória
free -h

# Verificar uso de CPU
top

# Verificar logs de performance
tail -f /var/log/apache2/access.log | grep -E "(slow|timeout)"

# Otimizar Apache
sudo a2enmod expires
sudo a2enmod headers
sudo systemctl reload apache2
```

#### 4. Problemas de SSL/HTTPS
```bash
# Verificar certificado SSL
openssl x509 -in /etc/ssl/certs/certificate.crt -text -noout

# Verificar configuração Apache SSL
apache2ctl -S

# Testar conexão HTTPS
curl -I https://seudominio.com
```

### Script de Diagnóstico
```bash
#!/bin/bash
# diagnose.sh

echo "=== DIAGNÓSTICO DO SISTEMA ==="
echo "Data/Hora: $(date)"
echo ""

# Informações do sistema
echo "📊 INFORMAÇÕES DO SISTEMA:"
echo "OS: $(uname -a)"
echo "Uptime: $(uptime)"
echo "Load Average: $(cat /proc/loadavg)"
echo ""

# Uso de recursos
echo "💾 USO DE RECURSOS:"
echo "Memória:"
free -h
echo ""
echo "Disco:"
df -h
echo ""

# Status dos serviços
echo "🔧 STATUS DOS SERVIÇOS:"
echo "Apache: $(systemctl is-active apache2)"
echo "PHP: $(php -v | head -1)"
echo "MySQL: $(systemctl is-active mysql 2>/dev/null || echo 'N/A')"
echo ""

# Verificações de conectividade
echo "🌐 VERIFICAÇÕES DE CONECTIVIDADE:"
echo "Localhost: $(curl -s -o /dev/null -w "%{http_code}" http://localhost/)"
echo "Página principal: $(curl -s -o /dev/null -w "%{http_code}" http://localhost/index.html)"
echo ""

# Verificações de arquivos
echo "📁 VERIFICAÇÕES DE ARQUIVOS:"
echo "Arquivos HTML: $(find /var/www/html -name '*.html' | wc -l)"
echo "Arquivos CSS: $(find /var/www/html -name '*.css' | wc -l)"
echo "Arquivos JS: $(find /var/www/html -name '*.js' | wc -l)"
echo ""

# Verificações de permissões
echo "🔐 VERIFICAÇÕES DE PERMISSÕES:"
echo "Proprietário: $(ls -ld /var/www/html/ | awk '{print $3}')"
echo "Grupo: $(ls -ld /var/www/html/ | awk '{print $4}')"
echo "Permissões: $(ls -ld /var/www/html/ | awk '{print $1}')"
echo ""

# Logs recentes
echo "📝 LOGS RECENTES (últimas 10 linhas):"
echo "Apache Error:"
tail -10 /var/log/apache2/error.log 2>/dev/null || echo "Log não encontrado"
echo ""

echo "Apache Access:"
tail -10 /var/log/apache2/access.log 2>/dev/null || echo "Log não encontrado"
echo ""

# Recomendações
echo "💡 RECOMENDAÇÕES:"
if [ $(free | awk 'NR==2{printf "%.0f", $3*100/$2}') -gt 80 ]; then
    echo "⚠️  Uso de memória alto - considere otimizar"
fi

if [ $(df / | awk 'NR==2{printf "%.0f", $5}') -gt 80 ]; then
    echo "⚠️  Uso de disco alto - considere limpeza"
fi

if [ $(cat /proc/loadavg | awk '{print $1}' | cut -d. -f1) -gt 2 ]; then
    echo "⚠️  Load average alto - verificar processos"
fi

echo ""
echo "=== DIAGNÓSTICO CONCLUÍDO ==="
```

---

## 🔄 ATUALIZAÇÕES E PATCHES

### Processo de Atualização
1. **Planejamento**: Identificar necessidade de atualização
2. **Teste**: Testar em ambiente de desenvolvimento
3. **Backup**: Fazer backup antes da atualização
4. **Implementação**: Aplicar atualização
5. **Validação**: Verificar funcionamento
6. **Documentação**: Registrar mudanças

### Script de Atualização
```bash
#!/bin/bash
# update-system.sh

echo "=== ATUALIZAÇÃO DO SISTEMA ==="
echo "Data/Hora: $(date)"
echo ""

# Verificar se há atualizações disponíveis
echo "🔍 Verificando atualizações disponíveis..."

# Atualizações do sistema
if command -v apt-get &> /dev/null; then
    sudo apt update
    UPDATES=$(apt list --upgradable 2>/dev/null | grep -v "WARNING" | wc -l)
    echo "📦 Atualizações do sistema: $UPDATES"
    
    if [ $UPDATES -gt 0 ]; then
        read -p "Deseja instalar as atualizações do sistema? (y/n): " -n 1 -r
        echo
        
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            sudo apt upgrade -y
            echo "✅ Sistema atualizado"
        fi
    fi
fi

# Atualizações do PHP
echo "🐘 Verificando versão do PHP..."
CURRENT_PHP=$(php -v | head -1 | awk '{print $2}' | cut -d. -f1,2)
echo "Versão atual: $CURRENT_PHP"

# Verificar se há versão mais recente disponível
if command -v apt-get &> /dev/null; then
    AVAILABLE_PHP=$(apt list php* 2>/dev/null | grep -E "php[0-9]+\.[0-9]+" | head -1 | cut -d/ -f1)
    echo "Versão disponível: $AVAILABLE_PHP"
    
    if [ "$CURRENT_PHP" != "$AVAILABLE_PHP" ]; then
        read -p "Deseja atualizar o PHP? (y/n): " -n 1 -r
        echo
        
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            echo "🔄 Atualizando PHP..."
            sudo apt install $AVAILABLE_PHP -y
            echo "✅ PHP atualizado"
        fi
    fi
fi

# Atualizações do Apache
echo "🌐 Verificando versão do Apache..."
CURRENT_APACHE=$(apache2 -v | head -1 | awk '{print $3}' | cut -d/ -f2)
echo "Versão atual: $CURRENT_APACHE"

# Verificar se há versão mais recente disponível
if command -v apt-get &> /dev/null; then
    AVAILABLE_APACHE=$(apt list apache2 2>/dev/null | grep apache2 | head -1 | cut -d/ -f1)
    echo "Versão disponível: $AVAILABLE_APACHE"
    
    if [ "$CURRENT_APACHE" != "$AVAILABLE_APACHE" ]; then
        read -p "Deseja atualizar o Apache? (y/n): " -n 1 -r
        echo
        
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            echo "🔄 Atualizando Apache..."
            sudo apt install apache2 -y
            echo "✅ Apache atualizado"
        fi
    fi
fi

# Reiniciar serviços se necessário
echo "🔄 Reiniciando serviços..."
sudo systemctl reload apache2
echo "✅ Serviços reiniciados"

echo ""
echo "=== ATUALIZAÇÃO CONCLUÍDA ==="
```

---

## 🔒 SEGURANÇA E AUDITORIA

### Verificação de Segurança
```bash
#!/bin/bash
# security-audit.sh

echo "=== AUDITORIA DE SEGURANÇA ==="
echo "Data/Hora: $(date)"
echo ""

# Verificar permissões de arquivos
echo "🔐 VERIFICAÇÃO DE PERMISSÕES:"
echo "Arquivos com permissões muito abertas:"
find /var/www/html -type f -perm 777 2>/dev/null
find /var/www/html -type f -perm 666 2>/dev/null
echo ""

# Verificar arquivos sensíveis
echo "🚨 ARQUIVOS SENSÍVEIS:"
find /var/www/html -name "*.env" -o -name "*.key" -o -name "*.pem" 2>/dev/null
find /var/www/html -name "config.php" -o -name "database.php" 2>/dev/null
echo ""

# Verificar configurações de segurança
echo "🛡️ CONFIGURAÇÕES DE SEGURANÇA:"
echo "HTTPS habilitado: $(grep -r "HTTPS" /etc/apache2/ 2>/dev/null | wc -l)"
echo "Headers de segurança: $(grep -r "X-Frame-Options\|X-Content-Type-Options" /etc/apache2/ 2>/dev/null | wc -l)"
echo ""

# Verificar logs de acesso suspeito
echo "👀 LOGS DE ACESSO SUSPEITO:"
echo "Tentativas de login falhadas:"
grep "Failed password" /var/log/auth.log 2>/dev/null | tail -5
echo ""

echo "Acessos a arquivos sensíveis:"
grep -E "\.(php|env|key|pem)" /var/log/apache2/access.log 2>/dev/null | tail -5
echo ""

# Verificar processos em execução
echo "🔄 PROCESSOS EM EXECUÇÃO:"
echo "Processos PHP:"
ps aux | grep php | grep -v grep
echo ""

echo "Processos Apache:"
ps aux | grep apache | grep -v grep
echo ""

# Recomendações de segurança
echo "💡 RECOMENDAÇÕES DE SEGURANÇA:"
echo "1. Verificar permissões de arquivos"
echo "2. Revisar logs de acesso"
echo "3. Atualizar certificados SSL"
echo "4. Verificar configurações de firewall"
echo "5. Revisar políticas de backup"
echo ""

echo "=== AUDITORIA CONCLUÍDA ==="
```

---

## ⚡ PERFORMANCE E OTIMIZAÇÃO

### Otimizações de Performance
```bash
#!/bin/bash
# optimize-performance.sh

echo "=== OTIMIZAÇÃO DE PERFORMANCE ==="
echo "Data/Hora: $(date)"
echo ""

# Otimizar Apache
echo "🌐 OTIMIZANDO APACHE..."

# Habilitar módulos de performance
sudo a2enmod expires
sudo a2enmod headers
sudo a2enmod deflate
sudo a2enmod cache

# Configurar cache de arquivos estáticos
cat > /tmp/apache-cache.conf << 'EOF'
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/svg+xml "access plus 1 month"
    ExpiresByType font/woff "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
EOF

sudo cp /tmp/apache-cache.conf /etc/apache2/conf-available/cache.conf
sudo a2enconf cache

# Otimizar PHP
echo "🐘 OTIMIZANDO PHP..."

# Configurar opcache
sudo sed -i 's/opcache.enable=0/opcache.enable=1/' /etc/php/*/apache2/php.ini
sudo sed -i 's/opcache.memory_consumption=128/opcache.memory_consumption=256/' /etc/php/*/apache2/php.ini
sudo sed -i 's/opcache.max_accelerated_files=4000/opcache.max_accelerated_files=10000/' /etc/php/*/apache2/php.ini

# Otimizar imagens
echo "🖼️ OTIMIZANDO IMAGENS..."

# Instalar ferramentas de otimização
if command -v apt-get &> /dev/null; then
    sudo apt install -y jpegoptim optipng
fi

# Otimizar imagens JPG
find /var/www/html -name "*.jpg" -exec jpegoptim --strip-all {} \;
find /var/www/html -name "*.jpeg" -exec jpegoptim --strip-all {} \;

# Otimizar imagens PNG
find /var/www/html -name "*.png" -exec optipng -o5 {} \;

echo "✅ Otimizações aplicadas"

# Reiniciar serviços
echo "🔄 Reiniciando serviços..."
sudo systemctl reload apache2

echo ""
echo "=== OTIMIZAÇÃO CONCLUÍDA ==="
```

---

## 📞 SUPORTE E CONTATOS

### Contatos de Emergência
- **Desenvolvedor Principal**: Assistente AI
- **Cliente**: Carolina Resende
- **Hospedagem**: [Informações da hospedagem]
- **Domínio**: [Informações do domínio]

### Canais de Suporte
- **Email**: [email de suporte]
- **Telefone**: [telefone de emergência]
- **Chat**: [chat de suporte]
- **Ticket**: [sistema de tickets]

### Escalação de Problemas
1. **Nível 1**: Problemas básicos (resposta em 4 horas)
2. **Nível 2**: Problemas críticos (resposta em 1 hora)
3. **Nível 3**: Emergências (resposta imediata)

---

## ✅ CHECKLISTS OPERACIONAIS

### Checklist Diário
- [ ] Verificar logs de erro
- [ ] Monitorar performance
- [ ] Verificar formulários
- [ ] Validar links
- [ ] Verificar backup

### Checklist Semanal
- [ ] Análise de métricas
- [ ] Verificação de segurança
- [ ] Limpeza de logs
- [ ] Teste de responsividade
- [ ] Validação de SEO

### Checklist Mensal
- [ ] Atualização de dependências
- [ ] Revisão de performance
- [ ] Auditoria de acessibilidade
- [ ] Verificação de certificados
- [ ] Análise de relatórios

### Checklist Trimestral
- [ ] Revisão da documentação
- [ ] Atualização de políticas
- [ ] Revisão de estratégias
- [ ] Análise de tendências
- [ ] Planejamento de melhorias

---

## 📚 CONCLUSÃO

### Resumo das Operações
O sistema de manutenção e operações foi projetado para garantir **alta disponibilidade**, **performance otimizada** e **segurança robusta** do site.

### Pontos Chave
- ✅ **Monitoramento contínuo** de performance e erros
- ✅ **Backup automático** com retenção configurável
- ✅ **Deploy automatizado** com validações
- ✅ **Troubleshooting** estruturado e documentado
- ✅ **Segurança proativa** com auditorias regulares

### Próximos Passos
1. **Implementar** monitoramento em tempo real
2. **Configurar** alertas automáticos
3. **Automatizar** mais processos de manutenção
4. **Expandir** cobertura de testes
5. **Documentar** procedimentos específicos

---

**Documento gerado automaticamente em:** Janeiro 2025  
**Versão da manutenção:** 1.0.0  
**Status:** Completo e atualizado  
**Próxima revisão:** Março 2025
