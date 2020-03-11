const express = require("express");

const Channel = require("../models/channel");

const router = express.Router();

router.get("", (req, res, next) => {
  Channel.find().then(documents => {
    res.status(200).json({
      message: "Get channels list successfully!",
      channels: documents
    });
  });
});

module.exports = router;
