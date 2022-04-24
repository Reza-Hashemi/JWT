const Users = require('../Database/model/user');

const dashboardProcess = async function (req, res) {
  try {
    const users = await Users.find({});
    return res.status(200).json({
      status: ' success',
      data: {
        users,
      },
    });
  } catch (error) {
    return res.status(500).json({
      data: {
        status: 'error',
        message: 'somthing went wrong',
      },
    });
  }
};

module.exports = {dashboardProcess};
