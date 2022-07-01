const jwt = require("jsonwebtoken")

//验证Token
function verifyToken(token) {
	return new Promise((resolve, reject) => {
		jwt.verify(token, secret, (error, result) => {
            if(error){
                reject(error)
            } else {
                resolve(result)
            }
		})
	})
}

module.exports = verifyToken