const userModel = require("../model/user");

exports.createUser = async (req, res) => {
  try {
    const user = new userModel(req.body);
    await user.save();
    return res.status(201).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal error");
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await userModel.find();
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal error");
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findById(id);
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal error");
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).send("User Updated");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal error");
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send("User Deleted");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal error");
  }
};
