FROM cypress/base:16.14.2

RUN npm install cypress@12.17.4 --save-dev

WORKDIR /app
COPY . /app

CMD ["npx", "cypress", "run", "--browser", "firefox"]