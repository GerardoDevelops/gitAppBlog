const checkIfIdExist = (id, blogList) => {
  return blogList.hasOwnProperty(id);
};

const checkIfNameBlogExist = (name, blogList) =>{
    return Object.values(blogList).some(item => item.name === name);
}

module.exports = {
checkIfIdExist,
checkIfNameBlogExist
}
