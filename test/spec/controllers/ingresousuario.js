'use strict';

describe('Controller: IngresousuarioCtrl', function () {

  // load the controller's module
  beforeEach(module('listaTareasApp'));

  var IngresousuarioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IngresousuarioCtrl = $controller('IngresousuarioCtrl', {
      $scope: scope
    });
  }));

  it('Prueba de ingreso de Usuario E2E', function () {
    browser().navigateTo('#/ingreso');

    expect(browser().location().path().toBe("/ingreso"));
    input('email').enter('pedro@correo.com');
    input('password').enter('xxxRxxx');
    element('submit').click();
  });
});
