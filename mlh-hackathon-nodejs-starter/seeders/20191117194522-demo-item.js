'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Items', JSON.parse(require('fs').readFileSync('../items.json','utf8')).map(x=>{x.updatedAt=x.createdAt=new Date();return x;}), {});
  },

  down: (queryInterface, Sequelize) => {
	return queryInterface.bulkDelete('Items',null,{});
  }
};
