var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var SessionSchema = new Schema({
  // `title` is of type String
  positiveInteractions: Number,
  // `body` is of type String
  appropriateRequests: Number,
  appropriateResponse: Number,
  difficultyWith: String,
  successWith: String,
  date: Date,
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var Session = mongoose.model("Session", SessionSchema);

// Export the Note model
module.exports = Session;