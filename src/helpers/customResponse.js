
const customResponse = (code, message, result) => {
    let response = {
           "code": code,
           "message": message,
           result
    }
    return response;
}

module.exports = customResponse;
