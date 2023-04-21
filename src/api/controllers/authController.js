var jwt = require("jsonwebtoken");
require("dotenv").config();

const users = {
    gerardo: 'hola123',
    gerald: 'adios123'
}

const loginController = (req, res) => {
    const { user, password } = req.body;

    if(users[user] !== password) return res.status(401).json({msg: 'bad credentials'});

  const myjwt = jwt.sign(
    {
      data: {user},
    },
    process.env.JWT_KEY,
    { expiresIn: "1h" }
  );
  res.status(200).json({jwt: myjwt})
};

module.exports = {
  loginController,
};
