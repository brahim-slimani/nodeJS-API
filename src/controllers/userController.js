const httpStatus = require("http-status");
const {error_code, badCredentials_message, customResponse} = require("../helpers");
const JwtService = require("../security/JwtService");


const login = (req, res) => {
    const user = req.body;
    if(user.username == "slimani" && user.password == "slimani"){
        JwtService.generateJwtAccess(req, res);
    }else{
        res.status(httpStatus.BAD_REQUEST)
            .json(customResponse(error_code, badCredentials_message));
    }
}

module.exports = {
    login,
}
