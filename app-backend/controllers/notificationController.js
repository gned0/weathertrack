const Notification = require("../models/notificationModel");

exports.create = (req, res) => {
  console.log("create", req.body)
  if (!req.body.userid || !req.body.location || !req.body.attribute || !req.body.operand || !req.body.threshold) {
    return res.status(500).send({ message: "All fields are required" });
  }

  const notification = new Notification({
    userid: req.body.userid,
    location: req.body.location,
    attribute: req.body.attribute,
    operand: req.body.operand,
    threshold: req.body.threshold,
  });

  notification
    .save()
    .then(() => {
      res.send({ message: "Notification was created successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

exports.findAll = (req, res) => {
  console.log("findAll");
  const userId = req.query.userid;

  const query = userId ? { userid: userId } : {};

  Notification.find(query)
    .then((notifications) => {
      res.send(notifications);
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};


exports.findOne = (req, res) => {
  Notification.findById(req.params.id)
    .then((notification) => {
      if (!notification) {
        return res.status(404).send({ message: "Notification not found" });
      }
      res.send(notification);
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

exports.update = (req, res) => {
  Notification.findByIdAndUpdate(req.params.id, {
    userid: req.body.userid,
    location: req.body.location,
    attribute: req.body.attribute,
    operand: req.body.operand,
    threshold: req.body.threshold,
  }, { new: true })
    .then((notification) => {
      if (!notification) {
        return res.status(404).send({ message: "Notification not found" });
      }
      res.send(notification);
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

exports.delete = (req, res) => {
  Notification.findByIdAndDelete(req.params.id)
    .then((notification) => {
      if (!notification) {
        return res.status(404).send({ message: "Notification not found" });
      }
      res.send({ message: "Notification was deleted successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};
