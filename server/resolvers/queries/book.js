async function books(_, data, {models}) {
    return await models[0].books.find();
}

module.exports = books