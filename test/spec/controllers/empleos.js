'use strict';

describe('Controller: EmpleosCtrl', function () {

  // load the controller's module
  beforeEach(module('listaTareasApp'));

  var EmpleosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EmpleosCtrl = $controller('EmpleosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
