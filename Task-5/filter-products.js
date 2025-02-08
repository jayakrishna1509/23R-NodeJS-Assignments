// Take fakestore API data using filter the products in the wise of category.
var http = require("http");
var url = require("url");

var server = http.createServer(async (req, res) => {
  var data = await fetch("https://fakestoreapi.com/products");
  let response = await data.json();
  var parsedurl = url.parse(req.url, true);

  // root route
  if (parsedurl.pathname === "/") {
    res.write("i am root");
    res.end();
  }
  // products route with filtering and sorting
  else if (parsedurl.pathname === "/products") {
    let data_json = response;

    // filter by category
    if (parsedurl.query.category) {
      data_json = data_json.filter(
        (val) => val.category === parsedurl.query.category
      );
    }

    // sort by price
    if (parsedurl.query.order === "asc") {
      data_json.sort((a, b) => a.price - b.price);
    } else if (parsedurl.query.order === "desc") {
      data_json.sort((a, b) => b.price - a.price);
    }

    res.write(JSON.stringify(data_json));
    res.end();
  }
  // single product route
  else if (parsedurl.pathname.startsWith("/products/")) {
    var splitedval = parsedurl.pathname.split("/");
    var routeval = splitedval[splitedval.length - 1];
    var returnedval = response.filter((val) => {
      return val.id == routeval;
    });
    res.write(JSON.stringify(returnedval));
    res.end();
  }
});
// http://localhost:3000/products/1 // single product by id
var port = 3000;
server.listen(port, () => {
  console.log("server is running on port " + port);
});
