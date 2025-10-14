const mainPage = (req, res) => {
    res.render('./home', { nome: "Lucas", isLogged: true })
}

module.exports = { mainPage }