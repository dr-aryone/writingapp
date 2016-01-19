var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  summary: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Book', BookSchema);
