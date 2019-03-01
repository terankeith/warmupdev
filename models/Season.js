const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SeasonSchema = new Schema({
    unit: {
        type: Schema.Types.ObjectId,
        ref: "units"
    },
    year: {
        type: Number,
        required: true
    },
    season: {
        type: String,
        required: true
    },
    showTitle: {
        type: String
    },
    memberdues: {
        type: Number
    },
    icon: {
        type: String
    },
    membership: [
        {
            member: {
                type: Schema.Types.ObjectId,
                ref: "members"
            }
        }
    ]
});

module.exports = Season = mongoose.model("seasons", SeasonSchema);
