'use strict';

angular.module('listaTareasApp')
  .controller('AnimalesCtrl', function ($scope) {
    
    $scope.animales = [{nombre: "Perro", descripcion: "Mascota Casera"},
    					{nombre: "Gato", descripcion: "Mascota Casera Felina"},
    					{nombre: "Pez", descripcion: "Mascota Casera Acutica"},
    					{nombre: "Cerdo", descripcion: "Animal De granja"},
    					{nombre: "Vaca", descripcion: "Animal de Granja Muy productivo"}];

  });
