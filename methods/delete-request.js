const writeToFile = require("../util/body-perser")
module.exports= (req,res)=>{

      //* code for uRL --
    //try to remove id
    // base url  = http://localhost:8080/api/movies/
    let baseUrl = req.url.substring(0,req.url.lastIndexOf("/") + 1);
    console.log(baseUrl);
// try to taking id
// id  == 5467890-098765
    let id = req.url.split("/")[3];
console.log(id);
    const regexV4 = new RegExp(
        /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
      );
      if(!regexV4.test(id)){
        //false
        // jodi eita true hoi taile nicher code kaz korbe
        res.writeHead(404,{"Content-Type":"application/json"});
        res.end(JSON.stringify( { title: "Validation Failed",
        message: "UUID is not valid"}));
    }else if(baseUrl === "/api/movies/" && regexV4.test(id)){
const index = req.movies.findIndex((movie)=> {
    return movie.id === id;
});
if(index === -1){
    res.statusCode = 404;
    res.write(JSON.stringify({ title: "not found",
    message: "movie not found"}))
    res.end()  
}else{
    req.movies.splice(index,1);
    writeToFile(req.movies);
    res.writeHead(204,{"Content-Type":"application/json"});
}
    }
}