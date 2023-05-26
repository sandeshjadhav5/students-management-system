const mongoose = require("mongoose");
const LectureSchema = mongoose.Schema(
  {
    subject: { type: String, reqiured: true },
    subject_id: { type: mongoose.Schema.Types.ObjectId, ref: "subject" },
    lecture_date: { type: String, required: true },
    start_at: { type: String, reqiured: true },
    end_at: { type: String, reqiured: true },
    present: [{ type: String }],
    year: { type: String, required: true },
    lecture_type: { type: String, required: true },
  },
  { versionKey: false }
);
const LectureModel = mongoose.model("lecture", LectureSchema);
module.exports = LectureModel;
