
const http = require('http');
const getReq = require("./methods/get-request");
const putReq = require("./methods/put-request");
const postReq = require("./methods/post-request");
const deleteReq = require("./methods/delete-request");
let movies = require("./data/movies.json")
const server = http.createServer(function (req, res) {
  req.movies = movies;
switch (req.method) {
    case "GET":
        getReq(req,res);
        break;
        case "POST":
            postReq(req,res);
            break;
            case "PUT":
    putReq(req,res);
        break;
        case "DELETE":
        deleteReq(req,res);
        break;
        
    default:
      res.writeHead(404, {'Content-Type': 'application/json'});
      res.write(
    JSON.stringify({
      title: "Not Found", message: "Route not found"
    })
    
      );
      res.end();
       
}

 
})

server.listen(8080);




