FROM node:14-alpine

# Create app directory
WORKDIR /app

# vou pegar qualquer arquivo que começe com package e vou copiar para a pasta do WORDIR
COPY package*.json ./

# instalar as dependencies dentro do package
RUN npm install

# Copiar todo os arquivos do nivel do Dockerfile 
COPY . /app

# expor a porta
EXPOSE $PORT

# executa o comando quando a aplicação inicializar
CMD [ "npm", "start" ]