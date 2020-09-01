const mongoose = require("mongoose");

const boardSchema = mongoose.Schema({
  writeTitle: {
    type: String,
  },
  writeEnv: {
    type: String,
  },
  writeUpload: {
    type: String,
  },
  writeDetail: {
    type: String,
  },
});

module.exports = mongoose.model("board", boardSchema);
