const path = require('path')


class backgroundController {
    async setBackground(req, res) {
        res.setHeader('Set-Cookie', `background=${req.body.background}`)
        return res.json('ok')
    }
}

module.exports = new backgroundController()