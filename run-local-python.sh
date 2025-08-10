#!/bin/bash

# Cores para melhor visualização
GREEN="\033[0;32m"
YELLOW="\033[1;33m"
NC="\033[0m" # No Color

echo "${YELLOW}Iniciando o site Carolina Resende usando servidor Python...${NC}"

# Verificar se o Python está instalado
if command -v python3 &> /dev/null; then
    PYTHON_CMD="python3"
elif command -v python &> /dev/null; then
    PYTHON_CMD="python"
else
    echo "${YELLOW}Python não encontrado. Por favor, instale o Python antes de continuar.${NC}"
    exit 1
fi

# Obter o diretório atual
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Iniciar o servidor HTTP do Python
echo "${GREEN}Iniciando servidor na porta 8000...${NC}"
echo "${GREEN}Acesse o site em: http://localhost:8000${NC}"
echo "${YELLOW}Pressione Ctrl+C para parar o servidor${NC}"

# Mudar para o diretório do site e iniciar o servidor
cd "$DIR"
$PYTHON_CMD -m http.server 8000