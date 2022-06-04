const bcrypt = require("bcrypt");

async function create_hash(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 5, (err, hash) => {
      resolve(hash);
    });
  });
}

async function check_hash(password, hash) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, res) => {
      resolve(res);
    });
  });
}

async function main(password) {
  let password_encrypted = await create_hash(password);
  let result = await check_hash(password, password_encrypted);
  console.log(result);
}

main("1234Segura!");
