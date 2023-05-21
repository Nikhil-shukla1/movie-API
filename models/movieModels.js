//creating moongose schema

const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    movieName: {
      type:String,
      required: [true, "please add the name"],
    },
    actorName: {
      type:String,
      required: [true, "please add the actor and co-actor name"],
    },
    rating:{
      type:String,
      required:[true,`this field is required`],
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Movies",movieSchema);
