const user = require('../Database/model/user');
const jwt = require('jsonwebtoken');

const signupProcess = async function (req, res) {
  try {
    const { fullname, username, password } = req.body;
    const new_user = await user.create({
      fullname,
      username,
      password,
    });
    const token = jwt.sign({ id: new_user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    return res.status(201).json({
      data: { new_user },
      token,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { signupProcess };
