const api = {};

api.new = (req, res) => {
    res.send(req.body);
};

module.exports = api;
