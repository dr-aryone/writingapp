var Scene = require('mongoose').model('Scene'),
    Book = require('mongoose').model('Book');

exports.createScene = function (req, res) {
  var scene = new Scene(req.body.content),
      bookId = req.body.content.bookId;

  scene.save(function (err) {
    if (err) {
      return res.status(500).json({ error: err });
    }

    Book.findById(bookId, function (err, book) {
      book.scenes.push(scene._id);
      book.save(function (err) {
        if (err) {
          return res.status(500).json({ error: err });
        }

        return res.status(200).json({ scene });
      });
    });
  });
};

exports.listAllScenes = function (req, res) {
  Scene.find({}, function (err, scenes) {
    if (err) {
      return res.status(500).json({ error: err });
    }

    return res.status(200).json(scenes);
  });
};

exports.deleteScene = function (req, res) {
  var bookId = req.query.bookId,
      sceneId = req.params.sceneId;

  Scene.remove({ _id: sceneId }, function (err) {
    if (err) {
      return res.status(500).json({ error: err });
    }

    Book.findById(bookId, function (err, book) {
      book.scenes.splice(book.scenes.indexOf(sceneId), 1)[0];
      book.save(function (err) {
        return res.status(200).json({ "msg": "scene " + sceneId + " was deleted" });
      });
    });
  });
};

exports.updateScene = function (req, res) {
  var newScene = req.body;

  Scene.findById(req.body._id, function (err, scene) {
    if (err) {
      return res.status(500).json({ error: err });
    }

    scene.title = newScene.title;
    scene.wordCount = newScene.wordCount;
    scene.contents = newScene.contents;

    scene.save(function (err) {
      if (err) {
        return res.status(500).json({ error: err });
      }

      return res.status(200).json(scene);
    });
  });

  /*res.json({
    "_id": req.params.sceneId,
    "title": "Cool Action Scene",
    "wordCount": 805,
    "contents": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  });*/
};

exports.readScene = function (req, res) {
  Scene.findById(req.params.sceneId, function (err, scene) {
    if (err) {
      return res.status(500).json({ error: err });
    }

    return res.status(200).json(scene);
  });
};
