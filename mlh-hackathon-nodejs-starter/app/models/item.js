'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    itemid: DataTypes.INTEGER,
    url: DataTypes.STRING,
    owner: DataTypes.STRING,
    location: DataTypes.STRING,
    category: DataTypes.STRING,
    size: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    contact: DataTypes.STRING
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
  };
//  Item.getItem = (username)
  return Item;
};