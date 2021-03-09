const getDb = require("../util/database").getDb;
const mongodb = require("mongodb");

class User {
  constructor(username, email, cart, _id) {
    this.username = username;
    this.email = email;
    this.cart = cart;
    this._id = _id;
  }

  save() {
    const db = getDb();
    db.collection("users").insertOne(this);
  }

  addToCart(product) {
    const db = getDb();
    let updatedCartItems = [...this.cart.items],
      newQty,
      updatedCart;

    const cartProduct_index = this.cart.items.findIndex((prod) => {
      return prod.productId.toString() === product._id.toString();
    });

    if (cartProduct_index >= 0) {
      newQty = this.cart.items[cartProduct_index].quantity + 1;
      updatedCartItems[cartProduct_index].quantity = newQty;
    } else {
      updatedCartItems.push({
        productId: mongodb.ObjectId(product._id),
        quantity: 1,
      });
    }

    updatedCart = {
      items: updatedCartItems,
    };

    return db.collection("users").updateOne(
      { _id: mongodb.ObjectId(this._id) },
      {
        $set: {
          cart: updatedCart,
        },
      }
    );
  }

  deleteProductById(prodId) {
    const db = getDb();
    let updatedCartItems = [...this.cart.items],
      newQty;

    const indexProduct = updatedCartItems.findIndex(
      (p) => p.productId.toString() === prodId.toString()
    );

    if (indexProduct >= 0) {
      newQty = updatedCartItems[indexProduct].quantity - 1;

      if (newQty <= 0) {
        updatedCartItems.splice(indexProduct, 1);
      } else {
        updatedCartItems[indexProduct].quantity = newQty;
      }

      return db
        .collection("users")
        .updateOne(
          { _id: mongodb.ObjectId(this._id) },
          { $set: { cart: { items: updatedCartItems } } }
        );
    }
  }

  getCart() {
    const db = getDb();

    const prodIds = this.cart.items.map((item) => item.productId);

    return db
      .collection("products")
      .find({ _id: { $in: prodIds } })
      .toArray()
      .then((products) => {
        return products.map((product) => {
          return {
            ...product,
            quantity: this.cart.items.find((i) => {
              return i.productId.toString() == product._id.toString();
            }).quantity,
          };
        });
      })
      .catch((err) => console.log(err));
  }

  addOrder() {
    const db = getDb();
    let order;

    return this.getCart()
      .then((products) => {
        order = {
          items: products,
          user: {
            _id: mongodb.ObjectId(this._id),
            name: this.username,
          },
        };
        return db.collection("orders").insertOne(order);
      })
      .then((result) => {
        this.cart = { items: [] };
        db.collection("users").updateOne(
          { _id: mongodb.ObjectId(this._id) },
          {
            $set: {
              cart: { items: [] },
            },
          }
        );
      })
      .catch((err) => console.log(err));
  }

  getOrders() {
    const db = getDb();
    return db
      .collection("orders")
      .find({ "user._id": mongodb.ObjectId(this._id) })
      .toArray();
  }

  static getUserById(userId) {
    const db = getDb();
    return db.collection("users").findOne({ _id: mongodb.ObjectId(userId) });
  }
}

module.exports = User;
