'use strict';

angular.module('listaTareasApp')
  .controller('IngresousuarioCtrl', function ($scope) {
    

  	$scope.usuarios = [{email: "pedro@correo.com", password: "xxxRRxxx"},
  						{email: "pablo@correo.com", password: "xxxRRxxx"}
  						{email: "marco@correo.com", password: "xxRRxx"}
  						{email: "carlos@correo.com", password: "xRRx"}];

  });
