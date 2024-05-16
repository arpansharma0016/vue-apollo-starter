require('dotenv').config();
const jwt = require('jsonwebtoken');

async function meQuery(_, data, {models}) {
    const verified = jwt.verify(data.token, process.env.JWT_SECRET_KEY)
    console.log(verified, models)
    return {email: verified}
}

module.exports = meQuery