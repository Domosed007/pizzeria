const Sequelize = require("sequelize");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

//object Sequelize
const sequelize = new Sequelize("pizzaDB", "root", "Vtldtlm007", {
  dialect: "mysql",
  host: "localhost",
});
const Model = Sequelize.Model;

//model Castomer
class Castomer extends Model {}
Castomer.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    notes: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize,
    modelName: "castomer",
  }
);

//model Product
class Product extends Model {}
Product.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    picture: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "product",
  }
);

//model Order
class Order extends Model {}
Order.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    idCastomer: {
      type: Sequelize.INTEGER,
    },
    idProduct: {
      type: Sequelize.INTEGER,
    },
    count: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    typeOrder: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    deliveryAddres: {
      type: Sequelize.STRING,
    },
    deliveryDateTime: {
      type: Sequelize.DATE,
    },
    totalAmount: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "order",
  }
);

//synchronization with DB
sequelize
  .sync({ forse: true })
  .then(() => {
    //start server
    app.listen(8000, function () {
      console.log("Server start!");
    });
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/menu", (req, res) => {
  Product.findAll()
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

app.get("/menu/pizza", (req, res) => {
  Product.findAll({ where: { category: "pizza" } })
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});
app.get("/menu/salat", (req, res) => {
  Product.findAll({ where: { category: "salat" } })
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});
app.get("/menu/drink", (req, res) => {
  Product.findAll({ where: { category: "drink" } })
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});
