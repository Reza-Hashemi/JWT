const Users = require('../Database/model/user');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const protect = async function (req, res, next) {
  try {
    // check if token exist
    if (
      !req.headers.authorization &&
      !req.headers.authorization.startsWith('bearer')
    ) {
      return res.status(401).json({
        status: 'error',
        data: {
          message: 'username or password is not match',
        },
      });
    }
    const token = req.headers.authorization.split(' ')[1];
    // verify token
    const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    // check if user exist
    const correntUser = await Users.findById(decode.id);
    if (!correntUser) {
      return res.status(401).json({
        status: 'error',
        data: {
          message: 'the user blong to this token not exist',
        },
      });
    }
    req.user = correntUser;
    next();
  } catch (error) {
    return res.status(401).json({
      data: {
        message: error.message
      },
    });
  }
};

module.exports = { protect };
