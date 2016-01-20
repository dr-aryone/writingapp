var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SceneSchema = new Schema({
  title: String,
  wordCount: Number,
  content: String
});

mongoose.model('Scene', SceneSchema);
