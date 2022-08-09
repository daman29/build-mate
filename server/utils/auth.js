const jwt = require('jsonwebtoken');
require('dotenv').config();

const privateKey = process.env.JWT_PRIVATE;
const publicKey = process.env.JWT_PUBLIC
const expiration = '2h';

module.exports = {
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, privateKey, { expiresIn: expiration, algorithm:  "RS256" });
  },
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, publicKey, { maxAge: expiration, algorithm:  ["RS256"] });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
};
