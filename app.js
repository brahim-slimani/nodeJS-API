const app = require("./src/config/express.config");

const port = process.env.PORT;
app.listen(port, ()=>{console.log('the server is listening on port : '+port)});
