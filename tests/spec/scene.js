describe('Scene editor', function () {
  var sceneId = 123;

  beforeEach(function () {
    browser.get('/#/scenes/' + sceneId);
  });

  it('should load the page', function () {
    expect(element(by.id('scene_edit')).isPresent()).toBe(true);
  });

  it('should have a title field', function () {
    var titleField = element(by.id('scene_title'));
    expect(titleField.isPresent()).toBeTruthy();
    titleField.getAttribute('value').then(function (attr) {
      expect(attr.length).toBeTruthy();
    });
  });

  it('should load the text editor box', function () {
    var editor = element(by.css('.mce-tinymce'));
    expect(editor.isPresent()).toBeTruthy();
  });

  describe('when saving a scene', function () {
    var saveBtn = element(by.id('save_scene'));

    it('should have a save button', function () {
      expect(saveBtn.isPresent()).toBeTruthy();
    });
  });
});
