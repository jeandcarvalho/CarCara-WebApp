# Use uma imagem Node.js como base
FROM node:latest

# Defina o diretório de trabalho dentro da imagem
WORKDIR /src

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install fastify @fastify/cors @prisma/client prisma mongodb mongoose mongoclient

# Copie todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Gere os arquivos do Prisma
RUN npx prisma generate

# Compile seu código TypeScript (se necessário)
RUN npm run build

# Exponha a porta que sua aplicação irá usar
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["npm", "start", "server.js"]
