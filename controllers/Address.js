const Address = require("../models/Address");

module.exports = {
  async listAllAddresses(req, res) {
    const address = await Address.findAll();
    console.log(address);
    return res.json(address);
  },
};
