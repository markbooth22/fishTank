const { request, response } = require("express");
const Tank = require("../models/tank.model");
const jwt = require("jsonwebtoken");

module.exports = {
  getAll: (req, res) => {
    Tank.find()
      .sort("TankType")
      .then((allTanks) => res.json(allTanks))
      .catch((err) => {
        console.log(`Error getting all Tank documents: ${err}`);
        res.json(err);
      });
  },
  create: (req, res) => {
    console.log(jwt.decode(req.cookies.usertoken));
    console.log(req.body);
    const token = jwt.decode(req.cookies.usertoken);
    Tank.create({ ...req.body, userId: token._id })
      .then((newTankObject) => res.json(newTankObject))
      .catch((err) => {
        console.log(`Error creating all Tank documents: ${err}`);
        res.json(err);
      });
  },
  // create: (req, res) => {
  //   console.log(req.cookies);
  //   Tank.exists({TankName: req.body.TankName})
  //   .then(TankExists => {
  //     if (TankExists) {
  //         return Promise.reject("Tank's Must have a unique name");
  //     }
  //     return Tank.create(req.body);
  // })
  // .then(saveResult => res.json(saveResult))
  // .catch(err => res.json(err));
  // },
  getOne: (req, res) => {
    const token = jwt.decode(req.cookies.usertoken)
    Tank.find({userId: token})
      .then((oneTank) => res.json(oneTank))
      .catch((err) => {
        console.log(`Error getting a single Tank documents: ${err}`);
        res.json(err);
      });
  },
  update: (req, res) => {
    Tank.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((updatedTank) => res.json(updatedTank))
      .catch((err) => {
        console.log(`Error updating a single Tank documents: ${err}`);
        res.json(err);
      });
  },
  delete: (req, res) => {
    console.log(req.params.id)
    Tank.findByIdAndDelete(req.params.id)
      .then((deleted) => res.json(deleted))
      .catch((err) => {
        console.log(`Error deleting a single Tank documents: ${err}`);
        res.json(err);
      });
  },
};
