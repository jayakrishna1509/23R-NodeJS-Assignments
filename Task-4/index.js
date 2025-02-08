// Task1. create a folder when we hit api
// Task2. delete files and folders in folder using rmdir

// var fs = require("fs");
// var http = require("http");
// var server = http.createServer((req, res) => {
//   fs.writeFile("text.txt", "file created", (err) => {
//     if (err) throw err;
//     console.log("file created");
//   });
//   res.write("file created");
//   res.end("exit");
// });
// port = 3000;
// server.listen(port, () => {
//   console.log("server is running " + "http://localhost:" + port);
// });

// Task1
let fs = require("fs");
let http = require("http");

// let server = http.createServer((req, res) => {
//   fs.mkdir("work", (err) => {
//     console.log("folder created");
//   });
//   fs.writeFile("work/demo.txt", "file created", (err) => {
//     if (err) throw err;
//     console.log("file created");
//   });
//   res.write("file created");
//   res.end("exit");
// });
// port = 3000;
// server.listen(port, () => {
//   console.log("server is running " + "http://localhost:" + port);
// });

// Task2
fs.readdir("work", (err, data) => {
  if (data.length > 0) {
    data.map((val) => {
      fs.unlink("work/" + val, (err) => {
        if (err) {
          throw err;
        }
        console.log(val + " deleted");
      });
    });
  } else {
    fs.rmdir("work", (err) => {
      if (err) {
        throw err;
      } else {
        console.log("folder deleted");
      }
    });
  }
});
