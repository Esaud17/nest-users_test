FROM node:12.13-alpine As builder
RUN mkdir -p /home/app
WORKDIR /home/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:12.13-alpine
RUN mkdir -p  /home/app
WORKDIR  /home/app
COPY --from=builder /home/app ./
EXPOSE 3000
CMD ["npm", "run", "start:prod"]