#!/bin/bash

# Cores para melhor visualização
GREEN="\033[0;32m"
YELLOW="\033[1;33m"
NC="\033[0m" # No Color

echo "${YELLOW}Iniciando o site Carolina Resende em container local...${NC}"

# Verificar se o Docker está instalado
if ! command -v docker &> /dev/null; then
    echo "${YELLOW}Docker não encontrado. Por favor, instale o Docker antes de continuar.${NC}"
    exit 1
fi

# Verificar se o Docker Compose está instalado
if ! command -v docker-compose &> /dev/null; then
    echo "${YELLOW}Docker Compose não encontrado. Por favor, instale o Docker Compose antes de continuar.${NC}"
    exit 1
fi

# Construir e iniciar o container
echo "${YELLOW}Construindo e iniciando o container...${NC}"
docker-compose up -d

# Verificar se o container foi iniciado com sucesso
if [ $? -eq 0 ]; then
    echo "${GREEN}Container iniciado com sucesso!${NC}"
    echo "${GREEN}Acesse o site em: http://localhost:8080${NC}"
    echo "${YELLOW}Para parar o container, execute: docker-compose down${NC}"
    
    # Tentar abrir o navegador automaticamente (funciona em macOS)
    if [[ "$OSTYPE" == "darwin"* ]]; then
        echo "${YELLOW}Abrindo o navegador...${NC}"
        open http://localhost:8080
    fi
else
    echo "${YELLOW}Ocorreu um erro ao iniciar o container. Verifique os logs acima.${NC}"
fi