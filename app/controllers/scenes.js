exports.createScene = function (req, res) {
  res.json({
    "sceneId": 126, "title": "My Totally New Scene!", "wordCount": 0
  });
};

exports.deleteScene = function (req, res) {
  res.json({
    "msg": "scene " + req.body.sceneId + " was deleted"
  });
};

exports.updateScene = function (req, res) {
  res.json({
    "_id": req.params.sceneId,
    "title": "Cool Action Scene",
    "wordCount": 805,
    "contents": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  });
};

exports.readScene = function (req, res) {
  res.json({
    "_id": req.params.sceneId,
    "title": "Cool Action Scene",
    "wordCount": 800,
    "contents": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  });
};
