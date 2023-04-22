const blogList = {};

const createController = (req, res) => {
    const { name, tag, description } = req.body;

    if( !name || !tag || !description ) res.status(200).json({ msg: 'Information incomplete' })

    blogList[name] = { tag, description };

    res.status(200).json({msg: 'Create succesfully'})
  };

const getController = (req, res) => {
    res.status(200).json(blogList)
}

module.exports = {
    createController,
    getController
}
