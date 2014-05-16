'use strict';

angular
  .module('listaTareasApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/animales', {
        templateUrl: 'views/animales.html',
        controller: 'AnimalesCtrl'
      })
      .when('/empleos', {
        templateUrl: 'views/empleos.html',
        controller: 'EmpleosCtrl'
      })
      .when('/ingreso', {
        templateUrl: 'views/ingreso.html',
        controller: 'IngresousuarioCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
