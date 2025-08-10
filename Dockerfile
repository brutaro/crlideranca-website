FROM nginx:alpine

# Copiar os arquivos do site para o diretório padrão do Nginx
COPY . /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Comando para iniciar o Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]