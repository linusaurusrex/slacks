docker-compose up -d

cd mlh-hackathon-nodejs-starter
npx sequelize-clie db:migrate
npm start