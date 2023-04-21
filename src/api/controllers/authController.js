var jwt = require("jsonwebtoken");
require("dotenv").config();

const loginController = (req, res) => {
  const myjwt = jwt.sign(
    {
      data: "foobar",
    },
    process.env.JWT_KEY,
    { expiresIn: "1h" }
  );
  res.status(200).json({jwt: myjwt})
};

module.exports = {
  loginController,
};
