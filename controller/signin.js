const Users = require('../Database/model/user');
const jwt = require('jsonwebtoken');

const loginProcess = async function (req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.json({
        data: { message: 'please enter username and password' },
      });
    }
    const user = await Users.findOne({ username: username });
    if (!user) {
      return res.json({
        data: {
          message: 'username or password is wrong',
        },
      });
    }
    if ((await user.password) !== password) {
      return res.json({
        data: {
          message: 'password is wrong',
        },
      });
      
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
    return res.status(200).json({
      data: { user },
      token,
    });
  } catch (error) {
    return res.status(500).json({
      data: {
        message: 'somthing went wrong',
      },
    });
  }
};

module.exports = { loginProcess };
