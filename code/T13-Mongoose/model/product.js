// const getDb = require("../util/database").getDb;
// const mongodb = require("mongodb");

// class Product {
//   constructor(title, price, description, imgUrl, userId) {
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.imgUrl = imgUrl;
//     this.userId = userId;
//   }

//   save() {
//     const db = getDb();
//     return db.collection("products").insertOne(this);
//   }

//   static fetchAll() {
//     const db = getDb();
//     return db.collection("products").find().toArray();
//   }

//   static getProductById(id) {
//     const db = getDb();
//     return db
//       .collection("products")
//       .find({ _id: new mongodb.ObjectId(id) })
//       .next();
//   }

//   static editProduct(id, newTitle, newPrice, newDescription, newImgUrl) {
//     const db = getDb();
//     return db.collection("products").updateOne(
//       { _id: new mongodb.ObjectId(id) },
//       {
//         $set: {
//           title: newTitle,
//           price: newPrice,
//           description: newDescription,
//           imgUrl: newImgUrl,
//         },
//       }
//     );
//   }

//   static deletProduct(id) {
//     const db = getDb();
//     return db.collection("products").deleteOne({ _id: mongodb.ObjectId(id) });
//   }
// }

// module.exports = Product;
