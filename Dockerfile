# Use a imagem base do Node.js
FROM node:14

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json (ou yarn.lock, se estiver usando o Yarn) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Defina a variável de ambiente para indicar que está executando em um ambiente de desenvolvimento
ENV NODE_ENV development

# Exponha a porta que o aplicativo React está usando (geralmente a porta 3000)
EXPOSE 3000

# Inicie o aplicativo React com o react-scripts
CMD ["npm", "start"]
