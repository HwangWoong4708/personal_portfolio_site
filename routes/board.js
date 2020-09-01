const express = require("express");
const router = express.Router();
const BoardModel = require("../model/board");

router.post("/write", async (req, res) => {
  try {
    const newBoard = new BoardModel({
      writeTitle: req.body.writeTitle,
      writeEnv: req.body.writeEnv,
      writeUpload: req.body.writeUpload,
      writeDetail: req.body.writeDetail,
    });
    //console.log(newBoard); 저장내용 확인.
    await newBoard.save();
    res.json({ message: "게시글이 업로드 되었습니다." });
  } catch (err) {
    console.log(err);
    res.json({ message: false });
  }
});

module.exports = router;
