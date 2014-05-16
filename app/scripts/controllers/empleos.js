'use strict';

angular.module('listaTareasApp')
  .controller('EmpleosCtrl', function ($scope) {
    
    $scope.empleos = [{nombre: "Secretaria", descripcion: "Presta servicios de Digitalizacion"},
    				  {nombre: "Programador", descripcion: "Desarrolla Aplicativos Computacionales"},
    				  {nombre: "Futbolista", descripcion: "Se desempeña Como deportista"},
    				  {nombre: "Electrico", descripcion: "Trabaja con Partes Electronicas"},
    				  {nombre: "Panadero", descripcion: "Fabrica Productos a partit de Harina"}];
  });
