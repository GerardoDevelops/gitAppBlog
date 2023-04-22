const { v4: uuidv4 } = require('uuid');
const blogList = {};

const createController = (req, res) => {
    const { name, tag, description } = req.body;

    if( !name || !tag || !description ) res.status(200).json({ msg: 'Information incomplete' })

    const uuid = uuidv4();
    blogList[uuid] = { name, tag, description };

    res.status(200).json({msg: 'Create succesfully', blog: {uuid, ...blogList[uuid]}})
  };

const getController = (req, res) => {
    res.status(200).json(blogList)
}

const findById = (req, res) => {
    const { id } = req.params;
    console.log(id);
    res.status(200).json({ blog: { id, ...blogList[id] } })
}

module.exports = {
    createController,
    getController,
    findById
}
