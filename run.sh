docker-compose up -d

cd mlh-hackathon-nodejs-starter
npx sequelize-cli db:migrate
npm start