// create 3 files using writeFile()
// Index122.js
// Index23r.js
// Index24r.js
// We have to use writeFile() once

// And delete the above files using unlink() method. We have to use the method only
// once and delete all the files

// creating files
// let fs = require("fs");
// let arr = ["Index122.js", "Index23r.js", "Index24r.js"];
// arr.forEach((arr) => {
//   fs.writeFile(`${arr}`, `"Hello Krishna"`, "utf-8", (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File created successfully");
//     }
//   });
// });

// deleting files
// let fs = require("fs");
// let arr = ["Index122.js", "Index23r.js", "Index24r.js"];
// arr.forEach((arr) => {
//   fs.unlink(`${arr}`, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File deleted successfully");
//     }
//   });
// });

// another method to create files and delete files
// using writeFile() method and unlink() method
// let fs = require("fs");
// let arr = ["Index122.js", "Index23r.js", "Index24r.js"];
// arr.forEach((arr) => {
//   fs.writeFile(`./${arr}`, `"Hello Krishna"`, "utf-8", (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File has been created");
//     }
//   });
// });

// deleting files or unlinking files
// let fs = require("fs");
// let arr = ["Index122.js", "Index23r.js", "Index24r.js"];
//   fs.unlink("./Index24r.js", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File has been deleted");
//   }
// });

let fs = require("fs");
let arr = ["Index122.js", "Index23r.js", "Index24r.js"];

arr.forEach((file) => {
  fs.unlink(`./${file}`, (err) => {
    if (err) {
      console.log(`Error deleting file ${file}:`, err);
    } else {
      console.log(`File ${file} has been deleted`);
    }
  });
});
