var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SceneSchema = new Schema({
  title: String,
  wordCount: Number,
  contents: String
});

mongoose.model('Scene', SceneSchema);
