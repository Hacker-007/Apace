const jwt = require('jsonwebtoken')

module.exports = function canAccess(expectedRoles) {
    return function(req, res, next) {
        const token = req.header('Authorization').split(' ')[1]
        if(!token) {
            return res.status(403).send('Acess Denied.')
        }

        const { roles } = jwt.decode(token, { complete: true }).payload
        const authorized = expectedRoles.every(e => roles.includes(e))
        if(!authorized) {
            return res.status(403).send('Access Denied.')
        }

        next()
    }
}