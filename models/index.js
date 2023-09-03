// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category)
// Categories have many Products
Categories.haveMany(Product)
// Products belongToMany Tags (through ProductTag)
Products.belongToMany(Tag)
// Tags belongToMany Products (through ProductTag)
Tage.belongToMany(Product)



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
