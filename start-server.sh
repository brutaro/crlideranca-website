#!/bin/bash

echo "🚀 Iniciando servidor local para CR Liderança..."
echo "📍 Pasta: $(pwd)"
echo "🌐 URL: http://localhost:8000"
echo ""
echo "📱 Abra seu navegador e acesse: http://localhost:8000"
echo "📁 Para testar a versão completa: http://localhost:8000/index.html"
echo "🧪 Para testar a versão simplificada: http://localhost:8000/test-site.html"
echo ""
echo "⏹️  Para parar o servidor, pressione Ctrl+C"
echo ""

# Verifica se Python 3 está disponível
if command -v python3 &> /dev/null; then
    echo "🐍 Usando Python 3..."
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "🐍 Usando Python..."
    python -m http.server 8000
elif command -v node &> /dev/null; then
    echo "🟢 Usando Node.js..."
    npx serve . -p 8000
elif command -v php &> /dev/null; then
    echo "🐘 Usando PHP..."
    php -S localhost:8000
else
    echo "❌ Nenhum servidor encontrado!"
    echo "💡 Instale Python, Node.js ou PHP para continuar."
    exit 1
fi
