'use strict';

describe('scene', function () {
  var sceneService,
      httpBackend,
      sceneId = 123,
      respondGetScene;

  respondGetScene = {
    "_id": sceneId,
    "title": "Cool Action Scene",
    "wordCount": 800,
    "contents": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  };

  beforeEach(module('writeAway'));

  beforeEach(function () {
    inject(function ($httpBackend, _sceneService_) {
      sceneService = _sceneService_;
      httpBackend = $httpBackend;
      httpBackend.when('GET', '/api/v1/scenes/' + sceneId).respond(respondGetScene);
    });
  });

  afterEach(function () {
    httpBackend.flush();
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('getSceneContent method', function () {
    it('should return data for the book', function () {
      sceneService.getSceneContent(sceneId).then(function (res) {
        expect(res.data).toBeDefined();
        expect(typeof res.data).toBe('object');
        expect(res.data).toEqual(respondGetScene);
      });
    });
  });
});
