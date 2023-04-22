const { v4: uuidv4 } = require('uuid');
const { checkIfIdExist, checkIfNameBlogExist } = require('../../common');
const blogList = {};

const createController = (req, res) => {
    const { name, tag, description } = req.body;

    if( !name || !tag || !description ) res.status(200).json({ msg: 'Information incomplete' });

    const isBlogNameExist = checkIfNameBlogExist(name, blogList);
    if (isBlogNameExist) return res.status(409).json({msg: 'Nombre no disponible'})

    const uuid = uuidv4();
    blogList[uuid] = { name, tag, description };

    res.status(200).json({msg: 'Create succesfully', blog: {uuid, ...blogList[uuid]}})
  };

const getController = (req, res) => {
    res.status(200).json(blogList)
}

const findById = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ blog: { id, ...blogList[id] } })
}

const update = (req, res) => {
    const { id } = req.params;
    const existId = checkIfIdExist(id, blogList);

    if(!existId) return res.status(401).json({msg: `No existe un registro con id ${id}`})

    const { name, tag, description } = req.body;
    if( !name || !tag || !description ) res.status(200).json({ msg: 'Information incomplete' })

    const isBlogNameExist = checkIfNameBlogExist(name, blogList);
    if (isBlogNameExist) return res.status(409).json({msg: 'Nombre no disponible'})

    blogList[id] = { name, tag, description };

    res.status(200).json({id, ...blogList[id]})
}

module.exports = {
    createController,
    getController,
    findById,
    update
}
