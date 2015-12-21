var express = require('express'),
    router = express.Router();

router
  .route('/users/:userId')
  .get(function (req, res) {
    res.json({
      "_id": req.params.userId,
      "userName": "JoeSchmoe123",
      "firstName": "Joe",
      "lastName": "Schmoe",
      "books": [
        {
          "bookId": 1234,
          "title": "Some Cool Book",
          "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "bookId": 1235,
          "title": "New American Novel",
          "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          "bookId": 1237,
          "title": "Some Cool Book II - Electric Bugaboo",
          "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    });
  });

router
  .route('/books')
  .post(function (req, res) {
    res.json({
      "bookId": 1238,
      "title": "My New Novel's Adventure",
      "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    });
  })
  .delete(function (req, res) {
    res.json({
      "msg": "book " + req.body.bookId + " was deleted"
    });
  });

router
  .route('/books/:bookId')
  .post(function (req, res) {
    res.json({
      "_id": req.params.bookId,
      "title": "Some Cool Book #" + req.params.bookId,
      "scenes": [
        { "sceneId": 123, "title": "Schmoe Goes to School", "wordCount": 200 },
        { "sceneId": 124, "title": "Cool Action Scene", "wordCount": 800 },
        { "sceneId": 125, "title": "Flashback", "wordCount": 250 }
      ]
    });
  })
  .get(function (req, res) {
    res.json({
      "_id": req.params.bookId,
      "title": "Some Cool Book #" + req.params.bookId,
      "summary": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "scenes": [
        { "sceneId": 123, "title": "Schmoe Goes to School", "wordCount": 200 },
        { "sceneId": 124, "title": "Cool Action Scene", "wordCount": 800 },
        { "sceneId": 125, "title": "Flashback", "wordCount": 250 }
      ]
    });
  });

router
  .route('/scenes')
  .post(function (req, res) {
    res.json({
      "sceneId": 126, "title": "My Totally New Scene!", "wordCount": 0
    });
  })
  .delete(function (req, res) {
    res.json({
      "msg": "scene " + req.body.sceneId + " was deleted"
    });
  });

router
  .route('/scenes/:sceneId')
  .post(function (req, res) {
    res.json({
      "_id": req.params.sceneId,
      "title": "Cool Action Scene",
      "wordCount": 805,
      "contents": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    });
  })
  .get(function (req, res) {
    res.json({
      "_id": req.params.sceneId,
      "title": "Cool Action Scene",
      "wordCount": 800,
      "contents": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    });
  });

module.exports = router;
