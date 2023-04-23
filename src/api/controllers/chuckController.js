const Api_externa = require("../../externalApi");

const categorisController = async (req, res) => {
  try {
    const api = new Api_externa("https://api.chucknorris.io/jokes/");
    const options = await api.get("categories");

    res.status(200).json({options})
  } catch (error) {
    res.status(400).json({msg: "Hubo un error al consultar la api"})
  }
};

module.exports = {
  categorisController,
};
