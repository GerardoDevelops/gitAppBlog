const blogList = {};

const createController = (req, res) => {
    const { name, tag, description } = req.body;

    if( !name || !tag || !description ) res.status(200).json({ msg: 'Information incomplete' })

    blogList[name] = { tag, description };

    console.log(blogList);

    res.status(200).json({msg: 'Create succesfully'})
  };

module.exports = {
    createController
}
