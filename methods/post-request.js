const crypto = require("crypto");
const reqBodyParser = require("../util/body-perser")
const writeToFile = require("../util/write-to-file")
module.exports= async(req,res)=>{
    if(req.url === "/api/movies"){
        try {
            let body = await reqBodyParser(req);
            body.id = crypto.randomUUID();
            req.movies.push(body);
            writeToFile(req.movies);
            res.writeHead(201, {'Content-Type': 'application/json'});
            res.end()
        } catch (error) {
            
            res.writeHead(400, {'Content-Type': 'application/json'});
            
    res.end(JSON.stringify( { title: "Validation Failed",
    message: "request body is not valid"}));
        }
    }else{
        res.writeHead(404,{"Content-Type":"application/json"});
    res.end(JSON.stringify( { title: "not found",
    message: "route not found"}))
    }
}