'use strict';

describe('Controller: AnimalesCtrl', function () {

  // load the controller's module
  beforeEach(module('listaTareasApp'));

  var AnimalesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnimalesCtrl = $controller('AnimalesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
